<template>
  <div class="container">
    <div class="list-marketplacelistings">
        <div class="limit-div">
          <label for="limit"><b>Select Number of Listings You want to see: </b></label>
          <select v-model.number="limit">
            <option value=5>5</option>
            <option value=10>10</option>
            <option value=25>25</option>
            <option value=50>50</option>
          </select>
        </div>
        <div class="listings">
          <ApolloQuery :query="require('../graphql/GetMarketPlaceListings.gql')" :variables="{limit }">
            <template v-slot="{ result: {loading, error, data}}">
                <div v-if="loading">Loading...</div>
                <div v-if="error">{{error}}</div>
                <div v-if="data">
                  <table border=1 frame=void rules=rows>
                    <thead>
                      <tr>
                        <th>Repository Name</th>
                        <th div="creationTime">Creation Time</th>
                        <th>Url</th>
                      </tr>
                    </thead>
                    <tbody>
                        <tr v-for="appNode in data.marketplaceListings.nodes.filter(node => node.app !== null)" :key="appNode.id" v-on:click="clickList(appNode.app.description)">
                           <td>{{appNode.app.name}}</td>
                           <td>{{appNode.app.updatedAt.split("T")[0]}}</td>
                           <td><a v-bind:href=appNode.app.url>{{appNode.app.url}}</a></td>
                        </tr>
                    </tbody>
                  </table>
                </div>
            </template>    
        </ApolloQuery>
        </div>
      </div>
  </div>
</template>

<script>
export default {
  name:"MarketPlaceListings",
  data() {
    return {
      limit: 5
    }
  },
  methods: {
    log(msg){
      console.log(msg); 
    },
    clickList(description) {
      this.$emit('messageFromChild',description);
    }
  }
}
</script>

<style scoped>
  .container {
    border: lightgreen 3px solid;
  }
  .listings-container {
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-gap: 1.5em;
  }
  .list-marketplacelistings {
    padding: 25px;
  }
  .listing-description {
    border: lightgreen 3px solid;
  }
  h2 {
    padding: 25px;
    text-align:center;
  }
  .limit-div {
    padding-bottom: 15px;
  }
  table {
    min-width: 100%;
    text-align: center;
    margin-top: 15px;
    max-width: 40%;
  }
  td {
    padding: 7px;
    min-width: 110px;
    max-width: 180px;
    word-wrap: break-word;
  }
  select {
    font-size: 14px;
  }
</style>