<template>
  <tr :class="(visits > 0 ? 'table-success' : 'table-danger')">
    <td>*FLAG*</td>
    <td>{{ name }}</td>
    <td>{{ visits }}</td>
    <td>{{ firstVisit == 0 ? '-' : firstVisit }}</td>
    <td>{{ latestVisit == 0 ? '-' : latestVisit }}</td>
  </tr>
</template>

<script>
import {defineComponent} from "vue";

export default defineComponent({
  name: "CountryComponent",
  props: ['name', 'visits', 'cc', 'firstVisit', 'latestVisit']
});
</script>

<style scoped>
div {
  margin-bottom: 5px;
  padding: 5px 15px 5px 15px;
}

.item {
  flex: 1 1 0px;
}

.item-end {
  text-align:right;
}
</style>