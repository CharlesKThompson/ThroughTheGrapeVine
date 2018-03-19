<template>
    <div class="lists">
        <div class="card" style="width: 40rem;">
            <div class="card-body">
                <div class="flexor">
                    <div>
                        <h4 class="card-title">{{list.title}}</h4>
                    </div>
                    <div class="aligner">
                        <div class="dropleft">
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
                        <div class="list-group-item d-flex justify-content-between" v-for="vineyardwine in vineyardwines">
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
                this.$store.dispatch('getVineyardWines', {listId: this.list._id}) 
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
<style>
</style>