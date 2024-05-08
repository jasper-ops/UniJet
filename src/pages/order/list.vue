<script setup lang="ts">
import MainTabBar from '@/components/main-tab-bar/main-tab-bar.vue';
import PageRoot from '@/components/page-root/page-root.vue';

const isH5 = __UNI_PLATFORM__ === 'h5';
</script>

<template>
    <PageRoot :title="$t('order')">
        订单列表
    </PageRoot>
</template>

<style lang="scss">

</style>
