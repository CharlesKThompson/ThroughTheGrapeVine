<template>
    <div class="userwine">
        <div class="row flexor">
            <div class="col-sm-12">
                <h4 class="name">{{userwine.brandName}}</h4>
                <p>({{userwine.variety}})</p>
            </div>
            <div class="col-sm-12">
                <p>{{userwine.description}}</p>
            </div>
            <div class="col-sm-12">
                <div class="row">
                    <div class="col-sm-5">
                        <p>Type: {{userwine.type}}</p>
                        <p>Price:{{userwine.price}}</p>
                    </div>
                    <div class="col-sm-5">
                        <p>Pairings: {{userwine.pairings}}</p>
                        <p>Recipes: {{userwine.recipes}}</p>
                    </div>
                </div>
            </div>
            <button @click="deleteUW(userwine)">Delete wine from List</button>
        </div>

    </div>
</template>

<script>
    // import Comment from './Comment'
    export default {
        name: 'UserWine',
        data() {
            return {

            }
        },
        props: ['userwine', 'listId'],
        methods: {
            deleteUW(uw) {
                this.$store.dispatch('deleteUserWine', { listId: this.listId, userwine: uw })
            }
        }
    }

</script>

<style scoped>
    .flexor {
        display: flex;
        flex-direction: column
    }

    .name {
        font-weight: 700
    }

    .bg-1 {
        background-color: #cfbc8b;
        background-image: url("https://www.transparenttextures.com/patterns/notebook.png");
    }
</style>