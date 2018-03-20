<template>
    <div class="lists">
        <div class="card bg-1">
            <div class="card-body">
                <div class="flexor bg-2">
                    <div>
                        <h4 class="card-title">{{list.title}}</h4>
                    </div>
                    <button>Delete List</button>
                    <button @click="getVineyardWines(list)">Expand List</button>
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

        methods: {
            clearVineyardWines(){
                this.$store.dispatch('clearVineyardWines')                
            },
            getVineyardWines(list){
                // this.$store.dispatch('clearVineyardWines')
                this.$store.dispatch('getVineyardWines', list)
            }
        },
        computed: {
            list(){
                return this.$store.state.lists[this.listId]
            },
            vineyardwines() {
                return this.$store.getters.vwInList[this.listId].vineyardwines
            } 
        },
        components: {
            VineyardWine
        },
        props: ['listId']
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