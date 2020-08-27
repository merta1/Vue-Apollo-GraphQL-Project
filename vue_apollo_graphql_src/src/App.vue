<template>
  <div class="app">
    <div class="welcome-display">
      <h2>Welcome to Github Account Viewer</h2>
    </div>
    <PersonalInfo />
    <br>
    <ListRepositories />
  </div>
</template>

<script>
import PersonalInfo from './components/PersonalInfo.vue';
import ListRepositories from "./components/ListRepositories.vue";

export default {
  name: 'App',
  components: {
    PersonalInfo,
    ListRepositories
  },
}
</script>

<style>
  .app {
    font-family: Avenir, Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    /* text-align: center; */
    /* color: #2c3e50; */
    margin-top: 25px;
    margin-left: 10%;
    margin-right: 10%;
    /* background-color: beige; */
  }

  .welcome-display {
    text-align: center;
    padding: 1px;
    color: blue;
  }
</style>
