<template>
    <div>
        <nav class="navbar">
            <div class="flexor">
                <a class="navbar-brand" href="#">Vine</a>
                <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false"
                    aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                </button>
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