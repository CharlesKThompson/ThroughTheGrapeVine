<template>
    <div class="results">
        <div class="col-sm-12">
            <div class="card" style="width: 55rem;">
                <div>
                    <img :src="wine.img" alt="Card image cap" style="width: 15rem;">
                </div>
                <div class="card-body">
                    <h5 class="card-title">{{wine.variety}}</h5>
                    <p class="card-text">{{wine.description}}</p>
                    <button class="btn btn-info" @click="setActiveTypes(wine)">View {{wine.variety}}s</button>
                    <div v-for="type in activeTypes">
                        <div>
                            <h4>{{type.name}}</h4>
                        </div>
                        <div>
                            <div class="btn-group">
                                <button @click="getLists" type="button" class="btn btn-info dropdown-toggle" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                    Add
                                </button>
                                <div class="dropdown-menu">
                                    <div class="dropdown-item" v-for="list in lists">
                                        <p @click="addVineyardWine({listId: list._id, type: type})">{{list.title}}</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
    </div>

</template>

<script>
    import List from './List'
    export default {
        name: 'Results',
        data() {
            return {
            }
        },
        methods: {
            setActiveTypes(wine) {
                this.$store.dispatch('setActiveTypes', wine)
            },
            addVineyardWine(payload) {
                console.log(payload)
                this.$store.dispatch('addVineyardWine', payload)
            },
            getLists(){
                this.$store.dispatch('getLists')
            }

            // clearActiveTypes() {
            //     this.$store.dispatch('setActiveTypes', {})
            // }
        },
        computed: {
            activeTypes() {
                return this.$store.state.activeTypes[this.wine._id] || [];
            },
            lists() {
                return this.$store.state.lists;
            },
        },

        props: ['wine']
    }
</script>

<style>
    .card {
        margin-top: 1rem;
    }
</style>