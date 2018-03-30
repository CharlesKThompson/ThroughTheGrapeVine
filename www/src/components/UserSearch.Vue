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
                    <button type="submit" class="btn btn-primary">Submit</button>
                </form>
            </div>
        </div>
        <div class="user-results" v-for="foundUser in foundUsers">
            <UserResults :user="user"></UserResults>>
        </div>
    </div>
</template>

<script>
    import Navbar from './Navbar'
    import UserResults from './UserResults'
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
                this.$store.dispatch('searchByEmail', this.userEmail)
            }
        },
        components: {
            Navbar,
            UserResults
        },
        computed: {
            foundUsers() {
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
</style>