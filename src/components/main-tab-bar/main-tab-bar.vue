<script setup lang="ts">
import pagesConfig from '@/pages';
import { goWhere } from '@/utils/RouteUtils';

const { tabBar } = pagesConfig;
const pages = getCurrentPages();
const current = tabBar.list.findIndex(item => item.pagePath === pages[0].route);

function handleChange({ value }: { value: number }) {
    if (value !== current)
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
        :inactive-color="tabBar.color"
        :active-color="tabBar.selectedColor"
        :model-value="current"
        :fixed="true"
        :placeholder="true"
        :safe-area-inset-bottom="true"
        @change="handleChange"
    >
        <WdTabbarItem
            v-for="item in tabBar.list"
            :key="item.text"
            :title="$t(item.text)"
            :icon="item.icon"
        />
    </WdTabbar>
</template>
