<template>
  <div class="container">
    <ApolloQuery :query="require('../graphql/GetCodesOfConduct.gql')">
      <template v-slot="{result: {loading, error, data}}" >
        <div v-if="loading">Loading...</div>
        <div v-if="error">{{error}}</div>
        <div v-if="data" class="codesOfConduct">
          <div v-for="code in data.codesOfConduct" :key="code.id" class="grid-comp">
              <h3>{{code.name}}</h3>
              <br>
              {{code.body}}
          </div>
        </div>
      </template>
    </ApolloQuery>
  </div>
</template>

<script>
export default {
  name: "CodesOfConduct", 
  data() {
    return {

    }
  },
  methods: {
    log(msg){
      console.log(msg); 
    },
    span(text) {
      return `<span> ${text} </span>`
    },
  }
}
</script>

<style scoped>
  .container {
    margin-left: 10px;
  }
  .codesOfConduct {
    display: grid;
    grid-template-columns: 1fr;
    grid-gap: 40px;
    padding: 20px;
    white-space: pre;
    overflow: auto;
    word-wrap: break-word;
  }

  h3 {
    text-align: left;
  }

  div {
    word-wrap: break-word;
  }

  .grid-comp {
    padding: 10px;
  }


</style>