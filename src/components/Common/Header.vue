<template>
  <div>
    <div class="container flex align-items-center border-box">
    <div class="left flex justify-content-center align-items-center">
        <el-button :icon="ArrowLeft" circle size="small" @click="goHome"/>
    </div>
    <div class="center flex justify-content-center align-items-center"></div>
    <div class="right flex justify-content-center align-items-center">
        <el-avatar :size="30" :src="avatar"/>
    </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ArrowLeft } from '@element-plus/icons-vue';
import { useRouter } from "vue-router";
import {ref} from 'vue'
const avatar = ref('https://cube.elemecdn.com/0/88/03b0d39583f48206768a7534e55bcpng.png')
//拿到当前路由实例
const router = useRouter();

const goHome = () => {
    router.push('/');
}
</script>

<style lang="scss" scoped>
.container {
    width: 100%;
    height: 50px;
    border-bottom: 1px solid var(--border-color);
}
.left {
    width: 60px;
    height: 100%;
}
.center {
    flex: 1;
    height: 100%;
    border-left: 1px solid var(--border-color);
    border-right: 1px solid var(--border-color);
}
.right {
    width: 80px;
    height: 100%;
}
</style>