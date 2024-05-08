<script setup lang="ts">
import pagesConfig from '@/pages.json';
import { goWhere } from '@/utils/pages';

const tabbar = [
    { text: 'home', icon: 'home' },
    { text: 'order', icon: 'list' },
];

const pages = getCurrentPages();
const current = pagesConfig.tabBar.list.findIndex(item => item.pagePath === pages[0].route);

function handleChange({ value }: { value: number }) {
    goWhere(`/${pagesConfig.tabBar.list[value].pagePath}`);
}
</script>

<script lang="ts">
export default {
    options: {
        virtualHost: true,
        styleIsolation: 'shared',
    },
};
</script>

<template>
    <WdTabbar
        :model-value="current"
        :fixed="true"
        :placeholder="true"
        :safe-area-inset-bottom="true"
        @change="handleChange"
    >
        <WdTabbarItem
            v-for="item in tabbar"
            :key="item.text"
            :title="$t(item.text)"
            :icon="item.icon"
        />
    </WdTabbar>
</template>
