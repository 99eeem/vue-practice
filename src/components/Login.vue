<template>

  <section @click="$emit('close-login')" class="fixed-top h-100 w-100 bg-secondary opacity-3" style="opacity: 0.6; z-index: 2;">
  </section>

  <div class="position-absolute border w-25 p-2 bg-white" style="left: 50%; top: 50%; transform: translatex(-50%) translatey(-50%); z-index: 3">
    <div class="d-flex p-3 bg-white flex-column w-100 m-auto rounded p-1 border border-secondary">
      <h1>Login</h1>
      <form class="d-flex flex-column" @submit.prevent="submit">
      <label for="userName">
        <input type="text" class="w-75" id="userName" placeholder="UserName" v-model="form.userName">
      </label>
      <label for="password">
        <input type="password" class="w-75 my-3" id="password" placeholder="password" v-model="form.password">
      </label>
      <button type="submit" class="w-75 m-auto bg-warning text-white">Login</button>
      </form>
    </div>
  </div>


</template>

<script>
import firebase from '../utilities/firebase';
export default {
  data(){
    return {
      form: [
       {userName:"eiki", password: "EEEEEEEE"}
      ]
    }

  },
  methods: {
    submit(){
      firebase.auto().signInWithEmailAndPassword(this.form.userName, this.form.password).then((user) => {
        console.log(user);

  })
  .catch((error) => {
     var errorCode = error.code;
    var errorMessage = error.message;
    console.log(errorCode)
    console.log(errorMessage)

  });



    },
  },


}
</script>

<style>

</style>
