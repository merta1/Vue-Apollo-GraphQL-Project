<template>
  <div class="addCommentsContainer">
    <ApolloMutation
          :mutation="require('../graphql/AddComment.gql')"
          :variables="{
            input: {
              subjectId: subjectId,
              body: commentText,
              clientMutationId: clientMutationId
            },
          }"
          class="form"
          @done="commentText = ''"
        >
          <template slot-scope="{ mutate }">
            <form v-on:submit.prevent="formValid && mutate()">
              <label for="field-Comment"><b>Add Comment: </b></label>
              <br/>
              <textarea
                id="text-area"
                v-model="commentText"
                placeholder="Type your comment"
                rows="5"
              ></textarea>
              <button>Add Comment</button>
            </form>
          </template>
        </ApolloMutation>
  </div>
</template>

<script>
export default {
  name:"AddComment",
  props:["subjectId"],
  data() {
    return {
      commentText: '',
      clientMutationId:"123",
    }
  },
  computed: {
    formValid() {
      return this.commentText
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