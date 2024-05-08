<script setup lang="ts">
import MainTabBar from '../main-tab-bar/main-tab-bar.vue';
import NavButtons from '../nav-buttons/nav-buttons.vue';
import { currentIsTabBar } from '@/utils/pages';

const props = withDefaults(defineProps<{
    title?: string
    showTabBar?: boolean
}>(), {
    title: 'UniJet',
    showTabBar: true,
});

const $showTabBar = props.showTabBar && currentIsTabBar();
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
                :title="title"
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
