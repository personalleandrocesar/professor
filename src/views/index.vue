<script setup>
import Home from '../components/Home.vue'
import ProfileHome from '../components/ProfileHome.vue'
import NavOne from '../components/NavOne.vue'
import NavBottom from '../components/NavBottom.vue'

</script>

<template>
  <div>
    <NavOne class="logoAnimationOne" />
    <div class='anima'>
      <Home />
    </div>
    <NavBottom />
    <ProfileHome />
  </div>
</template>