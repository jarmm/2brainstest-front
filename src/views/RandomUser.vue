<template>
  <div class="container">
    <h1>Random Users</h1>
     <form @submit.prevent="randomUsers">
      <input v-model="quantity" type="text" placeholder="Quantity" />
      <input type="submit" value="Get Random Users" />
    </form>
  </div>
</template>

<script>
import firebase from "firebase";
export default {
  data() {
    return {
      quantity: ''
    };
  },
  methods: {
    async randomUsers() {
      const token = await firebase.auth().currentUser.getIdToken();
      let config = {
        headers: {
          Authorization: `Bearer ${token}`
        }
      };
      this.axios
        .get(`/get-users/${this.quantity}`, config)
        .then(() => this.$router.replace('user'))
        .catch(e => {
          console.log(e);
        });
    }
  }
};
</script>