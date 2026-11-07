<template>
    <Layout>
      <Router-link class="link-item mb-15" to="/materials/single-choice">单选题</Router-link>
      <Router-link class="link-item mb-15" to="/materials/multiple">多选题</Router-link>
      <Router-link class="link-item mb-15" to="/materials/judge">下拉选择</Router-link>
      <Router-link class="link-item mb-15" to="/materials/short">图片单选题</Router-link>
      <Router-link class="link-item mb-15" to="/materials/advanced">图片多选题</Router-link>
    </Layout>
</template>

<script setup lang="ts">
import Layout from './Layout.vue'
</script>

<style lang="scss" scoped>

</style>
