import { createSSRApp } from 'vue';
import App from './App.vue';
import 'virtual:uno.css';
import i18n from '@/i18n';

// import 'virtual:uno.css';

export function createApp() {
    try {
        const app = createSSRApp(App);

        app.use(i18n);
        // 配置组件公共属性
        // Object.assign(app.config.globalProperties, {});

        return {
            app,
        };
    } catch (error) {
        console.log(error);
    }
}
