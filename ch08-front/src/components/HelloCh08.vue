<template>
  <div class="HelloCh05">
        <form @submit.prevent="getIdToLookup">
        <input type="text" placeholder="id?" v-model="idToLookup" name="idToLookup">
    </form>

      <br/>

    <ul class="nav navbar-nav navbar-right">
      <li>
        <button class="btn btn-danger log" v-show="isLoggedIn()" @click="handleLogout()">Log out </button>
        <button class="btn btn-info log" v-show="!isLoggedIn()" @click="handleLogin()">Log In</button>
      </li>
    </ul>

    <div v-if=" info == 'error' ">
        Unfortunately, something went wrong<br/><br/>
    </div>
    <div v-else  >
        We have read the <strong>entry with id </strong> {{ info.user_details[0].id }} from the backend:
        <ul>
            <li> <strong>Name: </strong> {{ info.user_details[0].name }} </li>
            <li> <strong>E-mail: </strong> {{ info.user_details[0].email }} </li>
            <li> <strong>Username: </strong> {{ info.user_details[0].username }} </li>
            <li> <strong>Password: </strong> {{ info.user_details[0].password}} </li>
        </ul>
    </div>
    <div>
      <strong>Status: </strong> {{ status }}
    </div>
    <div v-if= " info == 'error' " >
      <strong>Error: </strong> {{ error }}
    </div>
  </div>
</template>

<script>
    import * as axios from "axios";
    import {getAccessToken, isLoggedIn, login, logout} from '../../utils/auth'

    export default {
        name: "HelloCh05",
        data () {
            return {
                idToLookup: '',
                theUrl: '',
                info: null,
                status: null,
                error: null
            }
        },
        mounted () {
            this.idToLookup = '5'
            this.getIdToLookup()
        },
        methods: {
            handleLogin() {
                login();
            },
            handleLogout() {
                logout();
            },
            isLoggedIn() {
                return isLoggedIn()
            },
            getIdToLookup() {
                this.theUrl = 'http://localhost:5000/api/v1/users/' + this.idToLookup
                axios
                    .get(this.theUrl, { headers: {Authorization: `Bearer ${getAccessToken()}`  }})
                    .then(response => (this.info = response.data,
                                        this.status = response.status) )
                    .catch(error => (this.info = "error",
                                        this.status = error.response.status,
                                        this.error = error.response.data.code ) )
            }
        }
    }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
.navbar-right { margin-right: 0px !important}
.log {
  margin: 5px 10px 0 0;
}
</style>
