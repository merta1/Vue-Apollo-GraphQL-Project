<template>
  <div class="list-repos-container">
    <h3>List Repositories</h3>
    <br />
    <div class="custom-select" >
      <div class="inner-grid">
        <div class="repos-div">
          <label for="repositories_attribute">Sort repositories by: </label>
          <select v-model="selected">
            <option value="CREATED_AT">Creation Time</option>
            <option value="UPDATED_AT">Updation Time</option>
            <option value="PUSHED_AT">Push Time</option>
            <option value="NAME">Name</option>
            <option value="STARGAZERS">Number of Stargazers</option>
          </select>
        </div>
        <div class="orderType-div">
          <label for="orderType">Ascending or Descending: </label>
          <select v-model="orderType">
            <option value="ASC">Ascending</option>
            <option value="DESC">Descending</option>
          </select>
        </div>
        <div class="limit-div">
          <label for="limit">Rows : </label>
          <select v-model.number="limit">
            <option value=10>10</option>
            <option value=25>25</option>
            <option value=50>50</option>
            <option value=100>100</option>
          </select>
        </div>
      </div>
      <br />
      <div class="list-repos">
        <ApolloQuery :query="require('../graphql/ListRepositories.gql')" :variables="{field: selected, direction: orderType, limit }">
            <template v-slot="{ result: {loading, error, data}}">
                <div v-if="loading">Loading...</div>
                <div v-if="error">{{error}}</div>
                <div v-if="data">
                  <table border=1 frame=void rules=rows>
                    <thead>
                      <tr>
                        <th>Repository Name</th>
                        <th>Descreption</th>
                        <th>Creation Time</th>
                      </tr>
                    </thead>
                    <tbody>
                        <tr v-for="repo in data.repositoryOwner.repositories.nodes" :key="repo.id">
                          <td>{{repo.name}}</td>
                          <td class="toLeft">{{repo.description}}</td>
                          <td>{{repo.createdAt.split("T")[0]}}</td>
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
  name:"ListRepositories",
  data() {
    return {
      selected: 'CREATED_AT',
      orderType: 'DESC',
      limit: 10
    }
  }
}
</script>

<style scoped>
  .list-repos-container {
    /* background-color: lightblue; */
    background-color:white;
    border: Blue 1px solid;
    padding: 0px 15px 15px 15px;
  }

  select {
    font-size: 14px;
  }

  .inner-grid {
    display: grid;
    margin-left: 10px;
    grid-template-columns: 1fr 1fr 1fr;
    max-width: 1000px;
  }

  .list-repos {
    margin: 10px;
  }

  table{
    align-items: center;
  }

  th {
    min-width: 120px;
  }

  tr {
    border: gray 1px solid; 
    text-align: center;  
  }

  td{
    padding: 7px;
  }

  .toLeft {
    text-align:center;
  }
</style>