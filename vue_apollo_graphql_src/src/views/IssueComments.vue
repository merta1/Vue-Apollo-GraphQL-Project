<template>
  <div class="issueCommentsContainer">
    <ListRepositoriesNameField @messageFromListRepositoriesNameField="updateRepositoryNameAndId"/>
    <ListAndAddIssues @messageFromListIssues="updateIssueNumber" :repositoryName="repositoryName" :repositoryId="repositoryId"/>
    <ListAndAddComments :repositoryName="repositoryName" :issueNumber="issueNumber"/>

  </div>
</template>

<script>
import ListRepositoriesNameField from "../components/ListRepositoriesNameField.vue";
import ListAndAddIssues from "../components/ListAndAddIssues.vue";
import ListAndAddComments from "../components/ListAndAddComments.vue";

export default {
  name:"IssueComments",
  components: {
    ListRepositoriesNameField,
    ListAndAddIssues,
    ListAndAddComments
  },
  data() {
    return {
      repositoryName: "Vue-Apollo-GraphQL-Project",
      issueNumber: 1,
      repositoryId: "MDEwOlJlcG9zaXRvcnkyOTA1ODc0NDE=",
      projectIds: ""
    }
  },
  methods: {
    updateRepositoryNameAndId(repositoryName, repositoryId) {
      this.repositoryName = repositoryName;
      this.repositoryId = repositoryId;
      console.log("IssueComments", this.repositoryName);
      console.log("IssueComments", this.repositoryId);
    },
    updateIssueNumber(issueNumber) {
      this.issueNumber = issueNumber;
      console.log('parent', this.issueNumber)
    }
  }
}
</script>

<style scoped>
  .issueCommentsContainer {
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    grid-gap: 1em;
    padding-top: 25px;
    padding-bottom: 30px;
  }
</style>