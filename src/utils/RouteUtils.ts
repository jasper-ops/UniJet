import { last } from 'lodash-es';
import fastQueyString from 'fast-querystring';
import { onUnload } from '@dcloudio/uni-app';
import type { AllRoutes } from '@/pages';
import pagesConfig, { homePath } from '@/pages';

export interface RouteOptions {
    /**
     * 路由参数，最终会拼接到url上
     */
    params?: Record<string, any>;

    /**
     * 大数据，直接存储在内存中，在新页面中通过{@link useRouteData}访问
     */
    data?: Record<string, any>;

    /**
     * 如果可以使用redirect，则使用redirect
     */
    redirectIfPossible?: boolean;
}

const routeDataMap = new Map<string, Record<string, any>>();
const tabBarSet = new Set<string>(pagesConfig.tabBar.list.map(item => item.pagePath));

export function getCurrentRoute() {
    const currentPages = getCurrentPages();
    return last(currentPages)?.route;
}

export function currentIsHome() {
    const currentRoute = getCurrentRoute();
    if (!currentRoute)
        return false;

    return homePath.endsWith(currentRoute);
}

export function currentIsTabBar() {
    const currentRoute = getCurrentRoute();
    if (!currentRoute)
        return false;

    return pagesConfig.tabBar.list.some(item => item.pagePath === currentRoute);
}

export function getCurrentPageConfig() {
    const currentRoute = getCurrentRoute();
    if (!currentRoute)
        return;

    return pagesConfig.pages.find(item => item.path === currentRoute);
}

export function goWhere(url: string, options?: RouteOptions): void;
export function goWhere(url: AllRoutes, options?: RouteOptions): void;
export function goWhere(url: string, options: RouteOptions = {}) {
    if (!url.startsWith('/'))
        throw new Error('Only accept the absolute path');

    const {
        data = {},
        params = {},
        redirectIfPossible = false,
    } = options;

    const separatorIndex = url.indexOf('?');

    if (separatorIndex > 0) {
        const parsedParams = fastQueyString.parse(url.slice(separatorIndex + 1));
        Object.assign(params, parsedParams);

        url = url.slice(0, separatorIndex);
    }

    const targetRoute = url.slice(1);

    routeDataMap.set(targetRoute, data); // 存储路由数据
    const isTabBar = tabBarSet.has(targetRoute);

    url = `${url}?${fastQueyString.stringify(params)}`;

    if (isTabBar)
        uni.switchTab({ url });
    else if (redirectIfPossible)
        uni.redirectTo({ url });
    else
        uni.navigateTo({ url });
}

export function goHome(params: Record<string, any> = {}) {
    goWhere(homePath, params);
}

export function goBack(delta = 1) {
    uni.navigateBack({ delta });
}

export function useRouteData() {
    const route = getCurrentRoute();

    if (!route)
        return;

    const data = routeDataMap.get(route);

    onUnload(() => {
        routeDataMap.delete(route);
    });

    return { data };
}
