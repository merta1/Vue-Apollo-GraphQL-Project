<template>
  <div id="home-page">
    <br />
    <PersonalInfo />
    <br />
    <ListRepositories />
  </div>
</template>

<script>

import PersonalInfo from "../components/PersonalInfo";
import ListRepositories from "../components/ListRepositories";

export default {
  name: 'Home',
  components: {
    PersonalInfo,
    ListRepositories
  },
}
</script>

<style>
  * {
    box-sizing: border-box;
    margin:0;
    padding: 0;
  }

  body {
    font-family: Arial, Helvetica, sans-serif;
    line-height:1.4;
  }

  .btn {
    display: inline-block;
    border: none;
    background: #555;
    color: #fff;
    padding: 7px 20px;
    cursor: pointer
  }
  .btn:hover {
    background: #666;
  }
</style>
