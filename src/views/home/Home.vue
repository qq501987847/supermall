<template>
  <div class='Home'>
    <nav-bar class="nav-bar-bg">
      <template #center>
        <h4>购物街</h4>
      </template>
    </nav-bar>

    <home-swiper
      :banners="banners"
      class="home-swiper"
    ></home-swiper>

    <recommend :recommends="recommends"></recommend>

    <feature-view></feature-view>

    <div id="anmao" class="target-fix"></div>
    <home-tab-control
      @activeIndex="tabIndex"
      :titles="titles"
      ref="tabControl"
      
    ></home-tab-control>

    <home-goods-list :goodsList="goods[type].list"
    @goodsDetail="goodsDetail"
    ></home-goods-list>

    <div
    class="loading-show"
      v-infinite-scroll="loadMore"
      infinite-scroll-disabled="busy"
      infinite-scroll-distance="10"
    >
      <span v-show="loadingShow">加载中...</span>
    </div>
    <div class="backTop" @click="backTop">
      <span class="iconfont icon-fanhuidingbu"></span>
    </div>
  </div>
</template>
<script>
import NavBar from 'components/common/navbar/NavBar'
import HomeSwiper from 'components/common/swiper/Swiper'
import Recommend from 'components/common/recommend/Recommends'
import FeatureView from './homechild/FeatureView.vue'
import HomeTabControl from 'components/content/tabcontrol/TabControl'
import HomeGoodsList from 'components/content/goods/GoodsList'



// 网络请求
import { getHomeMultidata, getHomeGoods } from 'network/home'

export default {
  name: 'Home',
  data () {
    return {
      banners: [],
      recommends: [],
      goods: {
        'pop': { page: 1, list: [] },
        'sell': { page: 1, list: [] },
        'new': { page: 1, list: [] }
      },
      type: 'pop',
      titles: [],
      busy: false, //是否正在加载过程
      loadingShow: true, //显示加载提示
      winScrollY: Number, //记录滚动条位置
    }
  },
  components: {
    NavBar,
    HomeSwiper,
    Recommend,
    FeatureView,
    HomeTabControl,
    HomeGoodsList
  },
  created () {
    // 请求轮播图
    getHomeMultidata().then(res => {
      // console.log(res)
      this.banners = res.data.banner.list //轮播图
      // console.log(res.data.recommend.list)
      this.recommends = res.data.recommend.list //推荐图
      // console.log(this.recommends)
    }).catch(err => { console.log(err) })

    // 请求商品列表名称
    getHomeGoods('pop', 1).then(res => {
      res.data.filter.list.map(item => {
        this.titles.push(item.title)
      })
      this.goods.pop.list = res.data.list
      console.log(this.goods.pop.list)
    })
    getHomeGoods('sell', 1).then(res => {
      this.goods.sell.list = res.data.list
    })
    getHomeGoods('new', 1).then(res => {
      this.goods.new.list = res.data.list
    })
  },
  mounted () {
    window.addEventListener('scroll', this.handleScroll)
  },
  methods: {
    handleScroll () {
      
      this.winScrollY = document.documentElement.scrollTop
      // console.log(document.documentElement.scrollTop)
      if(this.goods[this.type].page >= 30) {
        this.busy = true
        this.loadingShow = false
      } else {
        this.busy = false
        this.loadingShow = true
      }


      // 显示返回顶部
      if(this.winScrollY > 7000) {
        const backTop = document.querySelector('.backTop')
        backTop.style.display = 'flex';
      } else {
        const backTop = document.querySelector('.backTop')
        backTop.style.display = 'none';
      }

    },
    tabIndex (index) {
      console.log(index)

      switch (index) {
        case 0:
          this.type = 'pop';
          break;
        case 1:
          this.type = 'sell';
          break;
        case 2:
          this.type = 'new';
          break;
      }
    },
    loadMore: function () {
      this.busy = true;

    // 延迟1秒，防止滚动条频繁请求
      setTimeout(() => {
        // 发送请求
        getHomeGoods(this.type,this.goods[this.type].page++).then(res => {
          res.data.list.map(item => {
          this.goods[this.type].list.push(item)
          // console.log(this.goods[this.type].list)
          // console.log(this.goods[this.type])
          })
        })
        this.busy = false;
      }, 1000);
    },

    // 进入详情页
    goodsDetail(id) {
      console.log(id)
      this.$router.push({
        name: 'detail',
        params: {
          id: id
        }
      })
    },

    // 返回顶部
    backTop() {
      window.scrollTo({
        top: 0,
        behavior: 'smooth'
      })
    }
  },
  deactivated () {
    // this.winScrollY =  window.pageYOffset || document.body.scrollTop || document.body.scrollHeight
    console.log(this.winScrollY,'=-=-=-=-=-',document.documentElement.scrollTop)
    // console.log(11,window.scrollY())
    // 离开移除滚动事件
    window.removeEventListener('scroll', this.handleScroll) 
    // 离开移除滚动加载
    this.busy = true
  },
  activated () {
    window.scrollTo(0,this.winScrollY)
    // console.log(22)
    window.addEventListener('scroll', this.handleScroll)
    this.busy = false
  }
}
</script>
<style scoped>
.home {
  height: 100vh;
  position: relative;
}
.nav-bar-bg {
  background-color: var(--color-tint);
  color: #fff;
  /* text-align: center; */
}

.nav-bar-bg h4 {
  text-align: center;
  width: 100%;
  letter-spacing: 20px;
  font-size: 25px;
}

.home-swiper {
  /* position: relative; */
  margin-top: 48px;
}

.loading-show {
  /* border: 1px solid; */
  text-align: center;
  margin-bottom: 60px;
}

.target-fix {
  position: relative;
  top: -48px;
  visibility: hidden;
}

/* 返回顶部 */
.backTop {
  display: none;
  padding: 10px;

  position: fixed;
  right: 0;
  bottom: 100px;
  background-color: var(--color-tint);
  color: #fff;
  opacity: .5;
}

.backTop span {
  font-size: 20px;
}
</style>
