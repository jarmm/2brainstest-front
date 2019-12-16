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

const firebaseConfig = {
  "apiKey": process.env.VUE_APP_FB_APIKEY,
  "authDomain": process.env.VUE_APP_FB_AUTHDOMAIN,
  "databaseURL": process.env.VUE_APP_FB_DATABASE_URL,
  "projectId": process.env.VUE_APP_FB_PROJECT_ID,
  "storageBucket": process.env.VUE_APP_FB_STORAGE_BUCKET,
  "messagingSenderId": process.env.VUE_APP_FB_MESSAGIN_SEND_ID,
  "appId": process.env.VUE_APP_FB_APP_ID,
  "measurementId": process.env.VUE_APP_FB_MEASUREMENT_ID
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

