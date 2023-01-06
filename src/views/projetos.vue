<script setup>
import Index from '../views/projetos/index.vue'
import Projetos from '../components/Projetos.vue'
import NavTwo from '../components/NavTwo.vue'
import NavBottomTree from '../components/NavBottomTree.vue'
</script>
<template>
<div>
  <NavTwo/>
  <div class='anima'>
  <Projetos/>
  <Index/>
  </div>
  <NavBottomTree/>
</div>
</template>
