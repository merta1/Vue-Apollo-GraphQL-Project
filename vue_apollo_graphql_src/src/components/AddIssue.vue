<template>
  <div class="addIssueContainer">
    <div v-if="projectId">
      <ApolloMutation
          :mutation="require('../graphql/AddIssue.gql')"
          :variables="{
            input: {
              repositoryId: repositoryId,
              title: title,
              body: body,
              projectIds: projectId,
              assigneeIds: [assigneeIds]
            },
          }"
          class="form"
          @done="body = '', title=''"
      >
        <template slot-scope="{ mutate }">
            <form v-on:submit.prevent="formValid && mutate()">
              <label for="field-Comment"><b>Add an Issue: </b></label>
              <br/>
              <label for="Title"><b>Title: </b></label>
              <textarea
                id="text-area"
                v-model="title"
                placeholder="Type the Title of the Issue"
                rows="1"
              ></textarea>
              <label for="Body"><b>Comments about the Issue: </b></label>
              <textarea
                id="text-area"
                v-model="body"
                placeholder="Type the comment of the Issue"
                rows="5"
              ></textarea>
              <button>Add Issue</button>
            </form>
          </template>
        </ApolloMutation>
    </div>
    <div v-else>
      <br>
      <b>There is no Project! Please create a project and then Try Again!</b>
    </div>
  </div>
</template>

<script>
export default {
  name:"AddIssue",
  props:["projectId", "repositoryId"],
  data() {
    return {
      title: '',
      body: '',
      assigneeIds: "MDQ6VXNlcjIyNzQ2Mzc0"
    }
  },
  computed: {
    formValid() {
      return this.body && this.title
    },
  },
}
</script>
<style scoped>
  button {
    margin-top: 10px;
    padding: 10px; 
  }

  textarea{
    padding: 5px;
    width:100%;
  }
</style>