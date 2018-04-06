<template>
    <div class="corkboard">
        <navbar></navbar>
        <div class="container-fluid">
            <div class="row">
                <div class="margins col-sm-12">
                    <div class="flexor">
                        <div class="boards-title">
                            <h2 class="board">Corkboard</h2>
                        </div>
                        <div class="aligner">
                            <div class="d-flex justify-content-center">
                                <button type="button" class="btn new" @click="listForm = !listForm">
                                    Add new list
                                </button>
                                <div v-if="friend == false" @click="getFriendLists(user.following), friend = !friend">
                                    <button type="button" class="btn new">
                                        View Friend Lists
                                    </button>
                                </div>
                                <div v-if="friend == true" @click="getLists(), friend = !friend">
                                    <button type="button" class="btn new">
                                        View My Lists
                                    </button>
                                </div>
                            </div>
                            <div v-if="listForm == true" class="d-flex justify-content-center">
                                <form @submit.prevent="addList()" class="col-sm-3 form-group">
                                    <input type="text" name="title" placeholder="List Name" v-model="createdList.title" class="form-control">
                                    <button type="submit" class="btn create add" @click="listForm = !listForm">Create List</button>
                                </form>
                            </div>
                        </div>
                    </div>
                    <div class="row d-flex justify-content-center">
                        <div v-for="(list, listId) in lists" class="col-sm-5">
                            <list :listId="listId" :user="user"></list>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
    </div>
</template>

<script>
    import Navbar from './Navbar'
    import List from './List'
    export default {
        name: 'Corkboard',
        data() {
            return {
                listForm: false,
                friend: false,
                createdList: {}
            }
        },
        components: {
            Navbar,
            List
        },
        mounted() {
            this.$store.dispatch('authenticate');
            // this.$store.dispatch('getAllVineyardWines');
            this.$store.dispatch('getLists');
        },
        methods: {
            getLists() {
                this.$store.dispatch('getLists')
            },
            addList() {
                // console.log("THIS.CREATED LIST", this.createdList)
                this.$store.dispatch('addList', { title: this.createdList });
            },
            getFriendLists(payload) {
                this.$store.dispatch('getFriendLists', payload)
            }
        },
        computed: {
            lists() {
                return this.$store.state.lists;
            },
            user() {
                return this.$store.state.user;
            }
        }

    }
</script>

<style scoped>
    .board {
        /* font-weight: 700; */
        font-size: 4rem;
        background-color: #a35f34;
        font-family: 'Fredericka the Great', cursive;
        background-image: url("https://www.transparenttextures.com/patterns/cardboard.png");
        color: ivory;
        border-top: 3px solid rgba(87, 46, 60, .95);
        border-bottom: 3px solid rgba(87, 46, 60, .95); 
    }

    .dropdown-menu {
        margin-top: 3px;
        padding: 0;
    }

    .create {
        width: 100%
    }

    .corkboard {
        background-image: url("../assets/cork-board.jpg");
        background-repeat: repeat;
        min-height: 100vh;
        margin: 0 0rem !important;
    }

    .form-group {
        margin: 5px
    }

    .new {
        background-color: rgba(87, 46, 60, .95);
        color: ivory;
        font-weight: 700;
        margin: 10px
    }

    .add {
        background-color: rgba(87, 46, 60, .95);
        color: ivory;
        font-weight: 700;
        margin-top: 10px;
    }

</style>