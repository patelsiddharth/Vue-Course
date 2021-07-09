<template>
    <div class="home">
        <div v-if="error">{{error}}</div>
        <div v-if="posts.length" class="layout">
            <PostList :posts="postsWithTags"/>
            <TagCloud :posts="posts"/>
        </div>
        <div v-else>
            <Spinner/>
        </div>
    </div>
</template>

<script>
import GetPosts from '../Composables/GetPosts';
import PostList from '../components/postList';
import Spinner from '../components/Spinner';

import TagCloud from '../components/TagCloud';
import {useRoute} from 'vue-router';
import { computed } from 'vue';

export default {
    components : { Spinner, PostList, TagCloud},
    setup()
    {
        const route = useRoute();

        const {posts, error, load} = GetPosts();
        load();

        const postsWithTags = computed(() => {
            return posts.value.filter(post => post.tags.includes(route.params.tag));
        })

        return{
            posts, error, postsWithTags
        }
    }
}
</script>

<style>

</style>