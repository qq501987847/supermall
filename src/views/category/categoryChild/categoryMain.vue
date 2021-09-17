<template>
  <div class='categoryMain' v-if="categoryListItem.length > 0">
    <div class="main-item" v-for="(item,index) in categoryListItem" :key="index">
      <a :href="item.link">
        <img :src="item.image" alt="商品展示图">
        <span>{{item.title}}</span>
      </a>
    </div>

  </div>
</template>
<script>

export default {
  name: 'categoryMain',
  props: {
    categoryListItem: {
      default() {
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
.categoryMain {
  /* border: 1px solid; */
  display: flex;
  flex-wrap: wrap;
}

.main-item {
  width: 50%;
}

.main-item a {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
}
.main-item a img {
  width: 80%;
}
</style>
