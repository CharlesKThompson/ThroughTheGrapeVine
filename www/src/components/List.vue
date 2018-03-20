<template>
    <div class="lists">
        <div class="card bg-1">
            <div class="card-body">
                <div class="flexor bg-2">
                    <div>
                        <h4 class="card-title">{{list.title}}</h4>
                    </div>
                    <button data-toggle="modal" data-target="#login-modal">Add Wine</button>
                    <div class="modal fade" id="login-modal" tabindex="-1" role="dialog" aria-labelledby="myModalLabel" aria-hidden="true" style="display: none;">
                        <div class="modal-dialog">
                            <div class="loginmodal-container">
                                <h1>Upload your favorite wine!</h1>
                                <br>
                                <form>
                                    <select name="variety">
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
                                    <input type="text" name="brand-name" placeholder="Brand Name">
                                    <input type="text" name="type" placeholder="Type">
                                    <input type="text" name="img" placeholder="Image URL">
                                    <input type="text" name="price" placeholder="Price">
                                    <input type="text" name="location" placeholder="Location">
                                    <input type="text" name="description" placeholder="Description">
                                    <input type="text" name="pairings" placeholder="Pairings">
                                    <input type="text" name="recipes" placeholder="Recipes">

                                    <input type="submit" name="login" class="login loginmodal-submit" value="Upload">
                                </form>
                            </div>
                        </div>
                    </div>

                    <button @click="deleteList(list)">Delete List</button>
                    <!-- <button @click="getVineyardWines(list)">Expand List</button> -->
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
            clearVineyardWines() {
                this.$store.dispatch('clearVineyardWines')
            },
            getVineyardWines(list) {
                this.$store.dispatch('getVineyardWines', list)
            },
            addUserWine() {
                this.$store.dispatch('addUserWine')
            }
        },
        computed: {
            list() {
                return this.$store.state.lists[this.listId]
            },
            vineyardwines() {
                return this.$store.getters.vwInList[this.listId].vineyardwines
            },

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

    @import url(https://fonts.googleapis.com/css?family=Roboto);

    /****** LOGIN MODAL ******/

    .loginmodal-container {
        padding: 30px;
        max-width: 350px;
        width: 100% !important;
        background-color: #F7F7F7;
        margin: 0 auto;
        border-radius: 2px;
        box-shadow: 0px 2px 2px rgba(0, 0, 0, 0.3);
        overflow: hidden;
        font-family: roboto;
    }

    .loginmodal-container h1 {
        text-align: center;
        font-size: 1.8em;
        font-family: roboto;
    }

    .loginmodal-container input[type=submit] {
        width: 100%;
        display: block;
        margin-bottom: 10px;
        position: relative;
    }

    .loginmodal-container input[type=text],
    input[type=password] {
        height: 44px;
        font-size: 16px;
        width: 100%;
        margin-bottom: 10px;
        -webkit-appearance: none;
        background: #fff;
        border: 1px solid #d9d9d9;
        border-top: 1px solid #c0c0c0;
        /* border-radius: 2px; */
        padding: 0 8px;
        box-sizing: border-box;
        -moz-box-sizing: border-box;
    }

    .loginmodal-container input[type=text]:hover,
    input[type=password]:hover {
        border: 1px solid #b9b9b9;
        border-top: 1px solid #a0a0a0;
        -moz-box-shadow: inset 0 1px 2px rgba(0, 0, 0, 0.1);
        -webkit-box-shadow: inset 0 1px 2px rgba(0, 0, 0, 0.1);
        box-shadow: inset 0 1px 2px rgba(0, 0, 0, 0.1);
    }

    .loginmodal {
        text-align: center;
        font-size: 14px;
        font-family: 'Arial', sans-serif;
        font-weight: 700;
        height: 36px;
        padding: 0 8px;
        /* border-radius: 3px; */
        /* -webkit-user-select: none;
  user-select: none; */
    }

    .loginmodal-submit {
        /* border: 1px solid #3079ed; */
        border: 0px;
        color: #fff;
        text-shadow: 0 1px rgba(0, 0, 0, 0.1);
        background-color: #4d90fe;
        padding: 17px 0px;
        font-family: roboto;
        font-size: 14px;
        /* background-image: -webkit-gradient(linear, 0 0, 0 100%,   from(#4d90fe), to(#4787ed)); */
    }

    .loginmodal-submit:hover {
        /* border: 1px solid #2f5bb7; */
        border: 0px;
        text-shadow: 0 1px rgba(0, 0, 0, 0.3);
        background-color: #357ae8;
        /* background-image: -webkit-gradient(linear, 0 0, 0 100%,   from(#4d90fe), to(#357ae8)); */
    }

    .loginmodal-container a {
        text-decoration: none;
        color: #666;
        font-weight: 400;
        text-align: center;
        display: inline-block;
        opacity: 0.6;
        transition: opacity ease 0.5s;
    }

    .login-help {
        font-size: 12px;
    }

    .login-btn {
        text-align: center;
        margin-top: 50px;
    }

    .button {
        line-height: 55px;
        padding: 0 30px;
        background: #004a80;
        color: #fff;
        display: inline-block;
        font-family: roboto;
        text-decoration: none;
        font-size: 18px;
    }

    .button:hover,
    .button:visited {
        background: #006cba;
        color: #fff;
    }
</style>