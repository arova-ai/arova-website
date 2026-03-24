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

export function getLocalePath(locale: Locale, path: string = '') {
  return `${base}/${locale}${path}`;
}
