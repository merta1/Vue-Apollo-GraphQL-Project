<template>
  <header class="header">
    <h1>Welcome to Github Account Actions</h1>
    <div id="nav">
      <router-link to="/"><span>Home</span></router-link>  | 
      <router-link to="/issueComments"><span>View & Create Issue/Comments</span></router-link> |
      <router-link to="/marketPlace"><span>Market Place Listings</span></router-link> |
      <router-link to="/codesOfConduct"><span>Codes Of Conduct</span></router-link>
    </div>
  </header>
</template>

<script>
export default {
  name: "Header"
}
</script>

<style scoped>
  .header {
    background: Green;
    color: #fff;
    text-align: center;
    padding-top: 10px;
    padding-bottom: 10px;
  }
  .header a{
    color: white;
    text-decoration: none;
  }

  a:hover {
    color: lightgreen;
  }

  span {
    margin: 10px;
  }
</style>