<script setup lang="ts">
import PageRoot from '@/components/page-root/page-root.vue';
import { goWhere } from '@/utils/pages';

const isH5 = __UNI_PLATFORM__ === 'h5';
console.log('🚀 ~ isH5:', isH5);

const isDev = import.meta.env.DEV;
console.log('🚀 ~ isDev:', isDev);

const isProd = import.meta.env.PROD;
console.log('🚀 ~ isProd:', isProd);

const name = import.meta.env.VITE_NAME;
console.log('🚀 ~ name:', name);
</script>

<template>
    <PageRoot :title="$t('home')">
        <view class="center-row">
            <button>{{ $t('submit') }}</button>
            <button @tap="() => goWhere('/pages/auth/login/index')">
                {{ $t('login') }}
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
