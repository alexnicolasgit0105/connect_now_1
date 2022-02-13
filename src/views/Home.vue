<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png">
    <div class="counter">
      <!-- {{counter}} -->
      {{$store.state.counter}}
    </div>
    <div class="buttons">
      <button @click="$store.dispatch('increaseCounter')">+</button>
      <button @click="$store.commit('decreaseCounter')">-</button>
    </div>  
  </div>
</template>

<script>
// @ is an alias to /src
//import HelloWorld from '@/components/HelloWorld.vue'

export default {
  name: 'Home',
  // data() {
  //   return {
  //     counter: 0
  //   }
  // },
  // methods: {
  //   increaseCounter() {
  //     this.counter++
  //   },
  //   decreaseCounter() {
  //     this.counter--
  //   }
  // }
}
</script>
<style>
  div{
    margin-bottom: 10px;
  }
  .counter {
    font-size: 80px;  
  }
  .buttons button{
    font-size: 40px;
    width: 100px;
    margin: 0 10px;
  }

</style>