<template>
    <div class="search">
        <navbar></navbar>
        <h3>Search Users by email</h3>
        <div class="row" style="justify-content: center;">
            <div class="col-sm-9">
                <form @submit.prevent="searchByEmail">
                    <div class="form-group">
                        <input type="email" v-model="userEmail.email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter Friend's Email">
                        </div>
                    <button type="submit" class="btn">Submit</button>
                </form>
            </div>
        </div>
        <div class="flex"  v-if="foundUser.username">
            <div class="user-results">
                <h3>{{foundUser.username}}</h3>
                <p>{{foundUser.email}}</p>
                <div>
                    <button @click="followUser(user, foundUser)" class="btn">Follow {{foundUser.username}}</button>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    import Navbar from './Navbar'
    export default {
        name: 'UserSearch',
        data() {
            return {
                userEmail: {
                    email: ''
                }
            }
        },
        mounted() {
            this.$store.dispatch('authenticate');
        },
        methods: {
            searchByEmail() {
                this.$store.dispatch('searchByEmail', this.userEmail);
            },
            followUser(user, userToAdd) {
                this.$store.dispatch('followUser', { user: user, userToAdd: userToAdd });
            }
        },
        components: {
            Navbar
        },
        computed: {
            foundUser() {
                return this.$store.state.foundUser;
            },
            user() {
                return this.$store.state.user;
            }
        }
    }

</script>

<style scoped>
    .search {
        background-image: url(https://images.unsplash.com/photo-1506377247377-2a5b3b417ebb?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=efa71ae041cd94e911339f2e42a405a9&auto=format&fit=crop&w=750&q=80);
        background-position: center;
        background-size: cover;
        background-repeat: no-repeat;
        height: 97vh;
        width: 100%;
    }

    h3 {
        margin-top: 1rem;
        margin-bottom: 1rem;
    }

    .user-results {
        background-color: rgba(255, 255, 255, 0.616);
        margin: 10px;
        border: solid 3px rgba(87, 46, 60, 0.726);
        border-radius: 10px;
        width: 25%;
    }

    button {
        width: 40%;
        background-color: rgba(87, 46, 60, 0.85);
        font-weight: 700;
        color: ivory;
        margin: 10px;
    }

    .flex {
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
    }
</style>