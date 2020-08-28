<template>
  <div class="container">
    <h3>Click on any Repository To See Its Description  </h3>
    <div class="description">
      {{description}}
    </div>
  </div>
</template>

<script>
export default {
  name:"MarketPlaceListingDetails",
  props:["description"]
}
</script>

<style scoped>
  .container {
    border: lightgreen 3px solid;
    padding-left: 25px;
    padding-right: 25px;
    padding-bottom: 25px;
  }
  h3 {
    text-align: center;
    margin: 25px
  } 
  .description {
    line-height: 1.7em;
  }
</style>