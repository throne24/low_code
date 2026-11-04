<template>
  <Header />
  <div>
    <h1 class="title font-weight-100 text-center m0 p0">组件市场</h1>
    <div class="container mc flex justify-center items-center">
      <nav class="category">
      <Router-link class="category-item" to="/materials/choice">
        <el-icon><CircleCheck /></el-icon>
        <div>选择</div>
      </Router-link>

      <Router-link class="category-item" to="/materials/text">
        <el-icon><EditPen /></el-icon>
        <div>文本输入</div>
      </Router-link>

      <Router-link class="category-item" to="/materials/advanced">
        <el-icon><Files /></el-icon>
        <div>高级题型</div>
      </Router-link>

      <Router-link class="category-item" to="/materials/note">
        <el-icon><ChatLineSquare /></el-icon>
        <div>备注说明</div>
      </Router-link>

      <Router-link class="category-item" to="/materials/profile">
        <el-icon><User /></el-icon>
        <div>个人信息</div>
      </Router-link>

      <Router-link class="category-item" to="/materials/contact">
        <el-icon><Message /></el-icon>
        <div>联系方式</div>
      </Router-link>
      </nav>
      <RouterView class="coms" />
    </div>
  </div>
</template>

<script setup lang="ts">
import Header from '@/components/Common/Header.vue'
import { ElIcon } from 'element-plus'
import { CircleCheck,Files,EditPen,ChatLineSquare,User,Message } from '@element-plus/icons-vue'
</script>


<style lang="scss" scoped>
.title {
    height: 50px;
    margin: 20px 0;
}
.container {
    width: 1180px;
    // max-width: 100%;
    height: 600px;
    // border: 1px solid var(--border-color);
    // box-sizing: border-box;
}
.coms {
    width: calc(1180px - 60px);
    height: 100%;
}
.category{
    width:70px ;
    height:100% ;
    >.category-item{
      width: 70px;
      height: 70px;
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      margin-bottom: 10px;
      text-align: center;
      text-decoration: none;
      font-size: var(--font-size-base);
      color: var(--white);
      border-top-left-radius: var(--border-radius-lg);
      border-bottom-left-radius: var(--border-radius-lg);
    }
    @for $i from 1 through 4{
      .category-item:nth-child(4n + #{$i}){
        @if $i == 1{
          background-color: var(--primary-color);
        } @else if $i == 2{
          background-color: var(--success-color);
        } @else if $i == 3{
          background-color: var(--warning-color);
        } @else if $i == 4{
          background-color: var(--error-color);
        }
      }
    }
}

</style>