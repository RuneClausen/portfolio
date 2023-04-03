<script setup lang="ts">
import {RouterLink, RouterView} from 'vue-router'
</script>

<template>
  <nav class="navbar navbar-expand-lg">
    <div class="container-fluid">
      <a class="navbar-brand" href="#">
        RuneClausen.dk
      </a>
      <button class="navbar-toggler" type="button" data-bs-toggle="collapse"
              data-bs-target="#navbarCollapseContent" aria-controls="navbarCollapseContent"
              aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarCollapseContent">
        <ul class="navbar-nav me-auto">
          <li class="nav-item">
            <RouterLink class="nav-link" to="/">Home</RouterLink>
          </li>
          <li class="nav-item">
            <RouterLink class="nav-link" to="/travels">Travels</RouterLink>
          </li>
          <li class="nav-item">
            <RouterLink class="nav-link" to="/running">Running</RouterLink>
          </li>
          <li class="nav-item">
            <RouterLink class="nav-link" to="/about">About</RouterLink>
          </li>
          <li class="nav-item">
            <RouterLink class="nav-link" to="/cv">CV</RouterLink>
          </li>
        </ul>
      </div>
    </div>
  </nav>

  <div class="container">
    <RouterView/>
  </div>
</template>

<style scoped>
</style>
