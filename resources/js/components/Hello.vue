<template>
    <div class="cruel">
        Cruel
        <span>{{ who }}</span>
    </div>
</template>

<script>
module.exports = { // This is important, I got errors when using `export default`
    data () {
        return {
            who: "World. Lol!"
        }
    },
    mounted () {
        setTimeout(() => {
            console.log('We can use ES6 too!')
        }, 1000)
    }
}
</script>

<style scoped>
.cruel {
    color: green;
}
</style>