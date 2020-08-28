<template>
  <div class="container">
    <h3>List Of Issues</h3>
    <br />
    <div class="inner-grid">
      <div class="limit-div">
        <label for="limit">Number of Issues : </label>
        <select v-model.number="numberOfIssues">
          <option value=5>5</option>
          <option value=10>10</option>
          <option value=25>25</option>
          <option value=50>50</option>
          <option value=100>100</option>
        </select>
      </div>
    </div>
    <br />    
    <div class='note'>
      Click on Issue to see its comments!
    </div>
    <div class="list-issues">
        <ApolloQuery :query="require('../graphql/ListIssues.gql')" :variables="{login, repositoryName, numberOfIssues }" pollInterval=1000>
            <template v-slot="{ result: {loading, error, data}}">
                <div v-if="loading">Loading...</div>
                <div v-if="error">{{error}}</div>
                <div v-else-if="!data.repositoryOwner.repository.project">No Issues to display! Please Select another repository!{{setProjectIdToEmpty()}}</div>
                <div v-else-if="data.repositoryOwner.repository.project">
                  {{updateProjectId(data.repositoryOwner.repository.project.id)}}
                  <table border=1 frame=void rules=rows>
                    <thead>
                      <tr>
                        <th>Issue Title</th>
                      </tr>
                    </thead>
                    <tbody>
                        <tr v-for="issue in data.repositoryOwner.repository.issues.nodes" :key="issue.id" v-on:click="clickList('messageFromListIssues', issue.number)">
                          <td v-if="issue.closed"><strike>{{issue.title}}</strike></td>
                          <td v-else>{{issue.title}}</td>

                        </tr>
                    </tbody>
                  </table>
                </div>
            </template>    
        </ApolloQuery>
      </div>
      <div>
        <AddIssues :repositoryId="repositoryId" :projectId="projectId"/>
      </div>
  </div>
  
</template>

<script>
import login from "../login";
import AddIssues from "./AddIssue";

export default {
  name: "ListAndAddIssues",
  components: {
    AddIssues
  },
  props: ["repositoryName", "repositoryId"],
  data() {
    return {
      login: login,
      numberOfIssues: 10,
      projectId: ""
    }
  },
  methods: {
    clickList(fieldName, issueNumber) {
      this.$emit(fieldName, issueNumber);
    },
    updateProjectId(projectId) {
      this.projectId = projectId;
    },
    setProjectIdToEmpty() {
      this.projectId = "";
    }
  }
} 
</script>

<style scoped>
.container {
  border: lightgreen 3px solid;
  padding: 0px 15px 15px 15px;
}
.inner-grid {
    display: grid;
    margin-left: 10px;
    grid-template-columns: 1fr;
    max-width: 1000px;
    border: lightgrey 2px solid;
    text-align: center;
    padding: 10px;
  }
h3 {
    padding: 5px;
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
  .note {
    color: gray;
  }
</style>