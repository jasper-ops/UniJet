<script setup lang="ts">
import { useI18n } from 'vue-i18n';
import type { ScrollViewOnScroll } from '@uni-helper/uni-app-types/index';
import { onPageScroll } from '@dcloudio/uni-app';
import PageRoot from '@/components/page-root/page-root.vue';
import { goWhere } from '@/utils/RouteUtils';

const { t } = useI18n();
const isH5 = __UNI_PLATFORM__ === 'h5';
console.log('🚀 ~ isH5:', isH5);

const isDev = import.meta.env.DEV;
console.log('🚀 ~ isDev:', isDev);

const isProd = import.meta.env.PROD;
console.log('🚀 ~ isProd:', isProd);

const name = import.meta.env.VITE_NAME;
console.log('🚀 ~ name:', name);

function goLogin() {
    goWhere('/pages/auth/index');
}

function showModal() {
    uni.showModal({
        title: t('modal.title'),
        content: t('modal.content'),
    });
}

// onPageScroll((e) => {
//     console.log(e);
// });
</script>

<template>
    <PageRoot>
        <view class="center-row">
            123456
            <button>{{ $t('submit') }}</button>
            <button @tap="goLogin">
                {{ $t('login') }}
            </button>
            <button @tap="showModal">
                modal
            </button>
        </view>
        <view
            v-for="i in 100"
            :key="i"
        >
            {{ i }}
        </view>
    </PageRoot>
</template>

<style lang="scss">

</style>
