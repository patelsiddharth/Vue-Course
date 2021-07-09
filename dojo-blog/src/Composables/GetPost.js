import { ref } from 'vue';
import { firestore } from '../firebase/config';

const GetPost = (id) => {
    const post = ref(null);
    const error = ref(null);
    const loadPost =  async () => {
        try
        {
            // Retrieving single post from firestore db
            const res = await firestore.collection('posts').doc(id).get();

            if(!res.exists)
            {
                throw Error('Invalid Post ID. Please try again...');
            }
            // console.log(res.data());
            post.value = {
                ...res.data(),
                id : res.id
            }

            // Retrieving single post from json server
            // const data =  await fetch(`http://localhost:3000/posts/${id}`)
            // if(!data.ok)
            // {
            //     throw Error('Invalid Post ID. Please try again...');
            // }
            // post.value = await data.json();
        }
        catch(e)
        {
            console.log(e);
            error.value = e.message;
        }
    }
    return {post, error, loadPost}
}

export default GetPost;