<template>
    <div class="lists">
        <div class="card bg-1">
            <div class="rotate">
                <i class="fas fa-map-pin fa-2x"></i>
            </div>
            <div class="card-body">
                <div class="flexor bg-2">
                    <div>
                        <h4 class="card-title">{{list.title}}</h4>
                    </div>
                    <div class="flexy">
                        <button data-toggle="modal" class="btn" data-target="#login-modal">Add Wine</button>
                        <div class="modal" id="login-modal" tabindex="-1" role="dialog">
                            <div class="modal-dialog" role="document">
                                <div class="modal-content">
                                    <div class="modal-header">
                                        <h5 class="modal-title">Upload your favorite wine!</h5>
                                        <button type="button" class="close btn" data-dismiss="modal" aria-label="Close">
                                            <span aria-hidden="true">&times;</span>
                                        </button>
                                    </div>
                                    <div class="modal-body">
                                        <form @submit="addUserWine()" id="uForm">
                                            <select v-model="userWine.variety" name="variety">
                                                <option value="Bold Red">Bold Red</option>
                                                <option value="Medium Red">Medium Red</option>
                                                <option value="Light Red">Light Red</option>
                                                <option value="Rose">Rose</option>
                                                <option value="Rich White">Rich White</option>
                                                <option value="Light White">Light White</option>
                                                <option value="Sparkling">Sparkling</option>
                                                <option value="Sweet White">Sweet White</option>
                                                <option value="Dessert">Dessert</option>
                                            </select>
                                            <input type="text" v-model="userWine.brandName" name="brandName" placeholder="Brand Name">
                                            <input type="text" v-model="userWine.type" name="type" placeholder="Type">
                                            <input type="text" v-model="userWine.img" name="img" placeholder="Image URL">
                                            <input type="text" v-model="userWine.price" name="price" placeholder="Price">
                                            <input type="text" v-model="userWine.description" name="description" placeholder="Description">
                                            <input type="text" v-model="userWine.pairings" name="pairings" placeholder="Pairings">
                                            <input type="text" v-model="userWine.recipes" name="recipes" placeholder="Recipes">
                                            <button type="submit" class="btn btn-submit">Upload</button>
                                        </form>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <button @click="deleteList(list)" class="btn">Delete List</button>
                        <!-- <button @click="getVineyardWines(list)">Expand List</button> -->
                    </div>
                </div>
                <div class="list-group">
                    <div class="list-group-item bg-2" v-for="userwine in userwines">
                        <UserWine :listId="listId" :userwine="userwine"></UserWine>
                    </div>
                </div>
                <div class="list-group">
                    <div class="list-group-item bg-2" v-for="vineyardwine in vineyardwines">
                        <VineyardWine :listId="listId" :vineyardwine="vineyardwine"></VineyardWine>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    // import Comment from './Comment'
    import UserWine from './UserWine'
    import VineyardWine from './VineyardWine'
    export default {
        name: 'Lists',
        data() {
            return {
                // for form data
                userWine: {
                    variety: '',
                    brandName: '',
                    type: '',
                    img: '',
                    price: '',
                    description: '',
                    pairings: '',
                    recipes: '',
                    comments: [{}]
                }
            }
        },

        methods: {
            // clearVineyardWines() {
            //     this.$store.dispatch('clearVineyardWines')
            // },
            getVineyardWines(list) {
                this.$store.dispatch('getVineyardWines', list)
            },
            addUserWine() {
                this.$store.dispatch('addUserWine', { userWine: this.userWine, listId: this.listId })
            },
            deleteList(list) {
                this.$store.dispatch('deleteList', list._id)
            }
        },
        computed: {
            list() {
                return this.$store.state.lists[this.listId]
            },
            vineyardwines() {
                return this.$store.getters.vwInList[this.listId].vineyardwines
            },
            userwines() {
                return this.$store.getters.uwInList[this.listId].userwines
            },

        },
        components: {
            VineyardWine,
            UserWine
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

    .rotate {
        transform: rotate(20deg);
    }

    .flexy {
        margin: 5px;
        display: flex;
        flex-direction: row;
        justify-content: space-around
    }

    button {
        width: 40%;
        background-color: rgba(87, 46, 60, 0.85);
        font-weight: 700;
        color: ivory
    }

</style>