import axios, { AxiosError } from 'axios';
import { createUniAppAxiosAdapter } from '@uni-helper/axios-adapter';
import useUserStore from '@/store/userStore';
import { getLocale } from '@/i18n';
import pinia from '@/store';

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

const userStore = useUserStore(pinia);

http.interceptors.request.use((config) => {
    config.headers['Accept-Language'] = getLocale();

    if (!isH5 && userStore.memberID)
        config.headers.Cookie = `AppMemberId=${userStore.memberID}`;

    if (config.needToken && userStore.token)
        config.headers.Authorization = `Bearer ${userStore.token}`;

    return config;
});

http.interceptors.response.use((response) => {
    const headerKeys = Object.keys(response.headers);

    // #region 更新token
    const tokenKey = headerKeys.find(key => key.toLowerCase() === 'refreshtoken');

    if (tokenKey) {
        const newToken = response.headers[tokenKey];

        if (newToken) {
            userStore.setState({
                token: newToken,
            });
        }
    }
    // #endregion 更新token

    console.log(response.status);

    return response;
}, (error) => {
    if (error instanceof AxiosError) {
        const { response } = error;

        if (response?.status === 401) {
            userStore.setState({
                token: '',
            });
        }
    }

    return Promise.reject(error);
});

export default http;
