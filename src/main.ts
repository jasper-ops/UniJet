import { createSSRApp } from 'vue';
import { VueQueryPlugin } from '@tanstack/vue-query';
import App from '@/App.vue';
import 'virtual:uno.css';
import pinia from '@/store';
import i18n from '@/i18n';

export function createApp() {
    try {
        const app = createSSRApp(App);

        app.use(i18n);
        app.use(pinia);
        app.use(VueQueryPlugin);
        // 配置组件公共属性
        // Object.assign(app.config.globalProperties, {});

        return {
            app,
        };
    } catch (error) {
        console.log(error);
    }
}
