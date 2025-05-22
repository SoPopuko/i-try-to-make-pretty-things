<script setup lang="ts">
import { ref } from 'vue'
import IconSupport from './icons/IconSupport.vue'

const panelOn = ref(false)
const ready = ref(false)
</script>

<template>
  <div>
    <div class="panel-container">
      <div class="panel-title" @click="((panelOn = !panelOn), (ready = true))">
        <IconSupport :style="panelOn === true ? 'color: red' : 'color: pink'" />
        <p>Lorem ipsum dolor sit amet.</p>
      </div>
      <div class="panel-desc" :class="{ opened: panelOn, closed: !panelOn && ready }">
        <p>
          Aenean consectetur libero lectus. Proin id ante arcu. Nulla justo justo, vehicula sit amet
          ante quis, molestie euismod est. Praesent eros augue, rutrum non erat in, rutrum porttitor
          neque. Sed eleifend nec erat sed posuere. Vivamus ultrices quam lorem, sit amet pulvinar
          ex rutrum eu. Vestibulum semper neque vitae efficitur varius. Phasellus porta molestie
          purus, id porta turpis porttitor quis.
        </p>
        <p>
          Cras scelerisque, elit sed consectetur suscipit, eros ex sodales leo, nec pellentesque
          arcu orci eu risus. Donec at dui sit amet felis cursus placerat ut sit amet nisl. Etiam
          quis lacinia ex. Cras faucibus fringilla vestibulum. Curabitur scelerisque pellentesque
          nisl eget euismod. Integer ac posuere enim. Aliquam erat volutpat. Morbi eget ultrices
          risus, non tincidunt nibh. Cras tempor erat ligula, at mollis massa aliquet nec. In vel
          est vel risus cursus condimentum. Sed viverra volutpat urna sit amet facilisis. Morbi non
          ligula ac tellus porttitor interdum. Sed vestibulum cursus commodo.
        </p>
      </div>
    </div>
  </div>
</template>
