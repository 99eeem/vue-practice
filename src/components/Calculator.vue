<template>
  <h1 class="text-center">Calculator</h1>
  <p class="h2 w-25 m-auto" style="overflow-x: scroll; direction: rtl; height: 50px;">{{currentNumber}}</p>
  <p v-if="selectOpe" style="height: 20px;">{{prevNum}}{{selectOpe}}</p>
  <div class="w-25 row m-auto">
   <button @click="pressed('1')" class="p-2 border rounder col-3 h4" style="width: 60px; height: 60px;">1</button>
   <button @click="pressed('2')" class="p-2 border rounder col-3 h4" style="width: 60px; height: 60px;">2</button>
   <button @click="pressed('3')" class="p-2 border rounder col-3 h4" style="width: 60px; height: 60px;">3</button>
    <button @click="pressed('+')" class="p-2 border rounder col-3 h4" style="width: 60px; height: 60px;">+</button>
   <button @click="pressed('4')" class="p-2 border rounder col-3 h4" style="width: 60px; height: 60px;">4</button>
   <button @click="pressed('5')" class="p-2 border rounder col-3 h4" style="width: 60px; height: 60px;">5</button>
   <button @click="pressed('6')" class="p-2 border rounder col-3 h4" style="width: 60px; height: 60px;">6</button>
  <button @click="pressed('-')" class="p-2 border rounder col-3 h4" style="width: 60px; height: 60px;">-</button>
   <button @click="pressed('7')" class="p-2 border rounder col-3 h4" style="width: 60px; height: 60px;">7</button>
   <button @click="pressed('8')" class="p-2 border rounder col-3 h4" style="width: 60px; height: 60px;">8</button>
   <button @click="pressed('9')" class="p-2 border rounder col-3 h4" style="width: 60px; height: 60px;">9</button>
      <button @click="pressed('*')" class="p-2 border rounder col-3 h4" style="width: 60px; height: 60px;">*</button>
   <button @click="pressed('0')" class="p-2 border rounder col-3 h4" style="width: 60px; height: 60px;">0</button>
   <button @click="pressed('c')" class="p-2 border rounder col-3 h4" style="width: 60px; height: 60px;">C</button>
   <button @click="pressed('=')" class="p-2 border rounder col-3 h4" style="width: 60px; height: 60px;">=</button>
      <button @click="pressed('/')" class="p-2 border rounder col-3 h4" style="width: 60px; height: 60px;">/</button>

  </div>
</template>

<script>
import { onMounted, onUnmounted, ref } from "vue";
export default {
  setup(){
    const operation = ["+", "-", "*", "/"];
    const numbers =["1","2","3","4","5","6","7","8","9","0",]
    const currentNumber=ref("");
    const prevNum = ref("");
    const selectOpe= ref("");

    function pressed(value){
      if (value=="=" || value=="Enter") calculate();
      else if (value=='c') clear();
      else if (operation.includes(value)) applyOperation(value);
      else if (numbers.includes(value))appendNumbr(value);

    }
    function appendNumbr(value) {
      currentNumber.value=currentNumber.value+value;
    }
    function applyOperation(value) {
      calculate();
      prevNum.value= currentNumber.value;
      currentNumber.value="";
      selectOpe.value = value;


    }
    function calculate() {
      if(selectOpe.value=="*") multiply()
      else if(selectOpe.value=="/") divide()
      else if(selectOpe.value=="-") subtract()
      else if(selectOpe.value=="+") sum()

      prevNum.value="";
      selectOpe.value="";
    }
    function multiply(){
      currentNumber.value = prevNum.value * currentNumber.value;
    }
    function divide(){
      currentNumber.value = prevNum.value / currentNumber.value;
    }
    function subtract(){
      currentNumber.value = prevNum.value - currentNumber.value;
    }
    function sum(){
      currentNumber.value = +prevNum.value + +currentNumber.value;
    }
    function clear() {
      currentNumber.value="";

    }
    function handleOpe(e){
      pressed(e.key)
    }
    onMounted(()=>{
      window.addEventListener("keydown", handleOpe);
    })
    onUnmounted(()=>{
      window.removeEventListener("keydown", handleOpe);
    })


    return {currentNumber, pressed, appendNumbr, applyOperation, calculate, prevNum, selectOpe}

  }

}
</script>

<style>

</style>
