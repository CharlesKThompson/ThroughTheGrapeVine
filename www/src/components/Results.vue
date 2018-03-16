<template>
    <div>
        <h3 v-if="bestRes.length > 0">Best Pairs:</h3>
        <div class="best-results" v-for="best in bestRes">
            <div>
                <img src="http://placehold.it/100x100">
            </div>
            <div>
                {{best.variety}}
            </div>
            <div>
                <button>More Info</button>
            </div>
        </div>
        <h3 v-if="goodRes.length > 0">Good Pairs:</h3>
        <div class="good-results" v-for="good in goodRes">
            <div>
                <img src="http://placehold.it/100x100">
            </div>
            <div>
                {{good.variety}}
            </div>
            <div>
                <button>More Info</button>
            </div>
        </div>
        <h3 v-if="results.length > 0">Pairs:</h3>
        <div class="results" v-for="result in results">
                <div>
                    <img src="http://placehold.it/100x100">
                </div>
                <div>
                    {{result.variety}}
                </div>
                <div>
                    <button>More Info</button>
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
        computed: {
            bestRes() {
                return this.$store.state.bestRes;
            },
            goodRes() {
                return this.$store.state.goodRes;
            },
            results() {
                return this.$store.state.res;
            }
        }
    }
</script>

<style>
</style>