<template>
  <div class='ProfileAvatar'>
    <img
      src="~assets/images/avatar.png"
      alt="默认头像"
    >
    <div class="avatar-right">
      <div>
        <span>登录 </span> | <span> 注册</span>
      </div>
      <div>
        <div>
          <span class="iconfont icon-shouji"></span>
          <span>暂无绑定手机号</span>
        </div>
        <div class="more" @click="$toast('抱歉，功能还未完善！')">...</div>
      </div>
    </div>
  </div>
</template>
<script>

export default {
  name: 'ProfileAvatar',
  data () {
    return {
    }
  },
  components: {
  },
}
</script>
<style  scoped>
.ProfileAvatar {
  display: flex;
  align-items: center;
  margin-top: 48px;
  height: 100px;
  /* padding: 10px; */
}

.ProfileAvatar img {
  border-radius: 50%;
  height: 60%;
}

.avatar-right {
  margin-left: 10px;
  flex: 1;
  /* display: flex; */
}

.avatar-right > div:nth-child(2) {
  display: flex;
  margin-top: 10px;
}

.avatar-right > div:nth-child(2) div:nth-child(2) {
  margin-left: auto;
}

.avatar-right .more {
  margin-left: auto;
  font-weight: 700;
  font-size: 25px;
}
</style>
