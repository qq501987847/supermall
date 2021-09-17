<template>
  <div class='tab-bar'>
    <slot></slot>
  </div>
</template>
<script>

export default {
  name: 'TabBar',
  data () {
    return {
    }
  },
  components: {
  },
}
</script>
<style  scoped>
.tab-bar {
  display: flex;
  background-color: #fff;
  /* border-top: 1px solid #ccc; */
  
  position: fixed;
  left: 0;
  right: 0;
  bottom: 0;

  z-index: 10;

  box-shadow: 0 -3px 2px rgba(100,100,100,0.1);
}
</style>
