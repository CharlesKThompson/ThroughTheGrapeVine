<template>
    <div>
        <h3>Search Users by email</h3>
        <div class="row" style="justify-content: center;">
            <div class="col-sm-9">
                <form>
                    <div class="form-group">
                        <label for="Email">Email address</label>
                        <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email">
                        <small id="emailHelp" class="form-text text-muted">We'll never share your email with anyone else.</small>
                    </div>
                    <button type="submit" class="btn btn-primary">Submit</button>
                </form>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: 'UserSearch',
        data() {
            return {

            }
        }
    }

</script>

<style scoped>
</style>