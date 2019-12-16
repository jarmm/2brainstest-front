<template>
  <div class="container">
    <h1>Redis Users</h1>
    <table class="table">
      <thead>
        <tr>
          <th scope="col">#</th>
          <th scope="col">Name</th>
          <th scope="col">Last Name</th>
          <th scope="col">Details</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="(item, index) in users" :key="index">
          <th scope="row">{{item._id}}</th>
          <td>{{item.name.title}} {{item.name.first}}</td>
          <td>{{item.name.last}}</td>
          <td>
            <b-button
              v-b-modal.modal-1
              class="btn-warning btn-sm mx-2"
              @click="sendData(item)"
            >Profile</b-button>
          </td>
        </tr>

        <b-modal id="modal-1" title="User Details">
          <p class="my-4">Gender:  {{selectedUser.gender}}</p>
          <p class="my-4">Email {{selectedUser.email}}</p>
          <p class="my-4">Phone:  {{selectedUser.phone}}</p>
          <p class="my-4">Cell:  {{selectedUser.cell}}</p>
          <p class="my-4">Cell:  {{selectedUser.location.city}} , {{selectedUser.location.country}} </p>
          <b-img :src="selectedUser.picture.large" fluid alt="Fluid image"></b-img>
          
        </b-modal>
      </tbody>
    </table>
  </div>
</template>

<script>
import firebase from "firebase";
export default {
  data() {
    return {
      users: [],
      selectedUser: {
          name: {},
          gender: '',
          email: '',
          phone: '',
          cell: '',
          location: {},
          picture: {}
      }
    };
  },
  created() {
    this.listUsers();
  },
  methods: {
    sendData(item) {
        this.selectedUser.name = item.name;
        this.selectedUser.gender = item.gender;
        this.selectedUser.email = item.email;
        this.selectedUser.phone = item.phone;
        this.selectedUser.cell = item.cell;
        this.selectedUser.location = item.location;
        this.selectedUser.picture = item.picture;
    },
    async listUsers() {
      const token = await firebase.auth().currentUser.getIdToken();
      let config = {
        headers: {
          Authorization: `Bearer ${token}`
        }
      };
      this.axios
        .get("/get-user-from-redis", config)
        .then(res => {
          console.log(res.data);
          this.users = res.data;
        })
        .catch(e => {
          console.log(e);
        });
    }
  }
};
</script>