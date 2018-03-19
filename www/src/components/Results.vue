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
                    <button class="btn btn-info" @click="setActiveTypes(wine)">View {{wine.variety}}s</button>
                    <div v-for="type in activeTypes">
                        <h4>{{type.name}}</h4>
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
        margin-top: 1rem;
        width: 50%
    }
</style>