<script setup>

</script>

<template>
<div id="header">LOW GLOSS <span id="vnum">v0.0.0</span></div>
 <video playsinline autoplay muted loop id="bgstatic">
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

#header{
  font-family: ocr-b-std, monospace;
  font-weight: 400;
  font-style: normal;
  font-size: 3rem;
  position: absolute;
  padding: 2rem;
  color: #000;
  z-index: 1;
}

#vnum{
  font-size: 1rem;
}

video{
  z-index: 0;
  object-fit: cover;
  width: 100vw;
  height: 100vh;
  position: fixed;
  top: 0;
  left: 0;
}
</style>
