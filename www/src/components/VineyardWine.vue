<template>
    <div class="vineyardwine">
        <div class="row flexor">
            <div class="col-sm-12">
                <p class="name">{{vineyardwine.name}}</p>
            </div>
            <div class="col-sm-12">
                <p>{{vineyardwine.description}}</p>
            </div>
            <div>
                <button @click="deleteVW(vineyardwine)" class="btn btn-link">Delete wine from List</button>
            </div>
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
                this.$store.dispatch('deleteVineyardWine', { listId: this.listId, wine: vw })
            }
        }
    }

</script>

<style scoped>
    .flexor {
        display: flex;
        flex-direction: column;
    }

    .name {
        font-weight: 700
    }

    .bg-1 {
        background-color: #cfbc8b;
        background-image: url("https://www.transparenttextures.com/patterns/notebook.png");
    }

    button {
        font-weight: 700;
        color: rgba(87, 46, 46, 0.85);
        text-align: center
    }

    button:hover {
        color: rgba(170, 43, 43, 0.85)
    }
</style>