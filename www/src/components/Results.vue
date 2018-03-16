<template>
    <div class="results">
        <div class="col-sm-12">
            <div class="card" style="width: 55rem;">
                <div>
                    <img :src="wine.img" alt="Card image cap" style="width: 15rem;">
                </div>
                <div class="card-body">
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
    </div>

</template>

<script>

    export default {
        name: 'Results',
        data() {
            return {
            }
        },
        methods: {
            setActiveTypes(wine) {
                this.$store.dispatch('setActiveTypes', wine)
            }
            // clearActiveTypes() {
            //     this.$store.dispatch('setActiveTypes', {})
            // }
        },
        computed: {
            activeTypes() {
                // return this.$store.state.activeTypes
                return this.$store.state.activeTypes[this.wine._id] || [];
            }
        },

        props: ['wine']
    }
</script>

<style>

  .card {
    margin-top: 1rem;
  }
</style>