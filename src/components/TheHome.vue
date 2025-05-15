<script setup lang="ts">
import HomeCard from '../components/home/HomeCard.vue'
</script>

<template>
  <div class="home-container">
    <div class="home-grid">
      <HomeCard :route="'/side-menu'" :desc="'Side Menu'" />
      <HomeCard :route="'/timeline'" :desc="'Timeline'" />
      <HomeCard :route="'/grid-cards'" :desc="'Grid cards'" />
      <HomeCard :route="'/folding-panel'" :desc="'Panneau dépliant'" />
    </div>
  </div>
</template>
