<template>
  <div class='category'>
    <category-top></category-top>
    <div style="display: flex;margin-top: 48px;">
      <category-left-nav @subMainKey="subMainKey" :categoryList="categoryList" style="flex: 1; "></category-left-nav>
      <category-main :categoryListItem="categoryListItem" style="flex: 3;"></category-main>
    </div>
  </div>
</template>
<script>
import CategoryLeftNav from "./categoryChild/categoryLeftNav.vue"
import CategoryMain from "./categoryChild/categoryMain.vue"
import CategoryTop from "./categoryChild/categoryTop.vue"


// 请求
import { getCategoryNav, getCategoryMain } from 'network/category'

export default {
  name: 'category',
  data () {
    return {
      categoryList: [],
      categoryListItem: []
    }
  },
  components: {
    CategoryTop,
    CategoryLeftNav,
    CategoryMain
  },
  created () {
    getCategoryNav().then(res => {
      console.log(res.data.category.list)
      this.categoryList = res.data.category.list
    })

    this.subMainKey(3627)
  },
  methods: {
    subMainKey(key) {
      getCategoryMain(key).then(res => {
        console.log(res.data.list)
        this.categoryListItem = res.data.list
      })
    }
  }
}
</script>
<style lang='scss' scoped>
</style>
