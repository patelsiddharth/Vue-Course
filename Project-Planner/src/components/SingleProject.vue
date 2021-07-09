<template>
    <div class="project" :class="{complete : project.completed}">
        <div class="actions">
            <h3 @click="ShowDetails">{{project.title}}</h3>
            <div class="icons">
                <router-link :to="{ name: 'EditProject', params : {id : project.id}}">
                    <span class="material-icons">edit</span>
                </router-link>
                <span class="material-icons" @click="DeleteProject">delete</span>
                <span class="material-icons tick" @click="ToggleComplete">done</span>
            </div>
        </div>
        <div v-if="showDetails" class="details">
            <p>{{project.details}}</p>
        </div>
    </div>
</template>

<script>
export default {
    props: ['project'],
    data()
    {
        return{
            showDetails : false,
            uri : 'http://localhost:3000/projects/' + this.project.id
        }
    },
    methods : {
        ShowDetails()
        {
            this.showDetails = !this.showDetails;
        },
        DeleteProject()
        {
            fetch(this.uri, {method : 'DELETE'})
            .then(() => this.$emit('delete', this.project.id))
            .catch(e => console.log(e))
        },
        ToggleComplete()
        {
            fetch(this.uri, {
                method : 'PATCH',
                headers : {'Content-Type' : 'application/json'},
                body : JSON.stringify({completed : !this.project.completed})
            })
            .then(() => this.$emit('completed', this.project.id))
            .catch(e => console.log(e))
        }
    }
}
</script>

<style>

.project
{
    margin: 20px auto;
    background: white;
    padding: 10px 20px;
    border-radius: 4px;
    box-shadow: 1px 2px 3px rgba(0,0,0,0.05);
    border-left: 4px solid #e90074;
}
.project.complete
{
    border-left: 4px solid #00ce89;
}
.project.complete .tick
{
    color: #00ce89;
}
h3
{
    cursor: pointer;
    user-select: none;
}
.actions
{
    display: flex;
    align-items: center;
    justify-content: space-between;
}
.material-icons
{
    font-size: 24px;
    margin-left: 10px;
    color: #bbb;
    cursor: pointer;
    user-select: none;
}
.material-icons:hover
{
    color: #777;
}
</style>