<template>
    <div>
        <h6>{{comment.author}}:</h6>
        <p>{{comment.body}}</p>
    </div>
</template>

<script>
    export default {
        name: 'Comment',
        data() {
            return {

            }
        },
        props: ['comment']
    }
</script>

<style scoped>
</style>