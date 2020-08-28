<template>
  <div class="container">
    <h3>List Of Comments</h3>
    <br />
    <div class="inner-grid">
      <div class="limit-div">
        <label for="limit">Number of Comments : </label>
        <select v-model.number="numberOfComments">
          <option value=5>5</option>
          <option value=10>10</option>
          <option value=25>25</option>
          <option value=50>50</option>
          <option value=100>100</option>
        </select>
      </div>
    </div>
    <br />
    <div class="list-comments">
      <ApolloQuery :query="require('../graphql/ListCommentsOfIssue.gql')" :variables="{login, repositoryName, issueNumber, numberOfComments }" pollInterval=1000>
        <template v-slot="{ result: {loading, error, data}}">
          <div v-if="loading">Loading...</div>
          <div v-if="error">No Comments To Dipslay choose another Issue or Repository!</div>
          <div v-else-if="!data.repositoryOwner.repository.project">No Issues to display! Please Select another repository!</div>
          <div v-else-if="data.repositoryOwner.repository.project">
            <p><b>Issue Title: </b>{{data.repositoryOwner.repository.issue.title}}</p>
            <p><b>Issue Comment: </b>{{data.repositoryOwner.repository.issue.body}}</p>
            {{assingSubjetId(data.repositoryOwner.repository.issue.id)}}
              <table border=1 frame=void rules=rows>
                <thead>
                  <tr>
                    <th>Comments</th>
                    <th>Login ID</th>
                  </tr>
                </thead>
                <tbody>
                  <tr v-for="comment in data.repositoryOwner.repository.issue.comments.nodes" :key="comment.id" v-on:click="clickList(comment.number)">
                    <td>{{comment.body}}</td>
                    <td>{{comment.author.login}}</td>
                  </tr>
                </tbody>
              </table>
          </div>
        </template>    
      </ApolloQuery>
    </div>
    <br>
    <div class="Add Comments">
      <AddComment :subjectId="subjetId"/>
    </div>
  </div>
</template>

<script>
import login from "../login";
import AddComment from "./AddComments";

export default {
  name:"ListAndAddComments",
  components: {
    AddComment
  },
  props: ["repositoryName", "issueNumber"],
  data() {
    return {
      login,
      numberOfComments: 10,
      subjetId: "MDU6SXNzdWU2ODY2MDI4NDU=",
    }
  },
  methods: {
    assingSubjetId(id) {
      this.subjetId = id;
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
    margin-left: 10px;
    max-width: 200px;
    border: lightgrey 2px solid;
    text-align: center;
    min-width: 95%;
    padding: 10px;

  }
  h3 {
    padding: 5px;
  }
  table {
    min-width: 100%;
    text-align: center;
    margin-top: 15px;
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