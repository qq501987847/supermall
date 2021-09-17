<template>
  <div class='profile'>
    <profile-top>
    </profile-top>
    <profile-avatar></profile-avatar>
    <profile-wallet></profile-wallet>
    <profile-shopcart></profile-shopcart>
    <profile-qiabao></profile-qiabao>
    <profile-message></profile-message>
    <profile-app></profile-app>
  </div>
</template>
<script>
import ProfileApp from "./profileChild/ProfileApp.vue"
import ProfileAvatar from "./profileChild/ProfileAvatar.vue"
import ProfileMessage from "./profileChild/ProfileMessage.vue"
import ProfileQiabao from "./profileChild/ProfileQiabao.vue"
import ProfileShopcart from "./profileChild/ProfileShopcart.vue"
import ProfileTop from './profileChild/ProfileTop.vue'
import ProfileWallet from "./profileChild/ProfileWallet.vue"
export default {
  name: 'profile',
  data () {
    return {
    }
  },
  components: {
    ProfileTop,
    ProfileAvatar,
    ProfileWallet,
    ProfileShopcart,
    ProfileQiabao,
    ProfileMessage,
    ProfileApp
  },
}
</script>
<style  scoped>
.profile {
  padding: 10px;
}
</style>
