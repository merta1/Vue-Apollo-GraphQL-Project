<template>
  <div class="container">
    <div class="listings-container">
      <MarketPlaceListings @messageFromChild="childMessageReceived"/>
      <MarketPlaceListingsDescription v-bind:description="description"/>
    </div>
  </div>
</template>

<script>
import MarketPlaceListings from "../components/MarketPlaceListings.vue";
import MarketPlaceListingsDescription from "../components/MarketPlaceListingDescription";

export default {
  name:"MarketPlace",
  components: {
    MarketPlaceListings,
    MarketPlaceListingsDescription
  },
  data() {
    return {
      description:""
    }
  },
  methods: {
    childMessageReceived(description) {
      this.description = description
    }
  },

}
</script>

<style scoped>
  .container {
    margin-bottom: 30px;
    padding-top: 25px;
  }
  .listings-container {
    display: grid;
    grid-template-columns: 1fr 1.3fr;
    grid-gap: 1em;
  }
  .list-marketplacelistings {
    background-color: beige;
    padding: 25px
  }
  .listing-description {
    background-color: aqua;
    padding: 25px
  }
  h3 {
    padding: 25px;
    text-align:center;
  }
  .limit-div {
    /* padding: 15px; */
    padding-bottom: 15px;
  }
  table {
    min-width: 100%;
    text-align: center;
    margin-top: 15px;
  }
  td {
    padding: 7px;
    min-width: 100px;
  }
  select {
    font-size: 14px;
  }
</style>