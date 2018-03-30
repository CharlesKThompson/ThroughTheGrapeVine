<template>
    <div>
        <nav class="navbar flexor">
            <div>
                <router-link :to="{name: 'Home'}">
                    <img src="../assets/grapes.png" alt="grapes" height="50px">
                </router-link>
            </div>
            <div>
                <div class="row">

                    <router-link :to="{name: 'UserSearch'}">
                        <i class="fas fa-search fa-2x"></i>
                    </router-link>
                    <router-link :to="{name: 'Corkboard'}">
                        <img src="../assets/corks.png" alt="cork" height="50px">
                    </router-link>
                    <div class="dropdown pointer">
                        <a class="dropdown-toggle" role="button" id="dropdownMenu2" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                            <span>
                                <i class="fas fa-user fa-2x"></i>
                            </span>
                        </a>
                        <div class="dropdown-menu" aria-labelledby="dropdownMenu2">
                            <button @click.prevent="logout" class="dropdown-item pointer" type="button">logout</button>
                        </div>
                    </div>
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
        },
        methods: {
            logout() {
                this.$store.dispatch('logout')
            }
        }
    }
</script>

<style scoped>
    .navbar {
        background-color: #eadac0;
        background-image: url("https://www.transparenttextures.com/patterns/natural-paper.png");
    }

    .fa-search {
        color: #2C3E50;
    }

    .flexor {
        display: flex;
        align-items: flex-end;
        justify-content: space-between;
    }
</style>