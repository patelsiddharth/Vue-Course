<template>
    <div v-if="error">{{error}}</div>
    <div v-if="post" class="post">
        <h3>{{post.title}}</h3>
        <p class="pre">{{post.body}}</p>
        <button @click="HandleDelete" class="delete">Delete Post</button>
    </div>
    <div v-else>
        <Spinner />
    </div>
</template>

<script>
import GetPost from '../Composables/GetPost';
import Spinner from '../components/Spinner';
import { useRoute, useRouter } from 'vue-router';
import { firestore } from '../firebase/config';

export default {
    props : ['id'],
    components : {Spinner},
    setup(props)
    {
        const route = useRoute();
        const router = useRouter();
        
        //console.log(route.params.id); //retrieving id from route

        const {post, error, loadPost} = GetPost(props.id);
        loadPost();

        const HandleDelete = async () => {
            await firestore.collection('posts').doc(props.id).delete();
            
            router.push({name : 'Home'});
        }
        return{
            post, error, HandleDelete
        }
    }
}
</script>

<style>
.post
{
    max-width: 1200px;
    margin: 0 auto;
    text-align: left;
}
.post p
{
    color: #444;
    line-height: 1.5em;
    margin-top: 40px;
}
.pre
{
    white-space: pre-wrap;
}
</style>