<template>
  <div class='recommends' v-if="recommends !== ''">
    <ul class="recommends-ul">
      <li class="recommend-li" v-for="(item,index) in recommends" :key="index">
        <a :href="item.link">
          <img :src="item.image" alt="推荐图">
          <span>{{item.title}}</span>
        </a>
      </li>
    </ul>
  </div>
</template>
<script>

export default {
  name: 'Recommends',
  props: {
    recommends: {
      default: ''
    }
  },
  data () {
    return {
    }
  },
  components: {
  },
}
</script>
<style  scoped>
.recommends-ul {
  display: flex;
  width: 100vw;
  /* height: 150px; */
  /* border: 1px solid; */
  border-bottom: 10px solid #dad6d6;
}

/* .recommends-li {
  flex: 1;
} */
.recommend-li a {
  display: block;
  width: 100%;
  padding: 10px;
  text-align: center;
}

.recommend-li a img {
  width: 100%;
}
</style>
