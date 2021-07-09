<template>
  <div class="hello">
      <h2>REF</h2>
      <p ref="para">My name is {{name}} and i am {{age}} year old</p>
      <button @click="handleClick">Click ME</button>
      <button @click="age++">Increment Age</button>
      <input type="text" v-model="name">
      <hr>
      <h2>REACTIVE</h2>
       <p ref="para">My name is {{person.name}} and i am {{person.age}} year old</p>
      <button @click="clickHandler">Click Me to update</button>
      <hr>
      
  </div>
</template>

<script>
import {onMounted, reactive, ref} from 'vue';
export default {
    
    name: 'home',
    setup()
    {
        const name = ref('mario')
        const age = ref(30);

        const para = ref(null);

        const person = reactive({name : "Luigi", age : 42})
        
        const clickHandler = () => {
            console.log('You clicked');
            person.name = 'Siddharth';
            person.age = 25
        }

        const handleClick = () => {
            console.log('You clicked');
            console.log(para);
            console.log(para.value);
            name.value = 'Siddharth';
            age.value = 25
        }

        const names = ref(['mario', 'luigi','toad','bowser','koopa','peach'])

        onMounted(() => console.log('Component Mounted'))
        
        return {
            name,
            age,
            handleClick,
            clickHandler,
            para,
            person,
            names
        }
    }
}
</script>

<style scoped>
</style>
