<template>
  <div class='categoryTop'>
    <category-nav-bar>
      <template #center>
        <h3>商品分类</h3>
      </template>
    </category-nav-bar>
  </div>
</template>
<script>
import CategoryNavBar from 'components/common/navbar/NavBar'
export default {
  name: 'categoryTop',
  data () {
    return {
    }
  },
  components: {
    CategoryNavBar
  },
}
</script>
<style  scoped>
.categoryTop h3 {
  width: 100%;
  background-color: var(--color-tint);
  color: #fff;
}

</style>
