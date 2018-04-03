<template>
    <div class="userwine">
        <div class="row flexor">
            <div class="col-sm-12">
                <h4 class="name">{{userwine.brandName}}</h4>
                <p>({{userwine.variety}})</p>
            </div>
            <div v-if="show == false" @click="show = true" class="pointer">
                <i class="fas fa-chevron-circle-down"></i>
            </div>
            <div v-if="show == true">
                <div @click="show = false" class="pointer">
                    <i class="fas fa-chevron-circle-up"></i>
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
            </div>
        </div>
        <!-- <div v-if="commentBool == true">
            <form @submit.prevent="addUserComment">
                <input type="text" v-model="newComment.body" placeholder="add comment">
            </form>
        </div> -->
        <!-- <div v-for="comment in comments">
            <Comment :listId="listId" :comment="comment"></Comment>
        </div> -->

    </div>
</template>

<script>
    export default {
        name: 'UserWine',
        data() {
            return {
                show: false

            }
        },
        mounted() {
            this.$store.dispatch('authenticate')
        },
        props: ['userwine', 'listId'],
        methods: {
            deleteUW(uw) {
                this.$store.dispatch('deleteUserWine', { listId: this.listId, userwine: uw })
            },
            // getComments() {
            //     this.$store.dispatch('getUserComments', { listId: this.listId, userwine: uw })
            // },
            // addUserComment() {
            //     this.$store.dispatch('addUserComment', {body: this.newComment.body, listId: this.listId, author: this.user.username, wineId: this.userwine._id})
            // }
        },
        computed: {
            user() {
                return this.$store.state.user
            },
            // comments() {
            //     return this.$store.state.comments[this.userwine._id]
            // }
        },
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

    .pointer {
        cursor: pointer;
        opacity: .8;
        transition: linear .3s all
    }

    .pointer:hover {
        opacity: 1;
        transition: linear .3s all
    }
</style>