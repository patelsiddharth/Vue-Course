<template>
    <div class="sendForm">
        <form class="sendInput" @submit.enter.prevent="HandleSubmit">
            <textarea class="inputMessage"
                @keypress.enter.prevent="HandleSubmit"
                placeholder="Type a message and hit enter to send..."
                v-model="message">
            </textarea>
            <button class="sendBtn">Send</button>
        </form>
        <div class="error">{{error}}</div>
    </div>
</template>

<script>
import { ref } from 'vue'
import GetUser from '../Composables/GetUser';
import useCollection from '../Composables/useCollection';
import { timeStamp } from '../firebase/Config';

export default {
    setup()
    {
        const {error, AddDocument} = useCollection('messages');
        const {user} = GetUser();
        const message = ref('');

        const HandleSubmit = async () => {
            const newMessage = message.value;
            message.value = '';
            if(newMessage !== '')
            {
                const chat = {
                    name : user.value.displayName,
                    message : newMessage,
                    createdAt : timeStamp(),
                    userId : user.value.uid
                }
                await AddDocument(chat)
            }
        }
        return{
            HandleSubmit, message, error
        }
    }
}
</script>

<style scoped>
textarea
{
    margin-bottom: 0px;
    box-sizing: border-box;
    border: 0;
    font-family: inherit;
    outline: none;
    background: #eee;
}
.sendForm
{
    padding: 20px;
}
.inputMessage
{
    flex-grow: 1;
    line-height: 1.5;
    resize: vertical;
    padding: 10px 20px;
    height: 40px;
    min-height: 40px;
    max-height: 120px;
    border-top-left-radius: 20px;
    border-bottom-left-radius: 20px;
}
.sendInput
{
    display: flex;
    align-items: stretch;
}
.sendBtn
{
    min-height: 40px;
    border-top-left-radius: 0px;
    border-bottom-left-radius: 0px;
    cursor: pointer;
}

</style>