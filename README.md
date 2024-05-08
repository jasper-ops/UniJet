# 开发规范

- 环境相关变量

  - 应当在`import`之后立即读取环境变量后存入常量中，后续代码直接读取常量

    ```vue
    <script setup lang="ts">
    import '*';

    // 在import之后立即读取环境相关变量，并存入常量
    const isH5 = __UNI_PLATFORM__ === 'h5';
    const isApp = __UNI_PLATFORM__ === 'app';
    const isDev = import.meta.env.DEV;
    const isProd = import.meta.env.PROD;
    const VITE_NAME = import.meta.env.VITE_NAME;

    // 其他JS代码
    </script>
    ```
