<template>
    <div class="userwine">
        <div class="row flexor">
            <div class="col-sm-12">
                <h4 class="name">{{userwine.brandName}}</h4>
                <p>({{userwine.variety}})</p>
            </div>
            <div class="col-sm-12">
                <p>{{userwine.description}}</p>
            </div>
            <div class="col-sm-12">
                <div class="row">
                    <div class="col-sm-5">
                        <p>Type: {{userwine.type}}</p>
                        <p>Price:{{userwine.price}}</p>
                    </div>
                    <div class="col-sm-5">
                        <p>Pairings: {{userwine.pairings}}</p>
                        <p>Recipes: {{userwine.recipes}}</p>
                    </div>
                </div>
            </div>
            <div v-if="userwine.userId == user._id">
                <button @click="deleteUW(userwine)" class="btn btn-link">Delete wine from List</button>
            </div>
            <div>
                <button @click="commentBool = !commentBool" class="btn btn-link">Add comment to wine</button>
            </div>
        </div>
        <div v-if="commentBool == true">
            <form @submit.prevent="addUserComment">
                <input type="text" v-model="newComment.body" placeholder="add comment">
            </form>
        </div>
        <div v-for="comment in comments">
            <Comment :listId="listId" :comment="comment"></Comment>
        </div>

    </div>
</template>

<script>
    import Comment from './Comment'
    export default {
        name: 'UserWine',
        data() {
            return {
                commentBool: true,
                newComment: {
                    body: ""
                }
            }
        },
        mounted() {
            this.$store.dispatch('authenticate')
            this.$store.dispatch('getUserComments')
        },
        props: ['userwine', 'listId'],
        methods: {
            deleteUW(uw) {
                this.$store.dispatch('deleteUserWine', { listId: this.listId, userwine: uw })
            },
            // getComments() {
            //     this.$store.dispatch('getUserComments', { listId: this.listId, userwine: uw })
            // },
            addUserComment() {
                this.$store.dispatch('addUserComment', {body: this.newComment.body, listId: this.listId, author: this.user.username, wineId: this.userwine._id})
            }
        },
        computed: {
            user() {
                return this.$store.state.user
            },
            comments() {
                return this.$store.state.comments[this.userwine._id]
            }
        },
        components: {
            Comment
        }
    }

</script>

<style scoped>
    .flexor {
        display: flex;
        flex-direction: column;
        align-items: center
    }

    .name {
        font-weight: 700
    }

    .bg-1 {
        background-color: #cfbc8b;
        background-image: url("https://www.transparenttextures.com/patterns/notebook.png");
    }

    button {
        font-weight: 700;
        color: rgba(87, 46, 46, 0.85)
    }

    button:hover {
        color: rgba(170, 43, 43, 0.85)
    }
</style>