import { resolve } from 'node:path';
import process from 'node:process';
import { type UserConfig, defineConfig } from 'vite';
import dotenv from 'dotenv';
import Components from '@uni-helper/vite-plugin-uni-components';
import { WotResolver } from '@uni-helper/vite-plugin-uni-components/resolvers';
import Uni from '@dcloudio/vite-plugin-uni';

const DEVELOPMENT = 'development';
const PRODUCTION = 'production';

const envDir = './env';

function loadEnv(mode: string) {
    const paths: string[] = [];

    if (mode !== DEVELOPMENT && mode !== PRODUCTION) {
        paths.push(
            `${envDir}/.env.${mode}.${process.env.NODE_ENV}.local`,
            `${envDir}/.env.${mode}.${process.env.NODE_ENV}`,
        );
    }

    switch (process.env.NODE_ENV) {
        case DEVELOPMENT:
            paths.push(
                `${envDir}/.env.development.local`,
                `${envDir}/.env.development`,
            );
            break;
        case PRODUCTION:
            paths.push(
                `${envDir}/.env.production.local`,
                `${envDir}/.env.production`,
            );
            break;
    }

    paths.push(
        `${envDir}/.env.${mode}.local`,
        `${envDir}/.env.local`,
        `${envDir}/.env`,
    );

    console.log('Environments:');

    paths.forEach((path) => {
        console.log(path);
        dotenv.config({ path });
    });
}

function loadTheme(mode: string) {
    const paths = [
        '@import \'@/assets/styles/themes/theme.scss\';',
    ];

    if (mode !== DEVELOPMENT && mode !== PRODUCTION)
        paths.push(`@import '@/assets/styles/themes/theme.${mode}.scss';`);

    return paths.join('\n').concat('\n');
}

// https://vitejs.dev/config/
export default defineConfig(async ({ mode }) => {
    // 动态导入仅支持ESM的模块
    const UnoCss = await import('unocss/vite').then(i => i.default);

    loadEnv(mode); // 使用dotenv加载环境变量

    return {
        define: {
            __UNI_PLATFORM__: JSON.stringify(process.env.UNI_PLATFORM),
        },
        base: './',
        plugins: [
            Components({
                resolvers: [WotResolver()],
            }),
            Uni(),
            UnoCss(),
        ],
        resolve: {
            // 路径别名
            alias: {
                '@': resolve(__dirname, './src'),
            },
        },
        css: {
            preprocessorOptions: {
                scss: {
                    additionalData: loadTheme(mode),
                },
            },
            modules: {
                generateScopedName: '[local]-[hash:base64:8]',
                scopeBehaviour: 'global',
            },
        },
    } as UserConfig;
});
