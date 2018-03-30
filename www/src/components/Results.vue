<template>
    <div class="results">
        <div class="col-sm-12 results">
            <div class="card">
                <div class="card-body">
                    <div>
                        <img :src="wine.img" class="winePic">
                    </div>
                    <h5 class="card-title">{{wine.variety}}</h5>
                    <p class="card-text">{{wine.description}}</p>
                    <!-- <button class="btn btn-info m-3" @click="setActiveTypes(wine)">View {{wine.variety}}s</button> -->
                    <!-- <button class="btn btn-info m-3">View {{wine.variety}}s</button> -->
                    <div>
                        <button class="btn btn-info m-3" @click="setActiveTypes(wine)">View {{wine.variety}}s</button>
                    </div>
                    <div>
                        <button v-if="activeTypes.length > 1" @click="clearActiveTypes()" class="btn btn-light">Close</button>
                    </div>
                    <div class="row d-flex justify-content-center">
                        <!-- This is what we want: -->
                        <div v-for="type in vineyardWines" v-if="wine.variety == type.variety" class="col-sm-5 bg-1">
                            <!-- <div v-for="type in activeTypes" class="col-sm-5 bg-1"> -->
                            <div class="flex1">
                                <div>
                                    <h4 class="name">{{type.name}}</h4>
                                </div>
                                <div>
                                    <div class="btn-group">
                                        <button @click="getLists" type="button" class="btn btn-info dropdown-toggle" data-toggle="dropdown" aria-haspopup="true"
                                            aria-expanded="false">
                                            Add
                                        </button>
                                        <div class="dropdown-menu">
                                            <!-- <div class="dropdown-item" v-for="list in lists">
                                                <p @click="addVineyardWine({listId: list._id, wine: type})">{{list.title}}</p>
                                            </div> -->
                                            <a class="dropdown-item" @click="addVineyardWine({listId: list._id, wine: type})" v-for="list in lists">{{list.title}}</a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div>
                                <h6>{{type.description}}</h6>
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
                this.$store.dispatch('addVineyardWine', payload)
            },
            getLists() {
                this.$store.dispatch('getLists')
            },
            clearActiveTypes() {
                this.$store.dispatch('clearActiveTypes', {})
            }
        },
        computed: {
            activeTypes() {
                return this.$store.state.activeTypes;
                // return this.$store.state.activeTypes[this.wine._id] || [];
            },
            lists() {
                return this.$store.state.lists;
            },
            vineyardWines() {
                return this.$store.state.vineyardwines;
            }
        },
        props: ['wine']
    }
</script>

<style scoped>
    .results {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center
    }

    .winePic {
        margin: 5px;
        width: 30%;
        border: solid 5px rgba(87, 46, 60, 0.85);
    }

    .card {
        margin-top: .5rem;
        margin-bottom: .5rem;
        width: 50%
    }

    .bg-1 {
        border: 2px solid black;
        border-radius: 20px;
        margin: 5px
    }

    .btn-group {
        margin-top: 5px;
        margin-bottom: 5px;
    }

    .flex1 {
        display: flex;
        flex-direction: row;
        justify-content: center;
        align-items: flex-end;
    }

    .name {
        font-weight: 700;
    }

    .dropdown-item {
        cursor: pointer;
    }
</style>