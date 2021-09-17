<template>
    <ul class="detail-tab-bar">
      <li class="kefu-dianpu-shoucang">
        <span class="iconfont icon-kefu"></span>
        <span>客服</span>
      </li>
      <li class="kefu-dianpu-shoucang">
        <span class="iconfont icon-ziyuan183"></span>
        <span>店铺</span>
      </li>
      <li class="kefu-dianpu-shoucang">
        <span class="iconfont icon-shoucang"></span>
        <span>收藏</span>
      </li>
      <li class="addShopCart" @click="addShopcart">
        <span>加入购物车</span>
      </li>
      <li class="buy">
        <span>购买</span>
      </li>
    </ul>
</template>
<script>
export default {
  name: 'DetailTabBar',
  data () {
    return {
    }
  },
  components: {
  },
  methods: {
    addShopcart() {
      this.$toast('购物车+1')
      this.$emit('addShop')
    }
  }
}
</script>
<style scoped>
.detail-tab-bar {
  display: flex;
  height: 60px;

  position: fixed;
  left: 0;
  right: 0;
  bottom: 0;
  text-align: center;

  border-top: 2px solid #6f6f6f;
  background-color: #fff;
}

.detail-tab-bar li {
  /* border: 1px solid; */
  flex: 1;
}

.kefu-dianpu-shoucang {
  display: flex;
  flex-direction: column;
  justify-content: center;
}

.kefu-dianpu-shoucang span:nth-child(1) {
  margin-bottom: 4px;
  font-size: 25px;
}

.detail-tab-bar .addShopCart {
  /* padding: 0 10px; */
  flex: 1.8;
  display: flex;
  background-color: rgb(236, 233, 11);
}

.addShopCart span {
  margin: auto;
  font-weight: 700;
}

.detail-tab-bar .buy {
  flex: 1.5;
  display: flex;
  background-color: var(--color-tint);
}

.buy span {
  margin: auto;
  color: #fff;
}
</style>
