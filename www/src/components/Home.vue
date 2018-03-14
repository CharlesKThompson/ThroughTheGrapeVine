<template>
    <div class="home">
        <div class="title">
            <h1>How would you like to pair your wine?</h1>
        </div>
        <div>
            <router-link :to="{name: 'Search'}">
                <button type="button" class="btn btn-primary btn-lg btn-block btn-top">By Food</button>
            </router-link>
        </div>
        <div>
            <button type="button" class="btn btn-primary btn-lg btn-block btn-middle">By Sweetness</button>
        </div>
        <div>
            <button type="button" class="btn btn-primary btn-lg btn-block btn-bottom">By Pet</button>
        </div>
    </div>
</template>

<script>
    export default {
        name: 'Home',
        data() {
            return {

            }
        }
    }
</script>

<style>
    .btn-block {
        width: 80%;
        height: 20vh;
        margin-bottom: 5vh;
        border: none;
        opacity: .85;
    }

    .btn-top {
        background-color: #E1CEB1;
    }

    .btn-middle {
        background-color: #CCA272;
    }

    .btn-bottom {
        background-color: #9D5E3D;
    }

    .btn:hover {
        background-color: #572E3C;
    }

    .title {
        background-color: rgba(255, 255, 255, 0.75);
        margin-bottom: 5vh;
        margin-top: 5vh
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