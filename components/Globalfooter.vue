<template>
    <div>
        <footer class="w-full pin-b text-center bg-black  border-t border-grey p-4">
           <p class="text-white">&copy; {{ year }} {{ credit }} </p>
           <p class="text-white">Made with <span>&#9825;</span> and <a href="https://vuejs.org/" target="_blank" class="text-red hover:text-white" rel="nofollow noopener">VueJS</a> in Amsterdam</p>
        </footer>
    </div>
</template>

<script>
    export default {
        data(){
            return{
                credit: 'Danger Ro', 
                year: '2019',
                 
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


