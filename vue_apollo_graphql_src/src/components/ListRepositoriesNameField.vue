<template>
  <div class="list-repos-container">
    <h3>List Of Repositories</h3>
    <br />
    <div class="custom-select" >
      <div class="inner-grid">
        <div class="repos-div">
          <label for="repositories_attribute">Sort repositories by: </label>
          <select v-model="selected" @change="onChange($event)" >
            <option value="CREATED_AT">Creation Time</option>
            <option value="UPDATED_AT">Update Time</option>
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
      <div class='note'>
        Click on Repositoriy to see its issues!
      </div>
      <div class="list-repos">
        <ApolloQuery :query="require('../graphql/ListRepositories.gql')" :variables="{login, field: selected, direction: orderType, limit }">
            <template v-slot="{ result: {loading, error, data}}">
                <div v-if="loading">Loading...</div>
                <div v-if="error">{{error}}</div>
                <div v-if="data">
                  <table border=1 frame=void rules=rows>
                    <thead>
                      <tr>
                        <th>Repository Name</th>
                        <th>{{columnName}}</th>
                      </tr>
                    </thead>
                    <tbody>
                        <tr v-for="repo in data.repositoryOwner.repositories.nodes" :key="repo.id" v-on:click="clickList('messageFromListRepositoriesNameField',repo.name, repo.id)">
                          <td>{{repo.name}}</td>
                          <td>{{repo[columnData].split("T")[0]}}</td>
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
import login from "../login";

export default {
  name:"ListRepositoriesNameField",
  data() {
    return {
      selected: 'CREATED_AT',
      orderType: 'DESC',
      limit: 10,
      columnName: "Creation Time",
      columnData: "createdAt",
      login: login
    }
  },
  methods: {
    onChange(event) {
      const value = event.target.value;

      if(value == "CREATED_AT") {
        console.log(event.target.value)   
        this.columnName= "Creation Time";
        this.columnData = 'createdAt';     
      } else if(value == "UPDATED_AT") {
        this.columnName = "Update Time";
        this.columnData = "updatedAt";
      } else if(value == "PUSHED_AT") {
        this.columnName = "Pushed Time";
        this.columnData = "pushedAt";
      } 
    },
    clickList(fieldName, name, id) {
      console.log(name);
      console.log("namefield", id);
      this.$emit(fieldName, name, id);
    }
  }
}
</script>

<style scoped>
  .list-repos-container {
    background-color:white;
    border:lightgreen 3px solid;
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
    border: lightgrey 2px solid;
    text-align: center;
    padding: 10px;
  }

  .list-repos {
    margin: 10px;
  }

  table{
    align-items: center;
    min-width: 100%;
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

  h3 {
    padding: 5px;
  }

  .note {
    color: gray;
  }
</style>