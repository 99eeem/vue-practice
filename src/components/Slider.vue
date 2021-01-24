<template>
  <div class="d-flex w-100 flex-wrap postion-relative">
    <div v-for="(color, index) in colors" :key="color" class="position-absolute w-100 h-50">
      <transition name="fade">
        <div v-if="currentIndex==index" :class="color" class="h-100">
        </div>
      </transition>
  </div>
  <div class="postion-absolute buttom-0 d-flex z-index20">
    <div v-for="item in colors" :key="item" class="bg-dark" style="height: 20px width: 20px"></div>
  </div>
  </div>
</template>

<script>
export default {
  data(){
    return {
      colors: ["bg-primary", "bg-info", "bg-success"],
      currentIndex: 0,
      sliderTime: ""

    }
  },
  mounted() {
    this.sliderTime = setInterval(() => {
      console.log(this.currentIndex);
      this.currentIndex= this.currentIndex == 2 ?  0 : this.currentIndex+1;
    }, 1000);
  },
  beforeUnmount(){
    clearInterval(this.sliderTime)
  }



}
</script>

<style>
.fade-enter-active, .fade-leave-active {
  transition: all 1s ease;
}
.fade-enter{
  transform: translateX(-100%);
}
.fade-leave-to /* .fade-leave-active below version 2.1.8 */ {
  opacity: 0;
  transform: translateX(100%);
}
</style>
