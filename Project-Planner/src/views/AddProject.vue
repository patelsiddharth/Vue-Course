<template>
    <form @submit.prevent="HandleSubmit">
        <label for="title">Title : </label>
        <input type="text" id="title" v-model="title" required>
        <label for="details">Details : </label>
        <textarea id="details" v-model="details" required></textarea>
        <button>Add Project</button>
    </form>
</template>

<script>
export default {
    data()
    {
        return{
            title : '',
            details : ''
        }
    },
    methods : {
        HandleSubmit()
        {
            let project = {
                title : this.title,
                details : this.details,
                completed : false
            }
            fetch('http://localhost:3000/projects', {
                method : 'POST',
                headers : {'Content-Type' : 'application/json'},
                body : JSON.stringify(project)
            })
            .then(() => {
                this.$router.push('/')
            })
            .catch(e => console.log(e))
        }
    }
}
</script>

<style>
form
{
    background: white;
    padding: 20px;
    border-radius: 10px;
}
label
{
    display: block;
    color: #bbb;
    text-transform: uppercase;
    font-size: 14px;
    font-weight: bold;
    letter-spacing: 1px;
    margin: 20px 0 10px 0;
}
input
{
    padding: 10px;
    border: 0px;
    border-bottom: 1px solid #ddd;
    width: 100%;
    box-sizing: border-box;
}
textarea
{
    border: 1px solid #ddd;
    padding: 10px;
    width: 100%;
    max-width: 100%;
    min-width: 100%;
    height: 100px;
    box-sizing: border-box;
}
form button
{
    display: block;
    margin: 20px auto 0;
    background: #00ce89;
    color: white;
    padding: 10px;
    border: 0;
    border-radius: 6px;
    font-size: 16px;
}
</style>