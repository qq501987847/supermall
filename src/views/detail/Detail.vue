<template>
  <div class='detail'>
    <nav-bar style="border-bottom: 1px solid; background-color: #fff;">
      <template #left>
        <div style="display: flex; flex: 1;">
          <span
          @click="backOrigin"
            class="iconfont icon-fanhui"
            style="margin: auto;"
          ></span>
        </div>
      </template>
      <template #center>
        <div style="flex:4;">
          <ul style="display: flex; justify-content: space-around;">
            <li
              v-for="(item,index) in topItems"
              :key="index"
              
            >
              <a 
              @click="scrollY = index"
              :class="{'activeTopTab': index === scrollY}"
              :href="item.href">{{item.name}}</a>
            </li>

          </ul>
        </div>
      </template>
      <template #right>
        <div style="flex: 1;"> </div>
      </template>

    </nav-bar>
    <!-- 展示图，价格 销量等 -->
    <div
      class="goods-item-info"
      id="shop"
      ref="shop"
    >
      <detail-swiper :banners="banners"></detail-swiper>
      <detail-item-info
        :itemInfo="itemInfo"
        :columns="columns"
      ></detail-item-info>
    </div>
    <detail-shop-info :shopInfo="shopInfo"></detail-shop-info>
    <detail-info :detailInfo="detailInfo"></detail-info>
    <detail-item-params
      :itemParams="itemParams"
      id="params"
      ref="params"
    ></detail-item-params>
    <detail-rate
      id="rate"
      ref="rate"
      :rate="rate"
    ></detail-rate>
    <detail-recommend
      id="recommend"
      ref="recommend"
      :detailGoodsList="detailGoodsList"
    ></detail-recommend>
    <div class="detail-bottom">没有更多了...</div>
    <detail-tab-bar @addShop="addShop"></detail-tab-bar>
  </div>
</template>
<script>
import NavBar from "components/common/navbar/NavBar.vue"

// child
import DetailSwiper from './detailChild/DetailSwiper.vue'
import DetailItemInfo from "./detailChild/DetailItemInfo.vue"
import DetailShopInfo from "./detailChild/DetailShopInfo.vue"
import DetailInfo from "./detailChild/DetailInfo.vue"
import DetailItemParams from "./detailChild/DetailItemParams.vue"
import DetailRate from "./detailChild/DetailRate.vue"
import DetailRecommend from "./detailChild/DetailRecommend.vue"
import DetailTabBar from './detailChild/DetailTabBar'


// 请求
import { getDetail, getDetailRecommend } from 'network/detail'
export default {
  name: 'Detail',
  data () {
    return {
      id: '',
      result: {},
      banners: [],
      itemInfo: {},
      columns: [],
      shopInfo: {},
      detailInfo: {},
      itemParams: {},
      rate: {},
      detailGoodsList: [],
      scrollY: 0,
      topItems: [
        { href: '#shop', name: '商品' },
        { href: '#params', name: '参数' },
        { href: '#rate', name: '评论' },
        { href: '#recommend', name: '推荐' }
      ]
    }
  },
  components: {
    DetailTabBar,
    NavBar,
    DetailSwiper,
    DetailItemInfo,
    DetailShopInfo,
    DetailInfo,
    DetailItemParams,
    DetailRate,
    DetailRecommend
  },
  created () {
    console.log(this.$route)
    this.id = this.$route.params.id
    getDetail(this.id).then(res => {
      console.log(res.result)
      this.result = res.result
      this.banners = res.result.itemInfo.topImages
      this.itemInfo = res.result.itemInfo
      this.columns = res.result.columns
      this.shopInfo = res.result.shopInfo
      this.detailInfo = res.result.detailInfo
      this.itemParams = res.result.itemParams
      this.rate = res.result.rate
    })

    getDetailRecommend().then(res => {
      // console.log(res.data.list)
      this.detailGoodsList = res.data.list
    })
  },
  mounted () {
    window.addEventListener('scroll', this.handleScroll)
    console.log(11)
  },
  methods: {
    // 回到主页
    backOrigin () {
      this.$router.push({path: '/home'})
    },

    // 当前tab高亮
    handleScroll () {
      // console.log(this.$refs.params.$el)
      const paramsTop = this.$refs.params.$el.offsetTop - 48;
      const rateTop = this.$refs.rate.$el.offsetTop - 48;
      const recommendTop = this.$refs.recommend.$el.offsetTop - 48;
      // console.log(paramsTop)
      if (window.scrollY >= paramsTop) {
        this.scrollY = 1
      }
      if (window.scrollY >= rateTop) {
        this.scrollY = 2
      }
      if (window.scrollY >= recommendTop) {
        this.scrollY = 3
      }
    },
    // 添加到购物车
    addShop() {
      let payload = this.itemInfo
      this.$store.commit('ADD_SHOP', payload)
    }
  },
  destroyed () {
    window.removeEventListener('scroll',this.handleScroll)
  }
}
</script>
<style scoped>
.goods-item-info {
  position: relative;
  /* top: 48px; */
  margin-top: 48px;
  border-bottom: 2px solid #ccc;
}

.detail-bottom {
  margin-bottom: 60px;
}

.activeTopTab {
  color: var(--color-tint);
}

html{
  scroll-padding-top: 60px;
}

</style>
