<script setup lang="ts">
import { onLoad } from '@dcloudio/uni-app';
import { ref } from 'vue';
import PageRoot from '@/components/page-root/page-root.vue';

const queries = ref<[string, any][]>([]);

onLoad((query = {}) => {
    console.log('🚀 ~ query:', query);
    queries.value = Object.entries(query);
});
</script>

<template>
    <PageRoot>
        <view
            v-for="item in queries"
            :key="item[0]"
        >
            {{ item[0] }}: {{ item[1] }}
        </view>
    </PageRoot>
</template>
