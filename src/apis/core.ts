import axios from 'axios';
import { createUniAppAxiosAdapter } from '@uni-helper/axios-adapter';

const isH5 = __UNI_PLATFORM__ === 'h5';

const origin = import.meta.env.VITE_CORE_ORIGIN;
const baseUrl = import.meta.env.VITE_CORE_BASEURL;

const http = axios.create({
    baseURL: isH5 ? baseUrl : `${origin}${baseUrl}`,
    adapter: createUniAppAxiosAdapter(),
});

export default http;
