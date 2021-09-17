<template>
  <div class='DetailItemInfo'>
    <div class="title-box">
      <h5>{{itemInfo.title}}</h5>
      <div class="price-box">
        <span>{{itemInfo.price}}</span>
        <span>{{itemInfo.highPrice}}</span>
        <span>{{itemInfo.discountDesc}}</span>
      </div>
    </div>
    <div class="xiaoliang">
      <span
        v-for="(column,index) in columns"
        :key="index"
      >{{column}}</span>
    </div>
  </div>
</template>
<script>

export default {
  name: 'DetailItemInfo',
  props: {
    itemInfo: {
      default () {
        return {}
      }
    },
    columns: {
      default () {
        return []
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
.title-box {
  padding: 10px;
}

.price-box {
  margin-top: 10px;
}

.price-box span:nth-child(1) {
  font-size: 30px;
  color: red;
  margin-right: 10px;
}

.price-box span:nth-child(2) {
  /* font-size: 30px; */
  color: #ccc;
  text-decoration:line-through;
  margin-right: 10px;

}

.price-box span:nth-child(3) {
  border-radius: 12px;
  color: #fff;
  background-color: red;
  padding: 5px;
  position: relative;
  top: -10px;
}

.xiaoliang {
  display: flex;
  justify-content: space-between;
  padding: 10px;
}
</style>
