import axios, { AxiosError } from 'axios';
import { createUniAppAxiosAdapter } from '@uni-helper/axios-adapter';
import i18n, { getLocale } from '@/i18n';

const isH5 = __UNI_PLATFORM__ === 'h5';

const origin = import.meta.env.VITE_CORE_ORIGIN;
const baseUrl = import.meta.env.VITE_CORE_BASEURL ?? '';

const http = axios.create({
    baseURL: isH5 ? baseUrl : `${origin}${baseUrl}`,
    adapter: createUniAppAxiosAdapter(),
    showLoading: {
        title: '加载中...',
        mask: true,
    },
});

http.interceptors.request.use((config) => {
    config.headers['Accept-Language'] = getLocale();

    return config;
});

http.interceptors.response.use((response) => {
    return response;
}, (error) => {
    // 响应状态码非20X会到进入这里执行
    if (error instanceof AxiosError) {
        const { response } = error;

        if (response?.status === 401) {
            // 可在此处做登出操作
        }
    }

    return Promise.reject(error);
});

export default http;
