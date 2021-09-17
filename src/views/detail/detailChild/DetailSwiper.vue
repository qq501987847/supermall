<template>
  <div class='detail-swiper'>
    <swiper :banners="banners"></swiper>
  </div>
</template>
<script>
import {Swiper} from 'components/common/swiper/index'

export default {
  name: 'DetailSwiper',
  props: ["banners"],
  data () {
    return {
    }
  },
  components: {
    Swiper
  },
}
</script>
<style  scoped>

</style>
