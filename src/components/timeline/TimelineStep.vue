<template>
  <div
    class="container"
    :class="isLeft === true ? 'left' : 'right'"
    data-before-content="8 janvier"
    :style="{ '--timeline-event-color': color, '--timeline-event-text-color': textColor }"
  >
    <div class="content">
      <IconCake />
      <h2>{{ name }}</h2>
      <span> {{ age }} ans</span>
      <div><u>cadeaux souhaités</u></div>
      <ul v-for="item in wishlist" v-bind:key="item">
        <li>{{ item }}</li>
      </ul>
    </div>
  </div>
</template>

<script setup lang="ts">
defineProps<{
  name: string
  age: number
  wishlist: Array<string>
  isLeft: boolean
  color: string
  textColor: string
}>()
</script>
