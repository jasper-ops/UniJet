import { createI18n } from 'vue-i18n';
import en from '../locale/en.json';
import zhCN from '../locale/zh-CN.json';
import zhHK from '../locale/zh-HK.json';

const LANGUAGE_KEY = 'UniJet-Language';

export const languages = [
    {
        key: 'en',
        name: 'English',
        source: en,
    },
    {
        key: 'zh-CN',
        name: '简体中文',
        source: zhCN,
    },
    {
        key: 'zh-HK',
        name: '繁體中文',
        source: zhHK,
    },
];

const messages = Object.fromEntries(
    [
        ...languages.map(item => [item.key, item.source]),
        ['zh-TW', zhHK],
    ],
);

const i18n = createI18n({
    locale: getLocale(),
    messages,
    allowComposition: true,
});
console.log(i18n.global.locale);

export function setLocale(lang: string) {
    uni.setLocale(lang);
    uni.setStorageSync(LANGUAGE_KEY, lang);
    i18n.global.locale.value = lang;
}

export function getLocale() {
    return uni.getStorageSync(LANGUAGE_KEY) || 'zh-CN';
}

export default i18n;
