<template>
  <div class='categoryLeftNav' v-if="categoryList.length > 0">
    <ul>
      <li :class="{ activeColor: activeKey === index}" v-for="(item,index) in categoryList" :key="index" @click="subMain(item.maitKey,index)">
        <span>{{item.title}}</span>
      </li>
    </ul>
  </div>
</template>
<script>

export default {
  name: 'categoryLeftNav',
  props: ['categoryList'],
  data () {
    return {
      activeKey: 0
    }
  },
  components: {
  },
  methods: {
    subMain(key,index) {
      this.$emit('subMainKey',key)
      this.activeKey = index
    }
  }
}
</script>
<style  scoped>
ul li {
  height: 60px;
  display: flex;
  color: #000;
  font-size: 20px;
  font-weight: 500;
  background-color: #ccc;
}

ul li span {
  margin: auto;
}

.activeColor {
  background-color: var(--color-tint);
}
</style>
