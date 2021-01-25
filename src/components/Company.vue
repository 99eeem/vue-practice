<template>
  <h1 class="my-5">This is list of company that I applied for Job interview</h1>
  <h3 class="mb-5">Now you are apply for {{companyCount}}</h3>
  <li class="mx-auto my-2 text-left w-50 d-flex" v-for="(company,index) in companies" :key="company.name"><p class="w-25" style="word-break: break-all; font-weight: 900;">{{company.name}}</p>
  <input class="w-20 ml-2" type="text" placeholder="志望どはどのくらい？">
  <button @click="removeButton(index)" class="btn btn-primary mx-1 ml-auto">X</button>
  </li>
  <input v-model="newCompany">
  <button @click="addCompany">Add Company</button>
</template>

<script>


import {computed, ref} from "vue";
export default {
  setup(){
     const companies=ref([]);
     const newCompany=ref("");

      function removeButton(index){
      companies.value=companies.value.filter((company,i) => i !==index
      )
    }
    const companyCount= computed({
      get: () =>companies.value.length,
    })
    function addCompany (){
      if(newCompany.value!==""){
      companies.value.unshift({name: newCompany.value})
      newCompany.value="";
    }
    }

     return {companies, newCompany, removeButton, addCompany, companyCount}
  }
}
</script>

<style>

</style>
