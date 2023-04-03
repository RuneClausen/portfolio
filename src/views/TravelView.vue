<script lang="ts">
import {defineComponent} from "vue";
import CountryComponent from '../components/CountryComponent.vue';

export default defineComponent({
  components: {
    CountryComponent
  },
  data() {
    return {
      countries: [
        { id: 1, name: 'Afghanistan', cc: 'af', visits: 0 },
        { id: 2, name: 'Armenia', cc: 'am', visits: 3 },
        { id: 3, name: 'Albania', cc: 'al', visits: 2 },
        { id: 4, name: 'Austria', cc: 'au', visits: 1 },
        { id: 5, name: 'Australia', cc: 'as', visits: 0 },
      ]
    };
  },
  methods: {},
  computed: {},
  watch: {},
  mounted() {
  }
});
</script>

<template>
  <div class="my-4">
    <h1 class="display-4">Travels</h1>
  </div>

  <div>List of countries, and which of them I've visited.</div>

  <CountryComponent
      v-for="country in countries"
      :key="country.id"
      :name="country.name"
      :visits="country.visits">
  </CountryComponent>

</template>

<style scoped>

</style>