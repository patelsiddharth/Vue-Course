<template>
    <div v-if="showblock" class="block" @click="StopTimer">
        CLICK ME
    </div>
</template>

<script>
export default {
    props : ['delay'],
    data()
    {
        return {
            showblock : false,
            timer : null,
            reactionTime : 0
        }
    },
    mounted()
    {
        setTimeout(() => {
            this.showblock = true;
            console.log(this.delay);
            this.StartTimer();
        }, this.delay)
    },
    methods : {
        StartTimer()
        {
            this.timer = setInterval(() => {
                this.reactionTime += 10
            }, 10)
        },
        StopTimer()
        {
            clearInterval(this.timer);
            console.log(this.reactionTime);
            this.$emit('result', this.reactionTime);
        }
    }
}
</script>

<style>
    .block
    {
        width: 400px;
        border-radius: 20px;
        background: #0faf87;
        color: white;
        text-align: center;
        padding: 100px 0;
        margin: 40px auto;
    }
</style>