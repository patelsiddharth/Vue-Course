<template>
<div>
    <div id="nav">
        <router-link to="/">Home</router-link> |
        <router-link to="/about">About</router-link> | 
        <router-link :to="{name : 'Jobs'}">Jobs</router-link>
    </div>

    <button @click="Redirect">Redirect</button>
    <button @click="GoBack">Go Back</button>
    <button @click="GoForward">Go Forward</button>

    <router-view/>
</div>
</template>

<script>
export default {
    methods : {
        Redirect()
        {
            this.$router.push({name : 'Home'})
        },
        GoBack()
        {
            this.$router.go(-1)
        },
        GoForward()
        {
            this.$router.go(1)
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
}

#nav {
  padding: 30px;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: #42b983;
}

button
{
    margin: 0 10px;
    padding: 10px;
    border: none;
    border-radius: 4px;
}
</style>
