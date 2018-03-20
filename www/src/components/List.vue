<template>
    <div class="lists">
        <div class="card bg-1">
            <div class="card-body">
                <div class="flexor bg-2">
                    <div>
                        <h4 class="card-title">{{list.title}}</h4>
                    </div>
                    <button>Delete list</button>
                    <div class="aligner">
                        <div class="dropleft">
                            <i data-toggle="dropdown" class="fas fa-plus pointer"></i>
                            <div class="dropdown-menu">
                                <!-- <form @submit.prevent="addTask()">
                                    <input type="text" name="name" placeholder="add task" v-model="createdTask.body">
                                    <button type="submit" class="btn btn-submit" hidden>Create Task</button>
                                </form> -->
                            </div>
                        </div>
                    </div>
                </div>
                <div class="list-group">
                    <div class="list-group-item bg-2" v-for="vineyardwine in vineyardwines">
                        <VineyardWine :vineyardwine="vineyardwine"></VineyardWine>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    // import Comment from './Comment'
    import VineyardWine from './VineyardWine'
    export default {
        name: 'Lists',
        data() {
            return {

            }
        },
        mounted() {
            this.$store.dispatch('getVineyardWines', { listId: this.list._id })
        },
        computed: {
            vineyardwines() {
                return this.$store.state.vineyardwines
            }
        },
        components: {
            VineyardWine
        },
        props: ['list']
    }
</script>

<style scoped>
    .flexor {
        display: flex;
        flex-direction: column
    }

    .lists {
        margin-top: 10px;
        margin-bottom: 10px
    }

    h4 {
        font-weight: 700
    }

    .bg-1 {
        background-color: #eadac0;
        background-image: url("https://www.transparenttextures.com/patterns/natural-paper.png");
    }

    .bg-2 {
        background-color: rgba(255, 255, 255, 0);
        margin-bottom: 10px;
        border: solid 3px rgba(87, 46, 60, 0.726);
        border-radius: 10px
    }
</style>