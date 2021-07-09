<template>
    <div>
        <SignUpForm />
    </div>
</template>

<script>
import SignUpForm from './components/signUpForm';

export default {
    name: 'App',
    components: {
        SignUpForm
    }
}
</script>

<style>
body, #app
{
    font-family:Arial, Helvetica, sans-serif;
    margin: 0;
    background: #eee;
}
</style>
