<template>
  <div class='ShopSubmit'>
    <div style="display: flex;jusitfy-content: center; align-items: center; margin-right: auto;">
      <label for="allSel">全选</label>
      <input
        type="checkbox"
        name="allSel"
        :checked="$store.state.allSel"
        @click="clickAllSel()"
      >
    </div>
    <div>合计：{{totalPrice.toFixed(2)}} 元</div>
    <div style="margin-left: 20px;">
      <button @click="$toast('功能还未完善！')">提交订单</button>
    </div>
  </div>
</template>
<script>

export default {
  name: 'ShopSubmit',
  data () {
    return {
      totalPrice: 0,
      // allSel: false
    }
  },
  components: {
  },
  created () {
    //计算一下总价格
          this.$store.state.cartGoodsList.forEach(item => {
            if (item.checked) {
              this.totalPrice += item.price * item.count
            }
          })
  },
  methods: {
    clickAllSel () {
      this.$store.state.allSel = !this.$store.state.allSel
      // console.log(this.allSel,11111)
      this.$store.state.cartGoodsList = this.$store.state.cartGoodsList.map(item => {

        item.checked = this.$store.state.allSel
        return item
      })
    }
  },
  computed: {
    isChange () {
      return this.$store.state.cartGoodsList
    }
  },
  watch: {
    isChange: {
      handler (newVal) {
        if (newVal) {
          //计算一下总价格
          this.totalPrice = 0
          this.$store.state.cartGoodsList.forEach(item => {
            if (item.checked) {
              this.totalPrice += item.price * item.count
            }
          })
        }
      },
      deep: true
    }
  }
}
</script>
<style  scoped>
.ShopSubmit {
  display: flex;
  align-items: center;
  height: 48px;
  padding: 0 10px;
  background-color: #fff;
  /* border: 1px solid #000; */

  position: fixed;
  bottom: 52px;
  left: 0;
  right: 0;

  z-index: 11;
  /* background-color: #000; */
}

.ShopSubmit button {
  border: 0;
  padding: 10px;
  border-radius: 10px;
  background-color: rgb(235, 220, 15);
}
</style>
