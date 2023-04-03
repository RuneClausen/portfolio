<template>
  <div class="container my-4">
    <h1 class="display-4">Running</h1>

    <div class="mb-5">Personal results from various races I've competed in:</div>

    <RunningComponent
      v-for="race in results"
      :name="race.name"
      :distance="race.distance"
      :time="race.time"
      :date="race.date"
      :location="race.location">
    </RunningComponent>
  </div>
</template>

<script lang="ts">
import {defineComponent} from "vue";
import RunningComponent from '../components/RunningComponent.vue';

export default defineComponent({
  components: {
    RunningComponent
  },
  data() {
    return {
      results: [
        { id: 1, name: 'Palestine Marathon', distance: 'Halfmarathon', time: '1:33:54', date: '10-03-2023', location: 'Bethlehem, Palestine' },
        { id: 2, name: 'Nytårsløbet', distance: '5K', time: '21:49', date: '31-12-2022', location: 'Aarhus' },
        { id: 3, name: 'Copenhagen Half \'22', distance: 'Halfmarathon', time: '1:29:09', date: '18-09-2022', location: 'Copenhagen' },
        { id: 4, name: 'Aabenra Bjergmarathon \'22', distance: '10K', time: '44:37', date: '18-06-2022', location: 'Aabenraa' },
        { id: 5, name: 'Aarhus City Half \'22', distance: 'Halfmarathon', time: '1:43:28', date: '12-06-2022', location: 'Aarhus' },
        { id: 6, name: 'Royal Run \'22', distance: '10K', time: '43:29', date: '06-06-2022', location: 'Aarhus' },
        { id: 7, name: 'Copenhagen Half \'21', distance: 'Halfmarathon', time: '1:25:51', date: '19-09-2021', location: 'Copenhagen' },
        { id: 8, name: 'Royal Run \'21', distance: '10K', time: '39:22', date: '12-09-2021', location: 'Sønderborg' },
        { id: 9, name: 'Hvide Sande Halfmarathon', distance: 'Halfmarathon', time: '1:32:19', date: '09-07-2021', location: 'Hvide Sande' },
        { id: 10, name: 'Fremad Elite Trials', distance: '800m', time: '2:19,6', date: '03-07-2021', location: 'Aarhus N' },
        { id: 11, name: 'Fremad Elite Trials', distance: '3000m', time: '10:31,8', date: '03-07-2021', location: 'Aarhus N' },
        { id: 12, name: 'Aarhus ABC Stævne', distance: '400m', time: '1:03,79', date: '29-06-2021', location: 'Ceres Park, Aarhus' },
        { id: 13, name: 'OGF Sommerløb', distance: '5K', time: '17:56', date: '25-06-2021', location: 'Odense' },
        { id: 14, name: 'Aabenraa Bjergmarathon \'21', distance: 'Halfmarathon', time: '1:44:40', date: '19-06-2021', location: 'Aabenraa' },
        { id: 15, name: 'Aalborg Stævne', distance: '1500m', time: '4:41,82', date: '05-06-2021', location: 'Aalborg' },
        { id: 16, name: 'Aarhus ABC Stævne', distance: '1500m', time: '4:47,42', date: '03-06-2021', location: 'Ceres Park, Aarhus' },
        { id: 17, name: 'Aarhus ABC Stævne', distance: '5000m', time: '18:55', date: '14-05-2021', location: 'Viby, Aarhus' },
        { id: 18, name: 'Genåbningsløbet', distance: '5K', time: '18:16', date: '07-05-2021', location: 'Aarhus' },
        { id: 19, name: 'DM10', distance: '10K', time: '40:02', date: '24-04-2021', location: 'Værløse Flyveplads' },
        { id: 20, name: 'Champagnegalloppen', distance: 'Marathon', time: '4:22:48', date: '31-12-2019', location: 'Rødekro' },
        { id: 21, name: 'Bro Genåbningsløbet', distance: '10K', time: '45:26', date: '05-10-2019', location: 'Fredericia' },
        { id: 22, name: 'Odense Half', distance: 'Halfmarathon', time: '1:44:08', date: '29-09-2019', location: 'Odense' },
        { id: 23, name: 'Copenhagen Half \'19', distance: 'Halfmarathon', time: '1:46:10', date: '15-09-2019', location: 'Copenhagen' },
        { id: 24, name: 'Kolding Ultra Run', distance: 'Halfmarathon (trail)', time: '2:07:55', date: '25-08-2019', location: 'Kolding' },
        { id: 25, name: 'Aabenraa Bjergmarathon \'19', distance: 'Halfmarathon', time: '1:59:55', date: '22-06-2019', location: 'Aabenraa' },
        { id: 26, name: 'Aarhus City Half \'19', distance: 'Halfmarathon', time: '1:59:50', date: '16-06-2019', location: 'Aarhus' },
        { id: 27, name: 'Royal Run \'19', distance: '10K', time: '48:20', date: '10-06-2019', location: 'Copenhagen' },
        { id: 28, name: 'Lillebælt Halvmarathon \'19', distance: 'Halfmarathon', time: '1:50:30', date: '04-05-2019', location: 'Middelfart' },
        { id: 29, name: 'Aabenraa Bjergmarathon \'18', distance: '10K', time: '57:05', date: '23-06-2018', location: 'Aabenraa' },
        { id: 30, name: 'Royal Run \'18', distance: '10K', time: '59:52', date: '21-05-2018', location: 'Odense' },
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

<style scoped>

</style>