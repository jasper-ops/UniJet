import { last } from 'lodash-es';
import { pages, tabBar } from '@/pages.json';

export const homeRoute = pages[0].path;

export function currentIsHome() {
    const currentPages = getCurrentPages();
    if (currentPages.length < 1)
        return false;

    const currentRoute = last(currentPages)!.route;
    console.log(currentRoute);

    return currentRoute === homeRoute;
}

export function currentIsTabBar() {
    const currentPages = getCurrentPages();
    if (currentPages.length < 1)
        return false;

    const currentRoute = last(currentPages)!.route;

    const index = tabBar.list.findIndex(item => item.pagePath === currentRoute);
    return index >= 0;
}

export function goWhere(url: string) {
    if (!url.startsWith('/'))
        throw new Error('Only accept the absolute path');

    const targetRoute = url.slice(1);

    const index = tabBar.list.findIndex(item => item.pagePath === targetRoute);

    if (index >= 0)
        uni.switchTab({ url });
    else
        uni.navigateTo({ url });
}

export function goHome() {
    goWhere(`/${homeRoute}`);
}

export function goBack(delta = 1) {
    uni.navigateBack({ delta });
}
