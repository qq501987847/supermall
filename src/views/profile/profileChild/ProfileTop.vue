<template>
  <div class='ProfileTop'>
    <profile-nav-bar>
      <template #center>
        <h3>我的信息</h3>
      </template>
    </profile-nav-bar>
  </div>
</template>
<script>
import ProfileNavBar from "components/common/navbar/NavBar.vue"

export default {
  name: 'ProfileTop',
  data () {
    return {
    }
  },
  components: {
    ProfileNavBar
  },
}
</script>
<style  scoped>
.ProfileTop h3 {
  text-align: center;
  width: 100%;
  background-color: var(--color-tint);
  color: #fff;
}
</style>
