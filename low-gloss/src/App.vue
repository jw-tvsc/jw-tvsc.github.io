<script setup>

</script>

<template>
 <video playsinline autoplay mute loop id="bgstatic">
   <source src="./assets/static1.mp4" type="video/mp4">
 </video>
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
video{
  object-fit: cover;
  width: 100vw;
  height: 100vh;
  position: fixed;
  top: 0;
  left: 0;
}
</style>
