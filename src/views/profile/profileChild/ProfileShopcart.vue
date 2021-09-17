<template>
  <div class='ProfileShopcart' @click="$toast('抱歉，功能还未完善！')">
    <profile-item>
      <template #icon>
        <span class="iconfont icon-gouwuche"></span>
      </template>
      <template #title>
        <span>购物车</span>
      </template>
    </profile-item>
  </div>
</template>
<script>
import ProfileItem from 'components/content/profileItem/ProfileItem'
export default {
  name: 'ProfileShopcart',
  data () {
    return {
    }
  },
  components: {
    ProfileItem
  },
}
</script>
<style lang='scss' scoped>

</style>
