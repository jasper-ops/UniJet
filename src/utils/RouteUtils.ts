import { last } from 'lodash-es';
import QueryString from 'qs';
import type { AllRoutes } from '@/pages';
import pagesConfig, { homePath, homeRoute } from '@/pages';

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

    const index = pagesConfig.tabBar.list.findIndex(item => item.pagePath === currentRoute);
    return index >= 0;
}

export function getCurrentPageConfig() {
    const currentPages = getCurrentPages();

    if (currentPages.length < 1)
        return;
    const currentRoute = last(currentPages)!.route;

    return pagesConfig.pages.find(item => item.path === currentRoute);
}

export function goWhere(url: string): void;
export function goWhere(url: AllRoutes): void;
export function goWhere(url: string, params: Record<string, any>): void;
export function goWhere(url: AllRoutes, params: Record<string, any>): void;
export function goWhere(url: string, params: Record<string, any> = {}) {
    if (!url.startsWith('/'))
        throw new Error('Only accept the absolute path');

    const targetRoute = url.slice(1);

    const index = pagesConfig.tabBar.list.findIndex(item => item.pagePath === targetRoute);

    // url = url + fastQueryString.stringify(params);
    url = url + QueryString.stringify(params);

    if (index >= 0)
        uni.switchTab({ url });
    else
        uni.navigateTo({ url });
}

export function goHome(params: Record<string, any> = {}) {
    goWhere(homePath, params);
}

export function goBack(delta = 1) {
    uni.navigateBack({ delta });
}
