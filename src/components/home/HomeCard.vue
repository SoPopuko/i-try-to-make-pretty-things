<script setup lang="ts">
defineProps<{
  route: string
  desc: string
}>()
</script>

<template>
    <div class="home-card">
        <RouterLink :to="route">{{ desc }}</RouterLink>
    </div>
</template>