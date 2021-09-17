<template>
  <div class='ProfileApp' @click="$toast('抱歉，功能还未完善！')">
    <profile-item>
      <template #icon>
        <span class="iconfont icon-app"></span>
      </template>
      <template #title>
        <span>APP</span>
      </template>
    </profile-item>
  </div>
</template>
<script>
import ProfileItem from 'components/content/profileItem/ProfileItem'
export default {
  name: 'ProfileApp',
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
