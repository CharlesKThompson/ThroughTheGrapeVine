<template>
    <div>
        <navbar></navbar>
        <h3>Search Users by email</h3>
        <div class="row" style="justify-content: center;">
            <div class="col-sm-9">
                <form @submit.prevent="searchByEmail">
                    <div class="form-group">
                        <input type="email" v-model="userEmail.email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email">
                        <small id="emailHelp" class="form-text text-muted">We'll never share your email with anyone else.</small>
                    </div>
                    <button type="submit" class="btn btn-primary">Submit</button>
                </form>
            </div>
        </div>
        <div class="user-results">
            <p>{{foundUser.username}}</p>
            <p>{{foundUser.email}}</p>
            <button @click="followUser(user, foundUser)">follow</button>
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
    h3 {
        margin-top: 1rem;
        margin-bottom: 1rem;
    }
</style>