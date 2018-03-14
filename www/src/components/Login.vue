<template>
    <div class="login page">

        <div v-if="loginForm == true" class="login">
            <div class="login-box">
                <div class="row login-credentials">
                    <div class="col-sm-12 login-form">
                        <form @submit.prevent="login">
                            <input v-model="user.email" type=“text” name=“email” placeholder=email id=“”>
                            <input v-model="user.password" type=“text” name=“password” placeholder=password id=“”>
                            <div class="col-sm-12 login-button">
                                <button type="submit" class="btn btn-success">Login</button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>

        <div v-if="loginForm == false" class="create-account-box">
            <div class="createUser">
                <div class="col-sm-12 create-form">
                    <form @submit.prevent="create">
                        <input v-model="user.username" type="text" name="username" placeholder="username" id="">
                        <input v-model="user.email" type=“text” name=“email” placeholder="email" id="">
                        <input v-model="user.password" type="text" name=“password” placeholder="password" id="">
                        <input v-model="user.password" type="text" name="password" placeholder="password" id="">
                        <div class="col-sm-12 login-button">
                            <button type="submit" class="btn btn-success">Create</button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
        <button @click="loginForm = !loginForm">Toggle</button>
    </div>
</template>

<script>
    export default {
        name: 'Login',
        data() {
            return {
                loginForm: true,
                user: {
                    username: '',
                    email: '',
                    password: ''
                }
            }
        },
        methods: {
            login() {
                this.$store.dispatch("login", this.user)
            },
            create() {
                this.$store.dispatch("createUser", this.user)
            }
        }
    }

</script>



<style>
</style>