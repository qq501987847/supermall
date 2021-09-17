<template>
  <div class='ShopEmpty'>
    <span class="iconfont icon-gouwuche"></span>
    <span>购物车空空如也</span>
    <span>买点什么犒劳一下自己吧！</span>
    <span @click="goHome">
      去逛逛
    </span>
  </div>
</template>
<script>

export default {
  name: 'ShopEmpty',
  data () {
    return {
    }
  },
  components: {
  },
  methods: {
    goHome() {
      this.$router.push({path: '/home'})
    }
  }
}
</script>
<style  scoped>
.ShopEmpty {
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: #f2f2f2;
  height: calc(100vh - 48px);
}
.ShopEmpty span {
  margin-top: 20px;
}

.ShopEmpty span:nth-child(1) {
  font-size: 150px;
  color: #ccc;
}

.ShopEmpty span:nth-child(2) {
  font-size: 20px;
  font-weight: 600;
}

.ShopEmpty span:nth-child(3) {
  font-size: 14px;
  color: #ccc;
}

.ShopEmpty span:nth-child(4) {
  display: flex;
  padding: 20px 40px;
  color: #fff;
  background-color: var(--color-tint);
  border: 1px solid #ccc;
}
</style>
