<template>
  <div class='shopcart'>
    <shopcart-top></shopcart-top>
    <shop-empty v-if="$store.state.cartGoodsList.length <= 0" class="empty-shop"></shop-empty>
    <shop-main v-else></shop-main>
    <shop-submit class="shop-submit"></shop-submit>
  </div>
</template>
<script>
import ShopcartTop from "./shopcartChild/ShopcartTop.vue"
import ShopEmpty from "./shopcartChild/ShopEmpty.vue"
import ShopMain from "./shopcartChild/ShopMain.vue"
import ShopSubmit from "./shopcartChild/ShopSubmit.vue"

export default {
  name: 'shopcart',
  data () {
    return {
    }
  },
  components: {
    ShopcartTop,
    ShopEmpty,
    ShopSubmit,
    ShopMain
  },
}
</script>
<style  scoped>

.empty-shop {
  margin-top: 48px;
}

.shop-submit {
  
}
</style>
