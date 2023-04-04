<template>
  <tr :class="(visits > 0 ? 'table-success' : 'table-danger')">
    <td>{{ cc }}</td>
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
  props: ['name', 'cc', 'visits', 'cc', 'firstVisit', 'latestVisit']
});
</script>

<style scoped>
</style>