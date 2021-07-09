<template>
    <form @submit.prevent="HandleSubmit">
        <label for="title">Title : </label>
        <input type="text" id="title" v-model="title" required>
        <label for="details" class="details-label">Details : </label>
        <textarea id="details" v-model="details" required></textarea>
        <button>Update Project</button>
    </form>
</template>

<script>
export default {
    props : ['id'],
    data()
    {
        return{
            title : '',
            details : '',
            uri : `http://localhost:3000/projects/${this.id}` 
        }
    },
    mounted()
    {
        fetch(this.uri)
        .then(res => res.json())
        .then(data => {
            this.title = data.title;
            this.details = data.details;
        })
        .catch(e => console.log(e))
    },
    methods : {
        HandleSubmit()
        {
            let project = {
                title : this.title,
                details : this.details
            }
            fetch(this.uri, {
                method : 'PATCH',
                headers : {'Content-Type' : 'application/json'},
                body : JSON.stringify(project)
            }).then(() => {
                this.$router.push('/')
            }).catch(e => console.log(e))
        }
    }
}
</script>

<style>
#details:focus .details-label
{
    color : #00ce89;
}
</style>