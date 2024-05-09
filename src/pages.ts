const pagesConfig = {
    pages: [
        {
            path: 'pages/index/index',
            style: {
                navigationBarTitleText: 'home',
            },
        },
        {
            path: 'pages/order/list',
            style: {
                navigationBarTitleText: 'home',
            },
        },
        {
            path: 'pages/auth/login/index',
            style: {
                navigationBarTitleText: 'home',
            },
        },
    ],
    globalStyle: {
        navigationBarTextStyle: 'black',
        navigationBarTitleText: 'UniJet',
        navigationBarBackgroundColor: '#F8F8F8',
        backgroundColor: '#F8F8F8',
        navigationStyle: 'custom',
        rpxCalcMaxDeviceWidth: 430,
    },
    tabBar: {
        color: '#666',
        selectedColor: '#1bb5e8',
        list: [
            { pagePath: 'pages/index/index', icon: 'home', text: 'home' },
            { pagePath: 'pages/order/list', icon: 'list', text: 'order' },
        ],
    },
} as const;

export const pagesRoutes = pagesConfig.pages.map(item => `/${item.path}` as const);

export const homeRoute = pagesConfig.pages[0].path;
export const homePath = `/${homeRoute}` as const;

export type AllRoutes = typeof pagesRoutes[number];

export default pagesConfig;
