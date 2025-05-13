<template>
  <div class="timeline-container">
    <div class="timeline-line">
      <TimelineStep
        :name="'Fanny'"
        :age="21"
        :wishlist="['Chaussures Adadas', 'Trousse à maquillage', 'Top à bretelles']"
        :is-left="true"
        :color="'red'"
        :text-color="'black'"
      />
      <TimelineStep
        :name="'Julien'"
        :age="15"
        :wishlist="['T-shirt du LOSC', 'Sac eastpack', 'Ordinateur gaming']"
        :is-left="false"
        :color="'orange'"
        :text-color="'black'"
      />
      <TimelineStep
        :name="'Alice'"
        :age="26"
        :wishlist="['Livres', 'Peinture', 'Crayons feutres']"
        :is-left="true"
        :color="'yellow'"
        :text-color="'black'"
      />
      <TimelineStep
        :name="'Arthur'"
        :age="8"
        :wishlist="['Playmobils', 'Livres de coloriage', 'Action man']"
        :is-left="false"
        :color="'green'"
        :text-color="'white'"
      />
      <TimelineStep
        :name="'Fanny'"
        :age="21"
        :wishlist="['Chaussures Adadas', 'Trousse à maquillage', 'Top à bretelles']"
        :is-left="true"
        :color="'skyblue'"
        :text-color="'black'"
      />
      <TimelineStep
        :name="'Julien'"
        :age="15"
        :wishlist="['T-shirt du LOSC', 'Sac eastpack', 'Ordinateur gaming']"
        :is-left="false"
        :color="'indigo'"
        :text-color="'white'"
      />
      <TimelineStep
        :name="'Alice'"
        :age="26"
        :wishlist="['Livres', 'Peinture', 'Crayons feutres']"
        :is-left="true"
        :color="'purple'"
        :text-color="'black'"
      />
    </div>
  </div>
</template>
<script setup lang="ts">
import TimelineStep from './timeline/TimelineStep.vue'
</script>
