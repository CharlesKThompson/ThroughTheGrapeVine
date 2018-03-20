<template>
    <div>
        <navbar></navbar>
        <div class="home flex">
            <div class="title">
                <h1>How would you like to pair your wine?</h1>
            </div>
            <div class="button">
                <router-link :to="{name: 'Search'}">
                    <button type="button" class="btn btn-primary btn-lg btn-block btn-top">
                        <h2 class="text">By Food</h2>
                    </button>
                </router-link>
            </div>
            <div class="button">
                <router-link :to="{name: 'Sweetness'}">
                    <button type="button" class="btn btn-primary btn-lg btn-block btn-middle">
                        <h2 class="text">By Sweetness</h2>
                    </button>
                </router-link>
            </div>
            <div class="button">
                <router-link :to="{name: 'Pets'}">
                    <button type="button" class="btn btn-primary btn-lg btn-block btn-bottom">
                        <h2 class="text">By Pet</h2>
                    </button>
                </router-link>
            </div>
        </div>
    </div>
</template>

<script>
    import Navbar from './Navbar'
    export default {
        name: 'Home',
        data() {
            return {

            }
        },
        components: {
            Navbar
        },
        mounted() {
            this.$store.dispatch('authenticate');
        },
    }
</script>

<style scoped>
    .text {
        opacity: 1;
        font-weight: 700;
    }

    .btn-block {
        width: 100%;
        height: 20vh;
        margin-bottom: 5vh;
        border: none;
        border-radius: 30px;
        color: black;
    }

    .button {
        width: 80%;
        height: 20vh;
        margin-bottom: 5vh;
        border: none;
    }

    .flex {
        display: flex;
        justify-content: center
    }

    .btn-top {
        background-color: rgba(225, 206, 177, 0.85);
    }

    .btn-middle {
        background-color: rgba(204, 162, 114, 0.85);
    }

    .btn-bottom {
        background-color: rgba(157, 95, 61, 0.85);
    }

    .btn-block:hover {
        background-color: rgba(87, 46, 60, 0.85);
        color: ivory
    }

    .title {
        background-color: rgba(87, 46, 60, 0.85);
        margin-bottom: 5vh;
        margin-top: 5vh;
        padding: 10px;
        border-radius: 30px;
        color: ivory;
    }

    .home {
        background-image: url('../assets/corks.jpg');
        background-size: cover;
        background-repeat: no-repeat;
        height: 100%;
        margin: 0 0rem !important;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center
    }
</style>