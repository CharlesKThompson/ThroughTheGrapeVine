<template>
    <div>
        <nav class="navbar">
            <div class="flexor">
                <router-link :to="{name: 'Home'}">
                    <div>
                        <img class="logo" src="../assets/grapes" alt="grapes" height="50px">
                    </div>
                </router-link>
                <div class="collapse navbar-collapse" id="navbarNav">
                    <ul class="navbar-nav">
                        <li class="nav-item">
                            <a class="nav-link" href="#">Your Corkboard</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link" href="#">You</a>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    </div>
</template>

<script>
    export default {
        name: 'Navbar',
        data() {
            return {

            }
        }
    }
</script>

<style scoped>
    .flexor {
        display: flex;
        align-items: flex-end;
        justify-content: space-around;
    }
</style>