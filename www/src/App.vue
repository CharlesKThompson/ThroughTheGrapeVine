<template>
  <div id="app" class="container-fluid">
    <router-view/>
  </div>
</template>

<script>
export default {
  name: 'App',
  mounted() {
    // leave this here or the search results won't draw
    this.$store.dispatch('getAllVineyardWines');
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

.container-fluid {
  padding: 0 0px;
}
</style>
