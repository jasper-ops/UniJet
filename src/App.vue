<script setup lang="ts">
import { onHide, onLaunch, onShow } from '@dcloudio/uni-app';

onLaunch(() => {
    console.log('App Launch');
    uni.hideTabBar({
        animation: false,
    });
});

onShow(() => {
    console.log('App Show');
});

onHide(() => {
    console.log('App Hide');
});
</script>

<style lang="scss">
@import 'app.scss';
@import '@/assets/styles/common.scss';
</style>
