<template>
    <div class="postlist">
        <div v-for="post in posts" :key="post.id">
            <SinglePost :post="post"/>
        </div>
    </div>
</template>

<script>
import SinglePost from './SinglePost';
export default {
    props : ['posts'],
    components : {SinglePost},
    setup(props)
    {
        
    }
}
</script>

<style>
.postlist
{
    text-align: left;
}
</style>