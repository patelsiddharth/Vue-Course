<template>
    <div>
        <h1>Ninja Reaction Timer</h1>
        <button @click="StartGame" :disabled="isPlaying">Play</button>
        <Block v-if="isPlaying" :delay="delay" @result="Result"/>
        <Result v-if="showScore" :score="score"/>
    </div>
</template>

<script>
import Block from './components/Block';
import Result from './components/Result';

export default {
    name: 'App',
    data()
    {
        return {
            isPlaying : false,
            delay : null, 
            score : null,
            showScore : false
        }
    },
    components: {
        Block,
        Result
    },
    methods : {
        StartGame()
        {
            this.delay = 1000 + Math.random() * 5000;
            this.isPlaying = true;
            this.showScore = false;
        },
        Result(reactionTime)
        {
            this.score = reactionTime;
            this.isPlaying = false;
            this.showScore = true;
        }
    }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
button{
    cursor: pointer;
    background: #0faf87;
    color: white;
    border: none;
    padding: 8px 16px;
    border-radius: 4px;
    font-size: 16px;
    letter-spacing: 1px;
    margin: 10px;
}
button[disabled]
{
    opacity: 0.2;
    cursor: not-allowed;
}
</style>
