---
name: github-pages-domain
description: >
  Diagnose and configure GitHub Pages custom domains, DNS records, SSL certificates,
  and www/apex redirects. Use this skill whenever the user mentions: custom domain,
  GitHub Pages, SSL certificate, HTTPS not working, www redirect, DNS for GitHub Pages,
  CNAME file, 自訂網域, 憑證, 網域設定, www 無法訪問, or any issue with the site's
  domain configuration at arova-ai.com. Also trigger when diagnosing 404 errors,
  SSL errors, or redirect loops on the production site.
---

# GitHub Pages Custom Domain Management

Diagnose and manage the custom domain setup for arova-ai.com on GitHub Pages.

## Architecture

```
arova-ai.com (apex)          → GitHub Pages A records (4 IPs)
www.arova-ai.com (www)       → CNAME to arova-ai.github.io
GitHub Pages custom domain   → arova-ai.com (apex is the primary)
SSL certificate              → Let's Encrypt, covers both apex + www
```

## Key Facts

- **Repo**: `arova-ai/arova-website`
- **Primary domain**: `arova-ai.com` (apex)
- **GitHub Pages IPs** (for A records):
  - `185.199.108.153`
  - `185.199.109.153`
  - `185.199.110.153`
  - `185.199.111.153`
- **CNAME file**: `public/CNAME` contains `arova-ai.com`
- **DNS provider**: Gandi (use `gandi-arova` skill for API calls)
- **SSL**: Let's Encrypt via GitHub Pages, auto-renewed

## Diagnostic Workflow

When something is wrong with the domain, run these checks in order:

### 1. DNS Resolution
```bash
# Check apex A records
dig arova-ai.com A +short
# Expected: 4 GitHub Pages IPs

# Check www CNAME
dig www.arova-ai.com CNAME +short
# Expected: arova-ai.github.io.

# Use external DNS to bypass cache
dig arova-ai.com A @8.8.8.8 +short
dig www.arova-ai.com CNAME @1.1.1.1 +short
```

### 2. HTTP/HTTPS Access
```bash
# Test apex
curl -sI -o /dev/null -w "HTTPS %{http_code}" https://arova-ai.com
# Expected: 200

# Test www (should redirect to apex)
curl -sI -o /dev/null -w "%{http_code} → %{redirect_url}" https://www.arova-ai.com
# Expected: 301 → https://arova-ai.com/

# Test HTTP redirect
curl -sI -o /dev/null -w "%{http_code} → %{redirect_url}" http://arova-ai.com
# Expected: 301 → https://arova-ai.com/
```

### 3. SSL Certificate
```bash
# Check what cert is being served
echo | openssl s_client -servername arova-ai.com -connect 185.199.108.153:443 2>/dev/null | grep "subject="
# Expected: CN=arova-ai.com (NOT *.github.io)

# Check www cert
echo | openssl s_client -servername www.arova-ai.com -connect 185.199.108.153:443 2>/dev/null | grep "subject="
```

### 4. GitHub Pages Config
```bash
gh api repos/arova-ai/arova-website/pages | jq '{cname, https_enforced, cert_state: .https_certificate.state, domains: .https_certificate.domains}'
```

## Common Issues & Fixes

### Issue: SSL certificate shows `*.github.io` instead of custom domain
**Cause**: GitHub Pages hasn't provisioned a Let's Encrypt cert yet.
**Fix**: Wait 5-15 minutes. Check cert state via `gh api`. If stuck, toggle the custom domain:
```bash
gh api repos/arova-ai/arova-website/pages -X PUT -f cname=""
sleep 10
gh api repos/arova-ai/arova-website/pages -X PUT -f cname="arova-ai.com"
```

### Issue: www.arova-ai.com HTTPS fails
**Cause**: www CNAME points to apex (`arova-ai.com.`) instead of `arova-ai.github.io.`
**Fix**: Update www CNAME on Gandi (use gandi-arova skill):
```bash
# WRONG: www → arova-ai.com.  (SSL cert won't cover www)
# RIGHT: www → arova-ai.github.io.  (GitHub Pages serves + gets cert)
```
The www CNAME must point to `arova-ai.github.io.` so GitHub Pages can:
1. Serve the site from its servers
2. Include www in the SSL certificate
3. Return a 301 redirect to the apex domain

### Issue: `arova-ai.com` redirects to `www.arova-ai.com`
**Cause**: GitHub Pages custom domain is set to `www.arova-ai.com` instead of `arova-ai.com`.
**Fix**: The custom domain setting controls which is primary. Keep it as apex:
```bash
gh api repos/arova-ai/arova-website/pages -X PUT -f cname="arova-ai.com"
```
And ensure `public/CNAME` contains `arova-ai.com`.

### Issue: HTTPS enforcement fails ("certificate not yet issued")
**Cause**: Let's Encrypt cert is still being provisioned.
**Fix**: Wait and retry:
```bash
# Check cert state
gh api repos/arova-ai/arova-website/pages | jq '.https_certificate.state'
# "new" = provisioning, "approved" = ready, "dns_changed" = re-provisioning

# Once cert is ready:
gh api repos/arova-ai/arova-website/pages -X PUT -F https_enforced=true
```

### Issue: Local DNS cache shows old records
**Fix**: Flush macOS DNS cache:
```bash
sudo dscacheutil -flushcache && sudo killall -HUP mDNSResponder
```

## Correct DNS Setup (Reference)

| Record | Type | Value | TTL |
|--------|------|-------|-----|
| `@` | A | `185.199.108.153` | 3600 |
| `@` | A | `185.199.109.153` | 3600 |
| `@` | A | `185.199.110.153` | 3600 |
| `@` | A | `185.199.111.153` | 3600 |
| `www` | CNAME | `arova-ai.github.io.` | 3600 |
| `@` | MX | `10 spool.mail.gandi.net.` | 10800 |
| `@` | MX | `50 fb.mail.gandi.net.` | 10800 |
| `@` | TXT | `"v=spf1 include:_mailcust.gandi.net ?all"` | 10800 |

Do NOT modify MX, SPF (TXT), or DKIM (gm1/gm2._domainkey CNAME) records — they are for email.

## Pre-Change Checklist

Before making DNS changes:
1. Create a Gandi DNS snapshot (via gandi-arova skill)
2. List current records and confirm what exists
3. Make the change
4. Verify with `dig` using external DNS (`@8.8.8.8`)
5. Wait for propagation if needed
