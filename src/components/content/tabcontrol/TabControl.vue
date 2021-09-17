<template>
  <div class='tab-control'>
    <a href="#anmao" class="tab-control-item" :class="{'tab-active-style': activeIndex === index}" v-for="(item,index) in titles" :key="index" @click="tabActive(index)">
      {{ item }}
    </a>
  </div>
</template>
<script>

export default {
  name: 'TabControl',
  props: {
    titles: {
      default () {
        return []
      }
    }
  },
  data () {
    return {
      activeIndex: 0,
      isActive: false,
    }
  },
  components: {
  },
  methods: {
    tabActive(index) {
      this.activeIndex = index;
      // if(this.activeIndex === index) {
      //   this.isActive = true
      // }
      this.$emit('activeIndex',index)
    }
  }
}
</script>
<style  scoped>
.tab-control {
  display: flex;
  /* border: 1px solid; */
  
  font-size: 18px;
  justify-content: space-around;
  margin-bottom: 10px;

  position: sticky;
  top: 48px;
  background-color: #fff;
}

.tab-control-item {
  padding: 8px;
}

.tab-active-style {
  border-bottom: 4px solid var(--color-tint);
  color: var(--color-tint);
}
</style>
