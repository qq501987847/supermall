<template>
  <div
    class='DetailRate'
    v-if="Object.keys(rate).length > 0"
  >
    <div class="rate-item">
      <div class="rate-avatar">
        <img
          :src="rate.list[0].user.avatar"
          alt="用户头像"
        >
      </div>
      <div class="rate-detail">
        <div>{{rate.list[0].user.uname}}</div>
        <div>
          <span>{{dayjs.unix(rate.list[0].created).format('YYYY-MM-DD HH:mm')}} </span>|<span> {{rate.list[0].style}}</span>
        </div>
        <div>
          <span>{{rate.list[0].content}}</span>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
const dayjs = require('dayjs')
export default {
  name: 'DetailRate',
  props: {
    rate: {
      default () {
        return {}
      }
    }
  },
  data () {
    return {
      dayjs
    }
  },
  components: {
  },
}
</script>
<style  scoped>
.DetailRate {
  border-top: 2px solid #ccc;
}

.rate-item {
  display: flex;
  max-height: 200px;
}
.rate-avatar {
  flex: 1;
  padding: 10px;
}
.rate-avatar img {
  border-radius: 50%;
  width: 80%;
}

.rate-detail {
  flex: 3;
  /* border: 1px solid; */
  padding-right: 10px;
  margin: 10px 0;
}

.rate-detail > div {
  margin-bottom: 10px;
}

.rate-detail div:nth-child(1) {
  font-size: 16px;
  font-weight: 600;
}

.rate-detail div:nth-child(2) {
  font-size: 13px;
  color: #ccc;
}

.rate-detail div:nth-child(3) {
  font-size: 14px;
  /* color: #ccc; */
}
</style>
