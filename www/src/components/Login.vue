<template>
    <div class="flexor">
    <div class="login-page">
        <div>
            <h1>
                Welcome to ThroughTheGrapeVine
            </h1>
        </div>
        <div>
            <h2>Please login to continue</h2>
        </div>
        <div v-if="loginForm == true" class="login">
            <div class="login-box">
                <div class="row login-credentials">
                    <div class="col-sm-12 login-form">
                        <form @submit.prevent="login">
                            <div class="form-group">
                                <input v-model="user.email" type="text" name="email" placeholder="email" >
                                <input v-model="user.password" type="password" name="password" placeholder="password">
                            </div>
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
                        <input v-model="user.username" type="text" name="username" placeholder="username">
                        <input v-model="user.email" type="text" name="email" placeholder="email">
                        <input v-model="user.password" type="password" name="password" placeholder="password">
                        <input v-model="user.password" type="password" name="password" placeholder="confirm password">
                        <div class="col-sm-12 login-button">
                            <button type="submit" class="btn btn-success login-button">Create</button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
        <div>
            <button class="btn btn-success" @click="loginForm = !loginForm">Create an account</button>
        </div>
    </div>
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



<style scoped>
    form {
        margin-bottom: 1rem;
    }

    .flexor {
        align-items: center;
    }

    .login-button {
        margin-top: 1rem;
    }

    ::-webkit-input-placeholder {
        color: #808080;
        text-align: center;

    }

    .login-page {
        background-image: url('../assets/login-background.jpg');
        height: 100vh;
        background-position: center;
        background-repeat: no-repeat;
        background-size: cover;
    }
</style>