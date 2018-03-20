<template>
    <div class="corkboard">
        <navbar></navbar>
        <div class="container-fluid">
            <div class="row">
                <div class="margins col-sm-12">
                    <div class="flexor">
                        <div class="boards-title">
                            <h2>Corkboard</h2>
                        </div>
                        <div class="aligner">
                            <div class="dropleft">
                                <button type="button" class="btn dropdown-toggle" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                    <i class="fas fa-plus"></i>
                                </button>
                                <div class="dropdown-menu">
                                    <form @submit.prevent="addList()">
                                        <input type="text" name="title" placeholder="List Title" v-model="createdList.title">
                                        <button type="submit" class="btn btn-submit" hidden>Create List</button>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="row">
                    <div v-for="list in lists" class="col-sm-4">
                        <list :list="list"></list>
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
                createdList: {}
            }
        },
        components: {
            Navbar,
            List
        },
        mounted() {
            this.$store.dispatch('authenticate');
            this.$store.dispatch('getLists');
        },
        methods: {
            addList() {
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
    .dropdown-menu {
        margin-top: 3px;
        padding: 0;
    }

    .corkboard {
        background-image: url("../assets/cork-board.jpg");
        background-repeat: repeat;
        min-height: 100vh;
        margin: 0 0rem !important;
    }
</style>