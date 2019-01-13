<template>
    <div>
        <footer class="w-full pin-b text-center bg-black px-4 py-8">
            <p class="text-white">&copy; {{ year }} {{ credit }} </p>
            <p class="text-white">Made with <span>&#9825;</span> and <a href="https://vuejs.org/" target="_blank" class="text-red hover:text-white" rel="nofollow noopener">VueJS</a> in Amsterdam</p>
            <p class="text-white"><a href="https://liverpoolfc.com" target="_blank" rel="nofollow noopener" class="text-red no-underline">YNWA</a></p>
        </footer>
    </div>
</template>

<script>
    export default {
        data(){
            return{
                credit: 'Danger Ro', 
                year: new Date().getFullYear()
                 
            }
        }
    }
</script>

<style scoped>
span{
    color: red;
    fill: red;
}
</style>


