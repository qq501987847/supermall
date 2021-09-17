<template>
  <div class='ProfileMessage' @click="$toast('抱歉，功能还未完善！')">
    <profile-item>
      <template #icon>
        <span class="iconfont icon-wodexiaoxi"></span>
      </template>
      <template #title>
        <span>我的消息</span>
      </template>
    </profile-item>
  </div>
</template>
<script>
import ProfileItem from 'components/content/profileItem/ProfileItem'
export default {
  name: 'ProfileMessage',
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
