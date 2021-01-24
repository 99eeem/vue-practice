<template>
  <h1 class="my-5">This is list of company that I applied for Job interview</h1>
  <li class="mx-auto my-2 text-left w-50 d-flex" v-for="(company,index) in companies" :key="company.name">{{company.name}}
  <input class="w-20 ml-2" type="text" placeholder="志望どはどのくらい？">
  <button @click="removeButton(index)" class="btn btn-primary mx-1 ml-auto">X</button>
  </li>
  <input v-model="newCompany">
  <button @click="addCompany">Add Company</button>
</template>

<script>


import {ref} from "vue";
export default {
  setup(){
     const companies=ref([]);
     const newCompany=ref("");

      function removeButton(index){
      companies.value=companies.value.filter((company,i) => i !==index
      )
    }
    function addCompany (){
      if(newCompany.value!==""){
      companies.value.unshift({name: newCompany.value})
      newCompany.value="";
    }
    }

     return {companies, newCompany, removeButton, addCompany}
  }
}
</script>

<style>

</style>
}
