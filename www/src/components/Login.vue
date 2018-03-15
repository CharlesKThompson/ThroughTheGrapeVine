<template>
    <div class="flexor">
        <div class="login-page flexor2">
            <div class="bg-1">
                <div>
                    <h1>
                        Welcome to ThroughTheGrapeVine
                    </h1>
                </div>
                <div>
                    <h2>Please login to continue.</h2>
                </div>
                <div v-if="loginForm == true" class="login">
                    <div class="login-box">
                        <div class="row login-credentials">
                            <div class="col-sm-12 login-form">
                                <form @submit.prevent="login">
                                    <div class="form-group flexor2">
                                        <input v-model="user.email" type="text" name="email" placeholder="email" class="form-control">
                                        <input v-model="user.password" type="password" name="password" placeholder="password" class="form-control">
                                    </div>
                                    <div class="col-sm-12 login-button">
                                        <button type="submit" class="btn btn-success">Login</button>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                    <div>
                        <button class="btn btn-link" @click="loginForm = !loginForm">Create an account</button>
                    </div>
                </div>

                <div v-if="loginForm == false" class="create-account-box">
                    <div class="createUser">
                        <div class="col-sm-12 create-form">
                            <form @submit.prevent="create" class="flexor2">
                                <input v-model="user.username" type="text" name="username" placeholder="username" class="form-control">
                                <input v-model="user.email" type="text" name="email" placeholder="email" class="form-control">
                                <input v-model="user.password" type="password" name="password" placeholder="password" class="form-control">
                                <input v-model="user.confirmPassword" type="password" name="password" placeholder="confirm password" class="form-control">
                                <div class="col-sm-12 login-button">
                                    <button type="submit" class="btn btn-success login-button">Create Account</button>
                                </div>
                            </form>
                        </div>
                    </div>
                    <div>
                        <button class="btn btn-link" @click="loginForm = !loginForm">Back to Login</button>
                    </div>
                </div>
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
                    password: '',
                    confirmPassword: ''
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

    .form-control {
        margin-top: 1vh
    }

    .btn-link {
        color: ivory;
        font-weight: 700
    }

    .btn-success {
        font-weight: 700;
        width: 50%
    }

    .bg-1 {
        background-color: rgba(175, 111, 175, 0.6);
        padding: 20px;
        border-radius: 30px;
        color: ivory
    }

    .flexor {
        align-items: center;
    }

    .flexor2 {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center
    }

    .login-button {
        margin-top: 1rem;
    }

    ::-webkit-input-placeholder {
        color: #808080;
        text-align: center;
        font-weight: 700
    }

    .login-page {
        background-image: url('../assets/login-background.jpg');
        height: 100vh;
        background-position: center;
        background-repeat: no-repeat;
        background-size: cover;
    }
</style>