<template>
    <div class="vineyardwine">
        <div class="row">
            <div class="col-sm-6">
                <p>{{vineyardwine.name}}</p>
            </div>
            <div class="col-sm-6">
                <p>{{vineyardwine.description}}</p>
            </div>
        </div>
    </div>
</template>

<script>
    // import Comment from './Comment'
    export default {
        name: 'VineyardWines',
        data() {
            return {

            }
        },
        props: ['vineyardwine']
    }

</script>

<style>

</style>