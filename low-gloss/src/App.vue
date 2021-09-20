<script setup>
// This starter template is using Vue 3 <script setup> SFCs
// Check out https://v3.vuejs.org/api/sfc-script-setup.html#sfc-script-setup
import HelloWorld from './components/HelloWorld.vue'
import VideoBackground from 'vue-responsive-video-background-player'
</script>

<template>
  <video-background 
    src="./assets/static1.mp4"
    style="height: 100vh; margin:auto; padding: 0; border:0;"
 >
 </video-background>
</template>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  background-color: black;
  margin: 0;
  padding:0;
}
</style>
