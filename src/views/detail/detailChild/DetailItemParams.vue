<template>
  <div class='DetailItemParams' v-if="Object.keys(itemParams).length > 0">
    <table  class="rule">
      <caption style="font-size: 20px;margin-bottom:10px;font-weight: 600;">{{itemParams.rule.key}}</caption>
      <tbody>
        <tr v-for="(item1,index1) in itemParams.rule.tables[0]" :key="index1">
          <td v-for="(item2,index2) in item1" :key="index2" >
            {{ item2 }}
          </td>
        </tr>
      </tbody>
    </table>
    <h4>{{itemParams.rule.disclaimer}}</h4>

    <table class="info">
      <caption style="font-size: 20px;margin-bottom:10px;font-weight: 600;">{{itemParams.info.key}}</caption>
      <tbody>
        <tr v-for="(item,index) in itemParams.info.set" :key="index">
          <td>{{item.key}}</td>
          <td style="font-size: 14px;">{{ item.value}}</td>
        </tr>
      </tbody>
    </table>
  </div>
</template>
<script>

export default {
  name: 'DetailItemParams',
  props: {
    itemParams: {
      default() {
        return {}
      }
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
table {
  /* border: 1px solid; */
  border-collapse: collapse;
  text-align: center;
  width: 100%;
}

table td {
  padding: 10px;
}

table tr td:first-child {
  font-weight: 600;
}

table tr:nth-child(odd) {
  background-color: var(--color-tint);
  color: #fff;
}

.DetailItemParams h4 {
  padding: 10px;
}
</style>
