<template>
    <div class="d-flex justify-content-start align-items-start">
        <h6><b>{{comment.author}}:&nbsp;</b></h6>
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