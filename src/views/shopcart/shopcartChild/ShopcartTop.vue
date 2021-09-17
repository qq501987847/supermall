<template>
  <div class='ShopcartTop'>
    <shopcart-nav-bar>
      <template #center>
        <h3>购物车</h3>
      </template>
    </shopcart-nav-bar>
  </div>
</template>
<script>
import ShopcartNavBar from 'components/common/navbar/NavBar'
export default {
  name: 'ShopcartTop',
  data () {
    return {
    }
  },
  components: {
    ShopcartNavBar
  },
}
</script>
<style  scoped>
.ShopcartTop h3 {
  width: 100%;
  background-color: var(--color-tint);
  color: #fff;
}

</style>