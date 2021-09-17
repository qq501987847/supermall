<template>
  <div class='tab-bar-item'  @click="itemClick">
    <slot name="item-icon"></slot>
    <slot name="item-text"></slot>
  </div>
</template>
<script>

export default {
  name: 'TabBarItem',
  props: {
    path: String,
    // activeColor: {
    //   type: String,
    //   default: 'skyblue'
    // }
  },
  data () {
    return {
    }
  },
  components: {
  },
  methods: {
    itemClick () {
      if(this.$route.path !== this.path) {
        this.$router.replace(this.path)
      }
    }
  }
}
</script>
<style scoped>
.tab-bar-item {
  flex: 1;
  height: 49px;
  display: flex;
  flex-direction: column;
  text-align: center;
}
</style>
