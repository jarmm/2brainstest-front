<template>
  <div>
    <h2>Login</h2> 
    <form @submit.prevent="login">
      <input v-model="email" type="text" placeholder="Email" />
      <input v-model="password" type="password" placeholder="Password" />
      <input type="submit" value="Sign In" />
    </form>
  </div>
</template>

<script>
import firebase from 'firebase';

export default {
  data() {
    return {
      email: "",
      password: ""
    };
  },
  methods: {
    login() {
      firebase
        .auth()
        .signInWithEmailAndPassword(this.email, this.password)
            .then((email) => this.$router.replace('/'), (error) => console.error(error));
    }
  }
};
</script>
    

<style scoped>
div {
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
}
form > * {
  display: block;
}
</style>
