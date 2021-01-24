
<template>

<h1>Job hunttening calendar</h1>
<section class="w-10 d-flex">
  <p v-for="day in days" :key="day" class="h3 mx-4 text-center" style="width: 14.28%">{{day}}</p>
</section>
<section class="d-flex flex-wrap">
  <p v-for="num in 30" :key="num" style="width: 14.28%" class="h5 mt-3">{{num}}</p>
</section>
</template>

<script>


export default {
  data(){
    return {
      days: ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat']
    }
  }


}
</script>

<style>

</style>
}
