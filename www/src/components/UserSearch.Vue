<template>
    <div>
        <navbar></navbar>
        <h3>Search Users by email</h3>
        <div class="row" style="justify-content: center;">
            <div class="col-sm-9">
                <form @submit.prevent="searchByEmail">
                    <div class="form-group">
                        <!-- <label for="Email">Email address</label> -->
                        <input type="email" v-model="userEmail.email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email">
                        <small id="emailHelp" class="form-text text-muted">We'll never share your email with anyone else.</small>
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
                    <button @click="followUser" class="btn">Follow {{foundUser.username}}</button>
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
        methods: {
            searchByEmail() {
                this.$store.dispatch('searchByEmail', this.userEmail);
            },
            followUser() {
                this.$store.dispatch('followUser');
            }
        },
        components: {
            Navbar
        },
        computed: {
            foundUser() {
                return this.$store.state.foundUser;
            }
        }
    }

</script>

<style scoped>
    h3 {
        margin-top: 1rem;
        margin-bottom: 1rem;
    }

    .user-results {
        background-color: rgba(255, 255, 255, 0);
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