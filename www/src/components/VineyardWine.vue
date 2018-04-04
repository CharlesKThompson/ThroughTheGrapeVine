<template>
    <div class="vineyardwine">
        <div class="row flexor">
            <div class="col-sm-12">
                <h4 class="name">{{vineyardwine.name}}</h4>
                <p>({{vineyardwine.variety}})</p>
            </div>
            <div v-if="show == false" @click="show = true" class="pointer">
                <i class="fas fa-chevron-circle-down"></i>
            </div>
            <div v-if="show == true">
                <div @click="show = false" class="pointer">
                    <i class="fas fa-chevron-circle-up"></i>
                </div>
                <div>
                    <img :src="images[vineyardwine.variety]" alt="wine" class="wine">
                </div>
                <div class="col-sm-12">
                    <p>{{vineyardwine.description}}</p>
                </div>
                <div v-if="vineyardwine.userId == user._id">
                    <button @click="deleteVW(vineyardwine)" class="btn btn-link">Delete wine from List</button>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    import Comment from './Comment'
    export default {
        name: 'VineyardWine',
        data() {
            return {
                show: false

            }
        },
        mounted() {
            this.$store.dispatch('authenticate')
        },
        props: ['vineyardwine', 'listId'],
        methods: {
            deleteVW(vw) {
                this.$store.dispatch('deleteVineyardWine', { listId: this.listId, wine: vw })
            }
            // getComments(){
            //     this.
            // }
        },
        computed: {
            user() {
                return this.$store.state.user
            },
            images() {
                return this.$store.state.images
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

    .pointer {
        cursor: pointer;
        opacity: .8;
        transition: linear .3s all
    }

    .pointer:hover {
        opacity: 1;
        transition: linear .3s all
    }

    .wine {
        width: 80%;
        border: solid 1px rgba(87, 46, 60, 0.726);
        border-radius: 10px;
    }
</style>