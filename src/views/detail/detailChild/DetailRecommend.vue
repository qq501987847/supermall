<template>
  <div class='DetailRecommend'>
    <h3>相关推荐</h3>
    <detail-goods-list :goodsList="detailGoodsList"></detail-goods-list>
  </div>
</template>
<script>
import DetailGoodsList from "components/content/goods/GoodsList.vue"

export default {
  name: 'DetailRecommend',
  props:['detailGoodsList'],
  data () {
    return {
    }
  },
  components: {
    DetailGoodsList
  },
}
</script>
<style  scoped>
.DetailRecommend {
  padding: 0 10px;
}

.DetailRecommend h3 {
  margin:10px;
  color: var(--color-tint);
}
</style>
