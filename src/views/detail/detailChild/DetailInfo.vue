<template>
  <div class='DetailInfo'>
    <div style="display: flex; padding: 20px;">
      <div class="detail-info-desc">{{detailInfo.desc}}</div>
    </div>
    <ul v-if="detailInfo.detailImage">
      <li   v-for="(item,index) in detailInfo.detailImage[0].list" :key="index">
        <img :src="item" alt="商品穿着效果">
      </li>
    </ul>
  </div>
</template>
<script>

export default {
  name: 'DetailInfo',
  props: {
    detailInfo: {
      default() {
        return {
          
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
.detail-info-desc {
  width: 85%;
  /* height: 100px; */
  padding: 20px;
  border: 8px dashed var(--color-tint);
  margin: auto;
}

li img {
  display: block;
  width: 100%;
}
</style>
