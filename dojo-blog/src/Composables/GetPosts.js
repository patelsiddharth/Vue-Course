import { ref } from 'vue';
import { firestore, timeStamp } from '../firebase/config';

const GetPosts = () => {
    const posts = ref([]);
    const error = ref(null);

    const load = async () => {
        try
        {
            // Retrieving data from firestore
            const res = await firestore.collection('posts').orderBy('createdAt', 'desc').get();
            posts.value = res.docs.map(doc => {
                return {
                    ...doc.data(),
                    id : doc.id
                }
            })

            // Retrieving data from json server
            // const data = await fetch('http://localhost:3000/posts');
            // if(!data.ok)
            // {
            //     throw Error('No data available');
            // }
            // posts.value = await data.json();
        }
        catch(err)
        {
            error.value = err.message;
            console.log(error.value);
        }
    }
    return { posts, error, load }
}

export default GetPosts;