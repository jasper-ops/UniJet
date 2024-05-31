import 'axios';

declare module 'axios' {
    interface AxiosRequestConfig {
        needToken?: boolean;
        showLoading?: UniNamespace.ShowLoadingOptions | boolean;
    }
}
