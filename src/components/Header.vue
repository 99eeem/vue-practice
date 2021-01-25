<template>
  <nav class="w-100 text-left p-2 bg-secondary text-white"> <router-link to="/companys" class="text-white mr-2">Job huntting</router-link><router-link to="/calendar" class="text-white">Calendar</router-link><router-link to="/Slider" class="text-white mr-2">Slider</router-link><router-link to="/Calculator" class="text-white mr-2">Caluclator</router-link><button @click="$emit('open-login')" class="ml-2 bg-info text-white">Login</button></nav>
  <router-view></router-view>
</template>

<script>
export default {

}
</script>

<style>

</style>
