<template>
  <div class='goods-list'>
    <div class="goods-box" v-for="(item,index) in goodsList" :key="index">
      <div  @click="goodsShow(item)">
        <img v-if="item.show" :src="item.show.img" alt="商品展示图">
        <img v-else :src="item.image" alt="">
        <div class="goods-show">
          <h5>{{item.title}}</h5>
          <span
          class="red"
          >￥ {{ item.price }}</span>
          <span>⭐ {{ item.cfav }}</span>
        </div>
      </div>
    </div>
  </div>
</template>
<script>

export default {
  name: 'GoodsList',
  props: {
    goodsList: {
      default () {
        return Array
      }
    }
  },
  data () {
    return {
    }
  },
  components: {
  },
  methods: {
    goodsShow (item) {
      const id = item.iid
      // console.log(item.iid)
      this.$emit('goodsDetail', id)
    }
  }
}
</script>
<style  scoped>
.goods-list {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
}

.goods-box {
  width: 48%;
  text-align: center;
  margin-bottom: 10px;
}

.goods-box a {
  display: block;
}

.goods-box img {
  width: 100%;
  border-radius: 10px;
}


.goods-show h5 {
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  padding: 2px 10px;
}
</style>
