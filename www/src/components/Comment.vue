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
        mounted(){
            this.$store.dispatch('authenticate')
        },
        props: ['comment', 'listId'],
        computed: {
            user(){
                return this.$store.state.user
            }
        }

    }
</script>

<style scoped>
</style>