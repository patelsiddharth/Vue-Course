<template>
    <div class="create">
        <form @submit.prevent="HandleSubmit">
            <label for="title">Title : </label>
            <input type="text" id="title" v-model="title">
            <label for="content">Content : </label>
            <textarea id="content" v-model="content"></textarea>
            <label for="tags">Tags</label>
            <input type="text" id="tags" v-model="tag" @keydown.enter.prevent="AddTag">
            <div class="pill" v-for="tag in tags" :key="tag">
                #{{tag}}
            </div>
            <button>Add Post</button>
        </form>
    </div>
</template>

<script>
import {ref} from 'vue';
import { useRouter } from 'vue-router';
import { firestore, timeStamp } from '../firebase/config';

export default {
    setup()
    {
        const title = ref('');
        const content = ref('');
        const tag = ref('');
        const tags = ref([]);

        const router = useRouter();

        const AddTag = () => {
            tag.value = tag.value.trim();
            if(!tags.value.includes(tag.value) && tag.value.length > 0)
            {
                tags.value.push(tag.value.replace(/\s/,''));
            }
            tag.value = '';
        }

        const HandleSubmit = async () => {
            const post = {
                title: title.value,
                body: content.value,
                tags: tags.value,
                createdAt : timeStamp()
            }
            console.log(post);

            // Adding collection to firestore
            const res = await firestore.collection('posts').add(post);

            // Adding data using json server
            // await fetch('http://localhost:3000/posts', {
            //     method : 'POST',
            //     headers : {'Content-Type' : 'application/json'},
            //     body : JSON.stringify(post) 
            // });

            router.push({name : 'Home'});
        }

        return {
            title, content, tag, tags, AddTag, HandleSubmit
        }
    }
}
</script>

<style>
form {
    max-width: 480px;
    margin: 0 auto;
    text-align: left;
  }
  input, textarea {
    display: block;
    margin: 10px 0;
    width: 100%;
    box-sizing: border-box;
    padding: 10px;
    border: 1px solid #eee;
  }
  textarea {
    height: 160px;
  }
  label {
    display: inline-block;
    margin-top: 30px;
    position: relative;
    font-size: 20px;
    color: white;
    margin-bottom: 10px;
  }
  label::before {
    content: "";
    display: block;
    width: 100%;
    height: 100%;
    background: #ff8800;
    position: absolute;
    z-index: -1;
    padding-right: 40px;
    left: -30px;
    transform: rotateZ(-1.5deg);
  }
  button {
    display: block;
    margin-top: 30px;
    background: #ff8800;
    color: white;
    border: none;
    padding: 8px 16px;
    font-size: 18px
  }
  .pill {
    display: inline-block;
    margin: 10px 10px 0 0;
    color: #444;
    background: #ddd;
    padding: 8px;
    border-radius: 20px;
    font-size: 14px;
  }
</style>