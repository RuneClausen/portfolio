<template>
  <div :class="(visits > 0 ? 'bg-success' : 'bg-danger') + ' d-flex justify-content-between border border-dark rounded-5'">
    <span class="item">{{ name }}</span>
    <span class="item">{{ visits }} {{ visits == 1 ? 'visit' : 'visits' }}</span>
    <span class="item">2018</span>
    <span class="item-end">bla bla</span>
  </div>
</template>

<script>
import {defineComponent} from "vue";

export default defineComponent({
  name: "CountryComponent",
  props: ['name', 'visits', 'cc']
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