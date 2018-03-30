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
                            <button type="button" class="btn btn-info" @click="listForm = !listForm">
                                Add new list
                            </button>
                            <div v-if="listForm == true" class="d-flex justify-content-center">
                                <form @submit.prevent="addList()" class="col-sm-3 form-group">
                                    <input type="text" name="title" placeholder="List Name" v-model="createdList.title" class="form-control">
                                    <button type="submit" class="btn btn-info create" @click="listForm = !listForm">Create List</button>
                                </form>
                            </div>
                        </div>
                    </div>
                    <div class="row d-flex justify-content-center">
                        <div v-for="(list, listId) in lists" class="col-sm-5">
                            <list :listId="listId"></list>
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
            addList() {
                // console.log("THIS.CREATED LIST", this.createdList)
                this.$store.dispatch('addList', { title: this.createdList });
            },
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
        font-weight: 700;
        background-color: #a35f34;
        background-image: url("https://www.transparenttextures.com/patterns/cardboard.png");
        color: ivory
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
</style>