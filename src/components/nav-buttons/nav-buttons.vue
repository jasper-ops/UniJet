<script setup lang="ts">
import SwitchLanguage from '../switch-language/switch-language.vue';
import { currentIsHome, goBack, goHome } from '@/utils/pages';

let showCount = 0;

const showSwitchLanguage = true;
const showReturn = getCurrentPages().length > 1;
const showHome = !currentIsHome();

showReturn && showCount++;
showHome && showCount++;
showSwitchLanguage && showCount++;
</script>

<script lang="ts">
export default {
    name: 'NavButtons',
    options: {
        virtualHost: true,
        addGlobalClass: true,
        styleIsolation: 'shared',
    },
};
</script>

<template>
    <view
        v-if="showCount > 0"
        class="nav-buttons"
        :class="{
            'only-one': showCount === 1,
        }"
    >
        <view
            v-if="showReturn"
            class="item center-col"
            hover-class="nav-buttons--hover"
            @tap="() => goBack()"
        >
            <text class="i-carbon:chevron-left " />
        </view>

        <view
            v-if="showHome"
            class="item center-col"
            hover-class="nav-buttons--hover"
            @tap="goHome"
        >
            <text class="i-carbon:home" />
        </view>

        <view
            v-if="showSwitchLanguage"
            class="item center-col"
            hover-class="nav-buttons--hover"
        >
            <SwitchLanguage />
        </view>
    </view>
</template>

<style lang="scss" scoped>
.nav-buttons {
    line-height: normal;
    display: flex;
    align-items: center;
    border-radius: 999px;
    border: 1px solid $uni-border-color;
    font-size: 20px;
    overflow: hidden;

    &.only-one {
        @apply text-2xl;
        border: 0;
        padding: 0;

        .item {
            padding: 0;
        }
    }

    &--hover {
        background-color: $uni-bg-color-hover;
    }

    .item {
        padding: 4px 7px;
        border-right: 1px solid $uni-border-color;

        &:last-child {
            border-right: 0;
        }
    }

}
</style>
