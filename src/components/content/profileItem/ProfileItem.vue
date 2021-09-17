<template>
  <div class='ProfileItem'>
    <slot name="icon"></slot>
    <slot name="title" class="title"></slot>
  </div>
</template>
<script>

export default {
  name: 'ProfileItem',
  data () {
    return {
    }
  },
  components: {
  },
}
</script>
<style  scoped>
.ProfileItem {
  height: 48px;
  display: flex;
  align-items: center;
  border-bottom: 1px solid var(--color-tint);
}

.ProfileItem span:first-child {
  margin-right: 15px;
  color: var(--color-tint);
  font-size: 20px;
}
</style>
