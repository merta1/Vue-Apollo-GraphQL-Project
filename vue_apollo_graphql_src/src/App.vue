<template>
  <div class="app">
    <Header />
    <router-view />
  </div>
</template>

<script>
import Header from "./layout/Header";

export default {
  name: 'App',
  components: {
    Header
  },
}
</script>

<style>
    * {
    box-sizing: border-box;
    margin:0;
    padding: 0;
  }

  .app {
    font-family: Avenir, Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    margin-top: 25px;
    margin-left: 10%;
    margin-right: 10%;
    line-height:1.4;
  }

  .welcome-display {
    text-align: center;
    padding: 1px;
    color: blue;
  }
</style>
