<template>
    <div class="goodbye">
      <h1>{{ msg }}</h1>
      <h2>Click on a block</h2>
      <div class="bluesbrothers">
        <ul>
          <li>
            <button class="btn btn-link" @click="boldRed">Bold Red</button>
          </li>
          <li>
            <button class="btn btn-link" @click="mediumRed">Medium Red</button>
          </li>
          <li>
            <button class="btn btn-link" @click="lightRed">Light Red</button>
          </li>
          <li>
            <button class="btn btn-link" @click="rose">Rose</button>
          </li>
          <br>
        </ul>
        <ul>
          <li>
            <button class="btn btn-link" @click="richWhite">Rich White</button>
          </li>
          <li>
            <button class="btn btn-link" @click="lightWhite">Light White</button>
          </li>
          <li>
            <button class="btn btn-link" @click="sparkling">Sparkling</button>
          </li>
          <li>
            <button class="btn btn-link" @click="sweetWhite">Sweet White</button>
          </li>
          <li>
            <button class="btn btn-link" @click="dessert">Dessert</button>
          </li>
        </ul>
      </div>
    </div>
  </template>
  
  <script>
    import Navbar from './Navbar'  
    export default {
      name: 'Pets',
      data () {
        return {
          msg: 'Pick Your Favorite Wine Variety'
        }
      },
      components: {
        Navbar
      },
      methods: {
        boldRed() {
          this.$store.dispatch("boldRed", this.user)
        },
        mediumRed() {
          this.$store.dispatch("mediumRed", this.user)
        },
        lightRed() {
          this.$store.dispatch("lightRed", this.user)
        },
        rose() {
          this.$store.dispatch("rose", this.user)
        },
        richWhite() {
          this.$store.dispatch("richWhite", this.user)
        },
        lightWhite() {
          this.$store.dispatch("lightWhite", this.user)
        },
        sparkling() {
          this.$store.dispatch("sparkling", this.user)
        },
        sweetWhite() {
          this.$store.dispatch("sweetWhite", this.user)
        },
        dessert() {
          this.$store.dispatch("dessert", this.user)
        }
      }
    }
  </script>
  
  <!-- Add "scoped" attribute to limit CSS to this component only -->
  <style scoped>
  h1, h2 {
    font-weight: normal;
  }
  ul {
    list-style-type: none;
    padding: 0;
  }
  li {
    display: inline-block;
    margin: 0 10px;
  }
  a {
    color: #42b983;
  }
  </style>