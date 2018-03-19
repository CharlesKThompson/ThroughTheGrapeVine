<template>
    <div class="lists">
        <div class="card" style="width: 18rem;">
            <div class="card-body">
                <div class="flexor">
                    <div>
                        <h4 class="card-title">{{list.title}}</h4>
                    </div>
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
                    <!-- <div class="list-group-item d-flex justify-content-between" v-for="task in tasks">
                        <task :task="task"></task>
                    </div> -->
                </div>
            </div>
            <div class="flex-center">
                <div class="dropdown">
                    <i data-toggle="dropdown" title="additional options" class="fas fa-ellipsis-h pointer"></i>
                    <div class="dropdown-menu">
                        <div class="dropdown-item">
                            <form @submit.prevent="editList">
                                <input type="text" placeholder="rename list" name="name" value="">
                                <input type="text" :placeholder="list._id" name="id" :value="list._id" hidden>
                                <button type="submit" class="brtn btn-submit" hidden></button>
                            </form>
                        </div>
                        <div class="dropdown-item">
                            <!-- <button class="btn btn-outline-danger btn-block" @click="deleteList(list)">delete</button> -->
                            
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
    // import Comment from './Comment'
    export default {
        name: 'Lists',
        data() {
            return {

            }
        },
        // mounted() {
        //     this.$store.dispatch('getComments', listId: this.list._id)
        // }
        // components: {
        //     Comment
        // },
        props: ['list']
    }
</script>
<style>
</style>