import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    cartGoodsList: [],
    allSel: false
  },
  
  mutations: {
    ['ADD_SHOP'](state, payload) {
      let flag = false;

      flag = state.cartGoodsList.some((item) => {
        return item.iid === payload.iid
      })

      if (!flag) {
        state.cartGoodsList.push({
          title: payload.title,
          count: 1,
          iid: payload.iid,
          price: payload.lowPrice,
          img: payload.topImages[0],
          checked: true //加入购物车默认选中
        })
      } else {
        // 找到了加一
        state.cartGoodsList = state.cartGoodsList.map(item => {
          if(item.iid === payload.iid) {
            item.count++
          }
          return item
        })
      }
      console.log(flag)
      console.table(state.cartGoodsList)
    },


    // 单选判断全选
    ['ALL_SEL'](state, payload) {
      state.allSel = payload
    }
  },
  actions: {},
  modules: {}
})