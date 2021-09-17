<template>
  <div class='ProfileWallet'>
    <div class="clear-fix">
      <div class="left" style="font-size: 25px;margin-top: 10px;">钱包</div>
      <div class="more right" @click="$toast('抱歉，功能还未完善！')">...</div>
    </div>
    <div class="wallet">
      <span>余额 </span><span>￥0.00 </span><span>优惠券 </span><span> 0张</span>
    </div>
  </div>
</template>
<script>

export default {
  name: 'ProfileWallet',
  data () {
    return {
    }
  },
  components: {
  },
}
</script>
<style  scoped>
.ProfileWallet {
  border-bottom: 1px solid var(--color-tint);
  border-top: 1px solid var(--color-tint);
}

.ProfileWallet .more {
  font-weight: 700;
  font-size: 25px;
}

.wallet {
  padding: 20px;
}

.wallet span {
  padding-left: 10px;
}
</style>
