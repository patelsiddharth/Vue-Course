<template>
    <div class="chat-window">
        <div v-if="error">{{error}}</div>
        <div v-if="formattedDoc" class="messages" ref="messages">
            <div 
                v-for="doc in formattedDoc" 
                :key="doc.id" class="single" 
                :class="{current : doc.userId === userId}"
            >
                <div class="info">
                    <span class="name">{{doc.name}}</span>
                    <span class="message">{{doc.message}}</span>
                </div>
                <div class="time">
                    <i class="material-icons time_icon">schedule</i>
                    <span class="createdAt">{{doc.createdAt}} ago</span>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import GetCollection from '../Composables/GetCollection';
import { formatDistanceToNow } from 'date-fns';
import { computed, onUpdated, ref } from 'vue';
import GetUser from '../Composables/GetUser';

export default {
    setup()
    {
        const userId = ref('');
        const {user} = GetUser();
        userId.value = user.value.uid;
        
        const {error, documents} = GetCollection('messages');
        const formattedDoc = computed(() => {
            if(documents.value)
            {
                return documents.value.map(doc => {
                    let time = formatDistanceToNow(doc.createdAt.toDate())
                    return {
                        ...doc,
                        createdAt : time
                    }
                })
            }
        })

        const messages = ref(null )

        onUpdated(() => {
            messages.value.scrollTop = messages.value.scrollHeight;
        })

        return{error, formattedDoc, messages, userId}
    }
}
</script>

<style>
.chat-window
{
    background: #fafafa;
    padding: 20px;
}
.single
{
    margin: 15px;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
}
.current
{
    align-items: flex-end;
}
.info
{
    display: flex;
    flex-direction: column;
    gap: 10px;
    background: #d8dbdb;
    border-radius: 20px;
    padding: 14px;
    border-bottom-left-radius: 0;
    max-width: 400px;
}

.current .info
{
    background: #5ae4ca;
    border-radius: 20px;
    border-bottom-right-radius: 0;
}
.createdAt
{
    display: block;
}
.name
{
    font-size: 12px;
}
.messages
{
    max-height: 400px;
    overflow: auto;
}
.time
{
    color: #999;
    display: flex;
    flex-direction: row;
    gap: 5px;
    align-items: stretch;
    font-size: 12px;
    padding: 10px 0;
}
.time_icon
{
    font-size: 15px;
}

::-webkit-scrollbar {
  width: 8px;
}

/* Track */
::-webkit-scrollbar-track {
  background: transparent;
}

/* Handle */
::-webkit-scrollbar-thumb {
  background: #888;
  border-radius: 10px;
}

/* Handle on hover */
::-webkit-scrollbar-thumb:hover {
  background: #555;
}
</style>