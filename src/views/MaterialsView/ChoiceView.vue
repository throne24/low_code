<template>
    <Layout>
      <Router-link class="link-item mb-15" to="/materials/choice">单选题</Router-link>
      <Router-link class="link-item mb-15" to="/materials/choice/multiple">多选题</Router-link>
      <Router-link class="link-item mb-15" to="/materials/choice/judge">下拉选择</Router-link>
      <Router-link class="link-item mb-15" to="/materials/choice/short">图片单选题</Router-link>
      <Router-link class="link-item mb-15" to="/materials/choice/advanced">图片多选题</Router-link>
    </Layout>
</template>

<script setup lang="ts">
import Layout from './Layout.vue'
</script>

<style lang="scss" scoped>

</style>
