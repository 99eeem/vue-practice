<template>
<div id="app" class="my-0">

<Header @open-login="isOpen=true"/>

</div>
<Login v-if="isOpen" @close-login="isOpen=false"/>
</template>

<script>


import Login from "./components/Login";
import Header from "./components/Header";
export default {
  components: {Login, Header},
  name: 'App',
  data(){
    return {
    companies:[],
    newCompany: "",
    isOpen: false,
    }
  },
  methods: {
    addCompany: function(){
      if(this.newCompany!==""){
      this.companies.unshift({name: this.newCompany})
      this.newCompany="";
    }
    },
    removeButton(index){
      this.companies=this.companies.filter((company,i) => i !==index
      )
    }
  }

}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
}
