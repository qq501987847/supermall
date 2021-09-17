<template>
  <div class="SwiperItem">
    <img
      :src="item.image || item"
      alt=""
      :class="classObj"
    />
  </div>
</template>

<script>
export default {
  name: "SwiperItem",
  props: ["item"],
  data () {
    return {
      detailActive: true,
      homeActive: true
    };
  },
  computed: {
    classObj () {
      return {
        detailItem: this.item.image || this.detailActive,
        homeItem: this.item.image && this.homeActive
      };
    }
  }
};
</script>

<style scoped >
.SwiperItem {
  height: inherit;
}

.detailItem {
  width: 100%;
  height: 300px;
}

.homeItem {
  width: 100%;
  height: inherit;
}
</style>
