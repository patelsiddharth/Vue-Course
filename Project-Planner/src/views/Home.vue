<template>
  <div class="home">
      <FilterNav @filterProject="currentFilter = $event" :current="currentFilter"/>
      <div v-if="projects.length">
          <div v-for="project in filteredProjects" :key="project.id">
              <SingleProject :project="project" @delete="HandleDelete" @completed="ToggleComplete"/>
          </div>
      </div>
  </div>
</template>

<script>
import SingleProject from '../components/SingleProject';
import FilterNav from '../components/FilterNav';

export default {
    name: 'Home',
    components: {
        SingleProject,
        FilterNav
    },
    data()
    {
        return{
            projects : [],
            currentFilter : 'all'
        }
    },
    mounted()
    {
        fetch('http://localhost:3000/projects')
        .then(res => res.json())
        .then(data => this.projects = data)
        .catch(e => console.log(e))
    },
    methods : {
        HandleDelete(id)
        {
            this.projects = this.projects.filter(pro => pro.id !== id);
        },
        ToggleComplete(id)
        {
            let currProject = this.projects.find(pro => pro.id === id);
            currProject.completed = !currProject.completed;
        }
    },
    computed : {
        filteredProjects()
        {
            if(this.currentFilter === 'completed')
            {
                return this.projects.filter(pro => pro.completed);
            }
            else if(this.currentFilter === 'ongoing')
            {
                return this.projects.filter(pro => !pro.completed);
            }
            else
            {
                return this.projects;
            }
        }
    }
}
</script>
