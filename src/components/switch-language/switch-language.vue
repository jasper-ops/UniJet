<script setup lang="ts">
import type { SelectorPickerOnChange } from '@uni-helper/uni-app-types';
import { computed } from 'vue';
import i18n, { languages, setLocale } from '@/i18n';

defineProps<{
    clazz?: unknown
}>();

const currentIndex = computed(() => {
    return languages.findIndex(item => item.key === i18n.global.locale);
});

const handleChange: SelectorPickerOnChange = (e) => {
    const index = e.detail.value;
    setLocale(languages[index].key);
};
</script>

<script lang="ts">
export default {
    name: 'SwitchLanguage',
    options: {
        virtualHost: true,
        addGlobalClass: true,
        styleIsolation: 'shared',
    },
};
</script>

<template>
    <picker
        class="inline leading-[1em]"
        :class="clazz"
        :value="currentIndex"
        :range="languages.map(item => item.name)"
        @change="handleChange"
    >
        <text class="i-carbon:earth align-bottom" />
    </picker>
</template>
