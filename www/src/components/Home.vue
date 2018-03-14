<template>
    <div class="home">
        <h1>How would you like to pair your wine?</h1>
        <button type="button" class="btn btn-primary btn-lg btn-block">By Food</button>
        <button type="button" class="btn btn-primary btn-lg btn-block">By Sweetness</button>
        <button type="button" class="btn btn-primary btn-lg btn-block">By Pet</button>
    </div>
</template>

<script>
  export default {
    name: 'Home',
    data() {
      return {

      }
    }
  }
</script>

<style>
h1 {
    margin-bottom: 5vh;
}
.btn-block {
    width: 100%;
    height: 20vh;
    margin-bottom: 5vh;
}
</style>