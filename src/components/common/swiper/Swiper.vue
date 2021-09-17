<template>
  <div class="Swiper">
    <swiper
      v-if="banners.length"
      ref="mySwiper"
      class="swiper"
      :options="swiperOptions"
    >
      <swiper-slide
        class="swiper-slide"
        v-for="(item, index) in banners"
        :key="index"
      >
        <swiper-item :item="item"></swiper-item>
      </swiper-slide>
      <div class="swiper-pagination" slot="pagination"></div>
    </swiper>
  </div>
</template>

<script>
// import { getHomeMultiData } from 'network/home'
import SwiperItem from "./SwiperItem";
import { Swiper, SwiperSlide } from "vue-awesome-swiper";
// import "swiper/css/swiper.css";
export default {
  name: "HomeSwiper",
  props: {
    banners: {
      type: Array,
      default: function() {
        return [];
      }
    }
  },
  data() {
    return {
      // banners: [],
      swiperOptions: {
        autoplay: {
          disableOnInteraction: false
        }, // 自动轮播
        speed: 1000,
        delay: 3000,
        loop: true,
        // reverseDirection: true,
        waitForTransition: true,
        pagination: {
          el: ".swiper-pagination"
        }
      }
    };
  },
  components: {
    SwiperItem,
    Swiper,
    SwiperSlide
  },
  // created () {
  //   getHomeMultiData().then(resolve => {
  //     this.banners = resolve.data.data.banner.list
  //   })
  // },
  computed: {}
};
</script>

<style scoped >
.swiper {
  height: inherit;
  overflow: hidden;
}
</style>
