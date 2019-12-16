import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import BootstrapVue from 'bootstrap-vue'
import firebase from 'firebase'

Vue.use(BootstrapVue)

import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'

import axios from 'axios'
import VueAxios from 'vue-axios'
 
Vue.use(VueAxios, axios)

// Agregamos la URL base de nuestra API
axios.defaults.baseURL = 'https://app-2brains-test.herokuapp.com/api';
//axios.defaults.baseURL = 'http://localhost:3001/api';

Vue.config.productionTip = false

//const firebaseConfig = require("C:/Users/Jorge/Desktop/respaldo/proyectos/node/fireBaseConfig.json");

const firebaseConfig = {
  "apiKey": "AIzaSyCddhra4Z3WYLUaCOuR9Y_hZXGA6IzRKZA",
  "authDomain": "brainstest-94ad6.firebaseapp.com",
  "databaseURL": "https://brainstest-94ad6.firebaseio.com",
  "projectId": "brainstest-94ad6",
  "storageBucket": "brainstest-94ad6.appspot.com",
  "messagingSenderId": "958480747722",
  "appId": "1:958480747722:web:4d159b50b55709f5fef833",
  "measurementId": "G-JZE7SHVVM3"
}

// Initialize Firebase
firebase.initializeApp(firebaseConfig);
firebase.analytics();
firebase.auth().onAuthStateChanged(function(email){
  new Vue({
    router,
    store,
    render: h => h(App)
  }).$mount('#app')
})

