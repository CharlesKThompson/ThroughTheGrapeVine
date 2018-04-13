<template>
    <div class="lists">
        <div class="card bg-1">
            <div class="rotate">
                <i class="fas fa-map-pin fa-2x"></i>
            </div>
            <div class="card-body">
                <div class="flexor bg-2">
                    <div class="flexy2">
                        <h3 class="card-title">{{list.title}}</h3>
                    </div>
                    <div class="flexy" v-if="list.userId == user._id">
                        <button data-toggle="modal" class="btn" :data-target="'#'+listId">Add Wine</button>
                        <div class="modal" :id="listId" tabindex="-1" role="dialog">
                            <div class="modal-dialog" role="document">
                                <div class="modal-content">
                                    <div class="modal-header">
                                        <h5 class="modal-title">Upload your favorite wine!</h5>
                                        <button type="button" class="close btn" data-dismiss="modal" aria-label="Close">
                                            <span aria-hidden="true">&times;</span>
                                        </button>
                                    </div>
                                    <div class="modal-body">
                                        <form @submit="addUserWine()" id="uForm" class="form-group flexy3">
                                            <div class="row d-flex justify-content-center">
                                                <input type="text" v-model="userWine.brandName" name="brandName" placeholder="Brand Name*" class="form-control col-sm-6 brand"
                                                    required>
                                                <select v-model="userWine.variety" class="form-control col-sm-6" required>
                                                    <option value="" selected disabled hidden class="text-muted">Variety*</option>
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
                                            </div>
                                            <input type="text" v-model="userWine.type" name="type" placeholder="Type*" class="form-control col-sm-10" required>
                                            <textarea type="text" v-model="userWine.description" name="description" placeholder="Description*" class="form-control col-sm-10"
                                                required></textarea>
                                            <input type="text" v-model="userWine.img" name="img" placeholder="Image URL" class="form-control col-sm-10">
                                            <input type="text" v-model="userWine.price" name="price" placeholder="Price" class="form-control col-sm-10">
                                            <input type="text" v-model="userWine.pairings" name="pairings" placeholder="Pairings" class="form-control col-sm-10">
                                            <textarea type="text" v-model="userWine.recipes" name="recipes" placeholder="Recipes" class="form-control col-sm-10"></textarea>
                                            <small class="text-muted">* required</small>
                                            <button type="submit" class="btn btn-submit upload">Upload</button>
                                        </form>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <button @click="deleteList(list)" class="btn">Delete List</button>
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
                <div v-if="commentBool == true">
                    <form @submit="addComment(user)">
                        <input type="text" v-model="newComment.body" placeholder="Add Comment" class="form-control">
                    </form>
                </div>
                <div v-for="comment in comments">
                    <Comment :listId="listId" :comment="comment"></Comment>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    import UserWine from './UserWine'
    import VineyardWine from './VineyardWine'
    import Comment from './Comment'
    export default {
        name: 'Lists',
        data() {
            return {
                commentBool: true,
                // for form data
                newComment: {
                    body: ''
                },
                userWine: {
                    variety: '',
                    brandName: '',
                    type: '',
                    img: '',
                    price: '',
                    description: '',
                    pairings: '',
                    recipes: ''
                }
            }
        },
        mounted() {
            this.$store.dispatch('authenticate');
        },
        methods: {
            // clearVineyardWines() {
            //     this.$store.dispatch('clearVineyardWines')
            // },
            getVineyardWines(list) {
                this.$store.dispatch('getVineyardWines', list)
            },
            addUserWine() {
                console.log("this.listId: ", this.listId)
                this.$store.dispatch('addUserWine', { userWine: this.userWine, listId: this.listId })
            },
            deleteList(list) {
                this.$store.dispatch('deleteList', list._id)
            },
            addComment(user) {
                this.$store.dispatch('addComment', {body: this.newComment.body, author: user.username, listId: this.listId})
                this.newComment.body = ''
            }
        },
        computed: {
            list() {
                return this.$store.state.lists[this.listId]
            },
            user() {
                return this.$store.state.user
            },
            vineyardwines() {
                return this.$store.getters.vwInList[this.listId].vineyardwines
            },
            userwines() {
                return this.$store.getters.uwInList[this.listId].userwines
            },
            comments() {
                return this.$store.getters.ucInList[this.listId].comments
            }
        },
        components: {
            VineyardWine,
            UserWine,
            Comment
        },
        props: ['listId'],
        getters:{
            lists(){
                return this.$store.state.lists[this.listId]
            }
        }
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

    h3 {
        font-weight: 700
    }

    .bg-1 {
        background-color: #eadac0;
        background-image: url("https://www.transparenttextures.com/patterns/natural-paper.png");
        box-shadow: 2px 3px 12px 0px rgba(50, 50, 50, 0.75);
    }

    .bg-2 {
        background-color: rgba(255, 255, 255, 0);
        margin-bottom: 10px;
        border: solid 3px rgba(87, 46, 60, 0.726);
        border-radius: 10px;
        display: flex;
        justify-content: center
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

    .flexy2 {
        display: flex;
        justify-content: center;
        margin-top: 10px
    }

    .flexy3 {
        display: flex;
        flex-direction: column;
        align-items: center;
    }

    button {
        width: 40%;
        background-color: rgba(87, 46, 60, 0.85);
        font-weight: 700;
        color: ivory
    }

    .upload {
        margin-top: 20px;
    }

    .form-control {
        margin-bottom: 5px
    }
</style>