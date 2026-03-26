# 如何協作 Arova 官網

## 你是誰？選擇適合的方式

### 🟢 非技術成員（PM / 行銷 / 業務）

**用 GitHub Issue，AI 自動幫你改。**

1. 到 [Issues 頁面](https://github.com/arova-ai/arova-website/issues/new/choose)
2. 選擇模板：
   - **修改文案** — 改網站上的文字
   - **新增 FAQ** — 加一則常見問題
   - **新增案例** — 加客戶成功案例
   - **新增 Blog 文章** — 加文章卡片
   - **內容更新** — 其他內容變更
   - **Bug 回報** — 回報問題
3. 填寫表單，確認標籤有 `ai-agent`
4. 送出後 AI Agent 會自動處理、建 PR、合併、部署
5. 約 5 分鐘後網站自動更新

> 完全不需要碰程式碼！

---

### 🟡 會用 GitHub 的人

**直接在 GitHub 網頁上編輯。**

內容檔案在這兩個 JSON 檔：
- `src/i18n/zh-TW.json` — 繁體中文
- `src/i18n/en.json` — English

1. 在 GitHub 上打開檔案，點鉛筆圖示編輯
2. 找到要改的文字，修改
3. **兩個語言檔都要改**（結構要一致）
4. 選「Create a new branch and start a pull request」
5. 等 reviewer 審核後合併

---

### 🔴 開發者

**本地開發。**

```bash
git clone https://github.com/arova-ai/arova-website.git
cd arova-website
npm install
npm run dev    # http://localhost:4321
```

技術棧：Astro 5.x + Tailwind CSS v4 + React islands

詳細開發指南請看 `.claude/skills/brand-website/SKILL.md`

---

## 網站架構快速指南

```
src/
  i18n/zh-TW.json    ← 所有中文內容在這裡
  i18n/en.json        ← 所有英文內容在這裡
  pages/[...locale]/  ← 頁面檔案
  components/         ← 元件
```

### 內容修改原則

1. **改文字** → 只改 JSON 檔，不需要動頁面檔
2. **改版面** → 需要動 `.astro` 頁面檔
3. **兩個語言檔結構必須一致** — 加了中文 key，英文也要加

---

## Issue 標籤說明

| 標籤 | 用途 |
|------|------|
| `ai-agent` | 讓 AI Agent 自動處理這個 issue |
| `content-update` | 內容更新類的 issue |
| `bug` | Bug 回報 |

---

## 審核流程

- 所有變更都需要經過 PR
- `src/i18n/` 的修改需要 @spacecadet0418 或 @lyhcode 審核
- `.github/` 和設定檔的修改需要 @lyhcode 審核
- AI Agent 的自動 PR 會立即合併（已經過 AI 驗證）
