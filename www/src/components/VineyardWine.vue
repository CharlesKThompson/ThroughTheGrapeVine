<template>
    <div class="vineyardwine">
        <div class="row flexor">
            <div class="col-sm-12">
                <p class="name">{{vineyardwine.name}}</p>
            </div>
            <div class="col-sm-12">
                <p>{{vineyardwine.description}}</p>
            </div>
            <button @click="deleteVW(vineyardwine)">Delete wine from List</button>
        </div>
    </div>
</template>

<script>
    // import Comment from './Comment'
    export default {
        name: 'VineyardWine',
        data() {
            return {

            }
        },
        props: ['vineyardwine', 'listId'],
        methods: {
            deleteVW(vw) {
                this.$store.dispatch('deleteVineyardWine', {listId: this.listId, wine: vw})
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