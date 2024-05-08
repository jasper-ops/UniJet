export * from './utils.d';

declare global {
    const __UNI_PLATFORM__: 'h5' | 'app'
        | 'mp-alipay'
        | 'mp-baidu'
        | 'mp-jd'
        | 'mp-kuaishou'
        | 'mp-lark'
        | 'mp-qq'
        | 'mp-toutiao'
        | 'mp-weixin'
        | 'quickapp-webview'
        | 'quickapp-webview-huawei'
        | 'quickapp-webview-union';
}
