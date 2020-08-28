<template>
    <div class="my-info-container">
        <h3>Personal Info :</h3>
        <ApolloQuery :query="require('../graphql/GetPersonalInfo.gql')">
            <template v-slot="{ result: {loading, error, data}}">
                <div v-if="loading">Loading...</div>
                <div v-if="error">{{error}}</div>
                <div v-if="data">
                    <div id="my-info-data">
                        <label><b>User Name:</b> {{data.viewer.login}}</label>
                        <label><b>Company:</b> {{data.viewer.company}} </label>
                        <label><b>Email:</b> {{data.viewer.email}}</label>
                        <label><b>Location:</b> {{data.viewer.location}} </label>
                        <label><b>Bio:</b> {{data.viewer.bio}}</label>
                        <label><b>Account Created at:</b> {{data.viewer.createdAt.split("T")[0]}} </label>
                    </div>
                </div>
            </template>    
        </ApolloQuery>
    </div>
</template>

<script>

export default {
    name: "PersonalInfo",
}

</script>

<style scoped>
    .my-info-container {
        background-color:white;
        border: lightgreen 3px solid;
        padding: 0px 15px 15px 15px;
        /* border-radius: 1%; */
    }
    #my-info-data {
        display: grid;
        grid-template-columns: repeat(6, 1fr);
        grid-gap:1em;
    }

    label {
        border: lightgrey 2px solid;
        border-radius: 4%;
        text-align: center;
        padding: 8px;
    }

    h3 {
        padding: 5px;
    }
</style>