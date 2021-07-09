<template>
    <Navbar />
    <router-view/>
</template>

<script>
import Navbar from './components/Navbar'
export default {
    components : {Navbar}
}
</script>


<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
.nav
{
  margin: 0 auto;
  max-width: 400px;
  display: flex;
  justify-content: space-between;
}
.nav a
{
    text-decoration: none;
    color: black;
    font-weight: bold;
}
</style>
