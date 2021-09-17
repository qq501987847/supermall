<template>
  <div class='ShopMain'>
    <div
      class="shopGoods-box"
      v-for="(item,index) in $store.state.cartGoodsList"
      :key="index"
    >
      <input
        style="align-self: center;margin-right: 10px;"
        type="checkbox"
        :checked="item.checked"
        @click="ischecked(item,index)"
        :id="item.iid"
      >
      <div>
        <img
          :src="item.img"
          alt="商品展示图"
        >
      </div>
      <div class="price">
        <button
          class="delete"
          @click="deleteGoods(index)"
        >删除</button>
        <span>{{item.title}}</span>
        <span>￥ {{ item.price}} * {{item.count}}</span>
        <span>金额：{{(item.price * item.count).toFixed(2)}}</span>
        <button
          :disabled="item.count <= 1"
          @click="item.count--"
        >-</button>
        <input
          class="countIpt"
          v-model.number="item.count"
          type="number"
        >
        <button @click="item.count++">+</button>
      </div>

    </div>
  </div>
</template>
<script>

export default {
  name: 'ShopMain',
  data () {
    return {
      flag: this.allSelFlag
    }
  },
  components: {
  },
  mounted () {
    // console.log(this.$store.state.cartGoodsList)
    // for(let i = 0; i < this.$store.state.cartGoodsList.length; i++) {
    //   this.checkedNames.push(false)
    // }
    let flag = this.$store.state.cartGoodsList.some(item => {
      return item === false
    })
    console.log(flag)
    if (!flag) {
      this.$store.commit('ALL_SEL', true)
    }
  },
  methods: {
    deleteGoods (index) {
      this.$store.state.cartGoodsList.splice(index, 1)
    },

    ischecked (item,index) {
      // let flag = false;
      this.$store.state.cartGoodsList[index].checked = !item.checked
      // console.log(item.checked,)
      console.table(this.$store.state.cartGoodsList)
      let flag = this.$store.state.cartGoodsList.some(item => {
        return item.checked === false
      })
      console.log(flag)
      if (!flag) {
        this.$store.commit('ALL_SEL', true)
      }else {
        this.$store.commit('ALL_SEL', false)
      }
    },

  },
  computed: {
    isAllSel () {
      return this.$store.state.allSel
    },
    // isLength () {
    // }
  },
  watch: {
    isAllSel(newVal) {
      if(newVal) {
        this.$store.state.cartGoodsList = this.$store.state.cartGoodsList.map(item => {
        item.checked = true
        return item
      })
      }
    }

  }
}
</script>
<style  scoped>
.ShopMain {
  margin-top: 48px;
}
.shopGoods-box {
  display: flex;
  height: 220px;
  padding: 20px;
  border-bottom: 1px dashed;
  font-size: 0.5em;
}

.shopGoods-box img {
  height: 180px;
}

.price {
  position: relative;
  padding: 10px;
}

.price span:nth-of-type(1) {
  color: #000;
  font-weight: 600;
  /* margin-top: 30px; */
}

.price span:nth-of-type(2) {
  /* color: red; */
  display: block;
  font-size: 20px;
  margin: 20px 0;
}

.price span:nth-of-type(3) {
  color: red;
  display: block;
  font-size: 20px;
  /* margin: 20px 0; */
}

.price button:nth-of-type(2),
.price button:nth-of-type(3) {
  padding: 0 5px;
}

.delete {
  padding: 3px;
  color: var(--color-tint);

  position: absolute;
  right: -6px;
  top: -15px;
}

.countIpt {
  width: 50px;
  padding-left: 10px;
}
</style>
