<template>
  <div class='nav-bar'>
<slot name="left"></slot>
<slot name="center"></slot>
<slot name="right"></slot>

  </div>
</template>
<script>

export default {
  name: 'NavBar',
  data () {
    return {
    }
  },
  components: {
  },
}
</script>
<style  scoped>
.nav-bar {
  display:flex;
  line-height: 49px;
  position: -webkit-sticky;
  position: fixed;
  left: 0;
  right: 0;
  top: 0;
  z-index:10;
  text-align: center;
}
</style>
