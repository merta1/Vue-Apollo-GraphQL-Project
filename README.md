# Vue-Apollo-GraphQL-Project

## In this Project I used Vue.js with Github GraphQL

## First clone the Project then
```
cd vue_apollo_graphql_src
```

## To run this project you have to change 2 things

## First login.js change GITHUB_USER_NAME to your original Github user name
```
const login = "$GITHUB_USER_NAME";
```

## Second at vue-apollo.js change $YOUR_TOKEN to your original Github Token
```
headers: {
  'Authorization': "$YOUR_TOKEN"
}
```

## Project setup
```
npm install
```

### Compiles and hot-reloads for development
```
npm run serve
```

### Compiles and minifies for production
```
npm run build
```

### Lints and fixes files
```
npm run lint
```

### Customize configuration
See [Configuration Reference](https://cli.vuejs.org/config/).