<template>
  <div id="app">
    <router-view v-if="$route.path !== '/home' && $route.path !== '/shopcart'"></router-view>
    <keep-alive>
      <router-view v-if="$route.path === '/home' || $route.path === '/shopcart'"></router-view>
    </keep-alive>
    <main-tab-bar v-if="!$route.meta.isDetail"></main-tab-bar>
        <!-- <detail-tab-bar v-if="this.$route.meta.isDetail"></detail-tab-bar> -->

  </div>
</template>

<script>
import MainTabBar from 'components/content/mainTabBar/MainTabBar.vue'


export default {
  name: 'App',
  components: {
    MainTabBar,
  }
}
</script>
<style>
@import 'assets/css/base.css';
</style>
