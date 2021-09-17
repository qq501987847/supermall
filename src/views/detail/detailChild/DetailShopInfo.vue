<template>
  <div class='DetailShopInfo'>
    <div class="services">
      <div class="services-item" v-for="(item,index) in shopInfo.services" :key="index">
        <img v-if="item.icon" :src="item.icon" alt="">
        <span>{{item.name}}</span>
      </div>
    </div>
    <div>
      <div style="display: flex; padding: 20px;">
        <img class="shopLogo" :src="shopInfo.shopLogo" alt="店铺logo">
        <h2 class="shop-name">{{shopInfo.name}}</h2>
      </div>
      <div style="display:flex;">
        <div style="display: flex; padding: 20px; font-size: 20px; font-weight: 600; color: #000;">
          <div class="cFC-box">
            <div>{{shopInfo.cSells}}</div>
            <div>销售量</div>
          </div>
          <div class="cFC-box" style="border-right: 2px solid #ccc;">
            <div>{{shopInfo.cFans}}</div>
            <div>粉丝数</div>
          </div>
        </div>
        <div class="score">
          <div class="score-item" v-for="(score,index) in shopInfo.score" :key="index">
            <span style="color: #000;font-size: 15px;font-weight: 600;">{{score.name}}</span>
            <span :class="{ 'red': score.score >= 5, 'green': score.score < 5}">{{score.score.toFixed(2)}}</span>
            <span :class="{ 'red': score.isBetter, 'green': !score.isBetter}">{{score.isBetter ? '高' : '低' }}</span>
          </div>
          
        </div>
      </div>
      <div style="display: flex; height: 100px; border-bottom: 2px solid #ccc;">
        <h2 class="in-shop">进店逛逛</h2>
      </div>
      

    </div>
  </div>
</template>
<script>

export default {
  name: 'DetailShopInfo',
  props: {
    shopInfo: {
      default() {
        return {
          services: []
        }
      }
    }
  },
  data () {
    return {
    }
  },
  components: {
  },
}
</script>
<style  scoped>
.services {
  display: flex;
  font-size: 12px;
  justify-content: space-around;
  padding: 20px 0;
  border-bottom: 2px solid #ccc;
}

.services-item {

}
.services img {
  width: 12px;
}

.shopLogo {
  border-radius: 50%;
  border: 1px solid #ccc;
  width: 25%;
}

.shop-name {
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin-left: 20px;
}

.cFC-box {
  padding: 10px;
}

.cFC-box div:nth-child(2) {
  margin-top: 5px;
}

.score {
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
}

.score-item {
  display: flex;
  justify-content: space-around;
}
.score-item span {

}

.in-shop {
  margin: auto;
  border: 1px solid;
  background-color: var(--color-tint);
  color: #fff;
  padding: 15px 20px;
}
</style>
