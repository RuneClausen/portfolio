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
        { name: 'Afghanistan', cc: 'af', visits: 0, firstVisit: 0, latestVisit: 0 },
        { name: 'Albania', cc: 'al', visits: 2, firstVisit: 2014, latestVisit: 2021 },
        { name: 'Armenia', cc: 'am', visits: 3, firstVisit: 2015, latestVisit: 2019 },
        { name: 'Australia', cc: 'as', visits: 0, firstVisit: 0, latestVisit: 0 },
        { name: 'Austria', cc: 'au', visits: 1, firstVisit: 2019, latestVisit: 2019 },
        { name: 'Brunei', cc: 'br', visits: 1, firstVisit: 2022, latestVisit: 2022 },
        { name: 'Cambodia', cc: 'ca', visits: 1, firstVisit: 2019, latestVisit: 2019 },
        { name: 'Denmark', cc: 'da', visits: 100, firstVisit: 1992, latestVisit: 2023 },
        { name: 'France', cc: 'fr', visits: 1, firstVisit: 2017, latestVisit: 2017 },
        { name: 'Gambia', cc: 'ga', visits: 1, firstVisit: 2019, latestVisit: 2019 },
        { name: 'Georgia', cc: 'ge', visits: 3, firstVisit: 2015, latestVisit: 2022 },
        { name: 'Germany', cc: 'de', visits: 1, firstVisit: 2019, latestVisit: 2019 },
        { name: 'Greece', cc: 'hl', visits: 1, firstVisit: 2012, latestVisit: 2012 },
        { name: 'Indonesia', cc: 'in', visits: 1, firstVisit: 2022, latestVisit: 2022 },
        { name: 'Iran', cc: 'ir', visits: 3, firstVisit: 2016, latestVisit: 2018 },
        { name: 'Iraq', cc: 'iq', visits: 1, firstVisit: 2018, latestVisit: 2018 },
        { name: 'Israel', cc: 'is', visits: 2, firstVisit: 2017, latestVisit: 2023 },
        { name: 'Italy', cc: 'it', visits: 1, firstVisit: 2019, latestVisit: 2019 },
        { name: 'Jordan', cc: 'jo', visits: 1, firstVisit: 2019, latestVisit: 2019 },
        { name: 'Kosovo', cc: 'ko', visits: 1, firstVisit: 2014, latestVisit: 2014 },
        { name: 'Kuwait', cc: 'ku', visits: 1, firstVisit: 2022, latestVisit: 2022 },
        { name: 'Laos', cc: 'la', visits: 1, firstVisit: 2018, latestVisit: 2018 },
        { name: 'Lebanon', cc: 'le', visits: 1, firstVisit: 2018, latestVisit: 2018 },
        { name: 'Malaysia', cc: 'ma', visits: 1, firstVisit: 2022, latestVisit: 2022 },
        { name: 'Moldova', cc: 'md', visits: 1, firstVisit: 2018, latestVisit: 2018 },
        { name: 'Myanmar', cc: 'my', visits: 1, firstVisit: 2018, latestVisit: 2018 },
        { name: 'North Macedonia', cc: 'mk', visits: 5, firstVisit: 2011, latestVisit: 2021 },
        { name: 'Norway', cc: 'no', visits: 1, firstVisit: 2017, latestVisit: 2017 },
        { name: 'Oman', cc: 'om', visits: 1, firstVisit: 2018, latestVisit: 2018 },
        { name: 'Pakistan', cc: 'pk', visits: 1, firstVisit: 2022, latestVisit: 2022 },
        { name: 'Palestine', cc: 'pl', visits: 2, firstVisit: 2017, latestVisit: 2023 },
        { name: 'Philippines', cc: 'ph', visits: 1, firstVisit: 2022, latestVisit: 2022 },
        { name: 'Poland', cc: 'po', visits: 2, firstVisit: 2016, latestVisit: 2019 },
        { name: 'Portugal', cc: 'pt', visits: 1, firstVisit: 2010, latestVisit: 2010 },
        { name: 'Qatar', cc: 'qa', visits: 1, firstVisit: 2022, latestVisit: 2022 },
        { name: 'Romania', cc: 'ro', visits: 3, firstVisit: 2017, latestVisit: 2023 },
        { name: 'San Marino', cc: 'sm', visits: 1, firstVisit: 2019, latestVisit: 2019 },
        { name: 'Senegal', cc: 'sn', visits: 1, firstVisit: 2019, latestVisit: 2019 },
        { name: 'Singapore', cc: 'sg', visits: 1, firstVisit: 2019, latestVisit: 2019 },
        { name: 'Slovakia', cc: 'sv', visits: 1, firstVisit: 2019, latestVisit: 2019 },
        { name: 'Spain', cc: 'sp', visits: 1, firstVisit: 2011, latestVisit: 2011 },
        { name: 'Sweden', cc: 'se', visits: 1, firstVisit: 2017, latestVisit: 2017 },
        { name: 'Taiwan', cc: 'tw', visits: 1, firstVisit: 2022, latestVisit: 2022 },
        { name: 'Thailand', cc: 'th', visits: 3, firstVisit: 2018, latestVisit: 2022 },
        { name: 'Turkey', cc: 'tr', visits: 1, firstVisit: 2022, latestVisit: 2022 },
        { name: 'Ukraine', cc: 'ua', visits: 1, firstVisit: 2016, latestVisit: 2016 },
        { name: 'United Arab Emirates', cc: 'ue', visits: 1, firstVisit: 2018, latestVisit: 2018 },
        { name: 'United Kingdom', cc: 'uk', visits: 1, firstVisit: 2018, latestVisit: 2018 },
        { name: 'Vietnam', cc: 'vi', visits: 1, firstVisit: 2019, latestVisit: 2019 },

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

  <table class="table table-borderless table-dark">
    <thead>
      <tr>
        <th>Flag</th>
        <th>Country</th>
        <th># of visits</th>
        <th>First visit</th>
        <th>Latest visit</th>
      </tr>
    </thead>
    <tbody>
      <CountryComponent
          v-for="country in countries"
          :key="country.name"
          :cc="country.cc"
          :name="country.name"
          :visits="country.visits"
          :firstVisit="country.firstVisit"
          :latest-visit="country.latestVisit">
      </CountryComponent>
    </tbody>
  </table>

</template>

<style scoped>

</style>