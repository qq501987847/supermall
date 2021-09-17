<template>
  <div class='MainTabBar'>
    <tab-bar>
      <tab-bar-item  path="/home" activeColor="blue" :class="{activeColor: $route.path === '/home'}">
        <template #item-icon>
          <span class="iconfont icon-shouye"></span>
        </template>
        <template #item-text>
          <span >首页</span>
        </template>
      </tab-bar-item>
      <tab-bar-item  path="/category" activeColor="blue" :class="{activeColor: $route.path === '/category'}">
        <template #item-icon>
          <span class="iconfont icon-fenlei"></span>
        </template>
        <template #item-text>
          <span >分类</span>
        </template>
      </tab-bar-item>
      <tab-bar-item  path="/shopcart" activeColor="blue" :class="{activeColor: $route.path === '/shopcart'}">
        <template #item-icon>
          <span class="iconfont icon-gouwuche"></span>
        </template>
        <template #item-text>
          <span >购物车</span>
        </template>
      </tab-bar-item>
      <tab-bar-item path="/profile" activeColor="blue" :class="{activeColor: $route.path === '/profile'}">
        <template #item-icon>
          <span class="iconfont icon-xiazai"></span>
        </template>
        <template #item-text>
          <span >我的</span>
        </template>
      </tab-bar-item>
    </tab-bar>
  </div>
</template>
<script>
import TabBar from 'components/common/tabbar/TabBar.vue'
import TabBarItem from 'components/common/tabbar/TabBarItem.vue'

export default {
  name: 'MainTabBar',
  data () {
    return {
    }
  },
  components: {
    TabBar,
    TabBarItem
  },
}
</script>
<style  scoped>
.iconfont {
  font-size: 24px;
}
.activeColor {
  color: var(--color-high-text);
}

/* .MainTabBar {
  height: 48px;
  box-shadow: 0px 10px 10px rgba(100,100,100,0.4);
} */
</style>
