<script setup lang="ts">
import { computed } from 'vue';
import type { ScrollViewOnScroll } from '@uni-helper/uni-app-types/index';
import MainTabBar from '../main-tab-bar/main-tab-bar.vue';
import NavButtons from '../nav-buttons/nav-buttons.vue';
import { currentIsTabBar, getCurrentPageConfig } from '@/utils/RouteUtils';
import pagesConfig from '@/pages';

const props = withDefaults(defineProps<{
    title?: string;
    showTabBar?: boolean;
    onPageScroll?: ScrollViewOnScroll;
}>(), {
    showTabBar: true,
});

const $showTabBar = props.showTabBar && currentIsTabBar();

const $title = computed(() => {
    if (props.title)
        return props.title;

    const config = getCurrentPageConfig();

    return config?.style?.navigationBarTitleText ?? pagesConfig.globalStyle.navigationBarTitleText ?? '';
});

if ($showTabBar) {
    uni.hideTabBar({
        animation: false,
    });
}
</script>

<script lang="ts">
export default {
    name: 'App',
    options: {
        virtualHost: true,
    },
};
</script>

<template>
    <view class="App">
        <slot name="head">
            <WdNavbar
                :fixed="true"
                :placeholder="true"
                :safe-area-inset-top="true"
                :title="$t($title)"
            >
                <template #left>
                    <NavButtons />
                </template>
            </WdNavbar>
        </slot>
        <slot />
        <slot name="footer" />
        <MainTabBar v-if="$showTabBar" />
    </view>
</template>

<style lang="scss">
.App {
    --wot-navbar-title-font-weight: 400;
    --wot-navbar-title-font-size: 16px;

}
</style>
