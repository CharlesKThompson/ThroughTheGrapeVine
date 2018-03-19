<template>
    <div>
        <nav class="navbar flexor">
            <router-link :to="{name: 'Home'}">
                <div>
                    <img src="../assets/grapes.png" alt="grapes" height="50px">
                </div>
            </router-link>
            <div>
                <router-link :to="{name: 'Corkboard'}">
                    <img src="../assets/corks.png" alt="cork" height="50px">
                </router-link>

                <i class="fas fa-user fa-2x"></i>
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
    .navbar {
        background-color: #EADAC0;
    }

    .flexor {
        display: flex;
        align-items: flex-end;
        justify-content: space-between;
    }
</style>