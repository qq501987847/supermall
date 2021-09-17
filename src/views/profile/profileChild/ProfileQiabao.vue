<template>
  <div class='ProfileQiabao' @click="$toast('抱歉，功能还未完善！')">
    <profile-item>
      <template #icon>
        <span class="iconfont icon-qiabao"></span>
      </template>
      <template #title>
        <span>我的卡包</span>
      </template>
    </profile-item>
  </div>
</template>
<script>
import ProfileItem from 'components/content/profileItem/ProfileItem'
export default {
  name: 'ProfileQiabao',
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
