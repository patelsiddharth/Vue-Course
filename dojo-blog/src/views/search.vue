<template>
    <div class="about">
        <input type="text" v-model="search">
        <p>Search term : {{search}}</p>
        <div v-for="name in matchingNames" :key="name">
            <p>{{name}}</p>
        </div>
        <PostList v-if="showPosts" :posts="posts"/>
        <button @click="showPosts = !showPosts">Toggle Posts</button>
    </div>
</template>

<script>
import {computed, ref, watch} from 'vue';
import PostList from '../components/postList';
export default {
    name: 'search',
    components : {PostList},
    setup()
    {
        const showPosts = ref(true);
        const search = ref('');
        const names = ref(['mario', 'luigi','toad','bowser','koopa','peach'])

        const posts = ref([]);
        const error = ref(null);

        const matchingNames = computed(() => {
            return names.value.filter(name => name.includes(search.value))
        })

        watch(search, () => {
            console.log('Search is updated');
        })

        return {
            names,
            search,
            matchingNames,
            posts,
            showPosts
        }
    }
}
</script>

<style>

</style>