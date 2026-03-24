import zhTW from './zh-TW.json';
import en from './en.json';

export type Locale = 'zh-TW' | 'en';

export const locales: Locale[] = ['zh-TW', 'en'];
export const defaultLocale: Locale = 'zh-TW';

const translations = { 'zh-TW': zhTW, en } as const;

export function getTranslation(locale: Locale) {
  return translations[locale] ?? translations[defaultLocale];
}

export function getAlternateLocale(locale: Locale): Locale {
  return locale === 'zh-TW' ? 'en' : 'zh-TW';
}

const base = import.meta.env.BASE_URL.replace(/\/$/, '');

/**
 * Get the path for a given locale.
 * zh-TW (default) → /base/path (no locale prefix)
 * en → /base/en/path
 */
export function getLocalePath(locale: Locale, path: string = '') {
  if (locale === defaultLocale) {
    return `${base}${path}` || `${base}/`;
  }
  return `${base}/${locale}${path}`;
}

/**
 * Get the locale route param for getStaticPaths.
 * zh-TW → undefined (root)
 * en → 'en'
 */
export function getLocaleRouteParams() {
  return locales.map((locale) => ({
    params: { locale: locale === defaultLocale ? undefined : locale },
    props: { locale },
  }));
}
