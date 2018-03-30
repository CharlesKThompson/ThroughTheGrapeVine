<template>
  <div class="goodbye">
    <div class="darkSunGlasses row">
      <div class="chuckberry col-sm-12">
        <h1>Pick Your Favorite Wine Variety</h1>
      </div>
      <div class="suits col-sm-12">
        <h2>Click on a block</h2>
      </div>
    </div>
    <div class="container-fluid">
      <section class="main">
          <div class="bluesbrothers row">
              <div id="br" @click="clicked"></div>
              <!-- <div id="mr" @click="clicked"></div>
              <div id="lr" @click="clicked"></div>
              <div id="ro" @click="clicked"></div> -->
          </div>
          <div class="penguin row">
              <!-- <div id="rw" @click="clicked"></div>
              <div id="lw" @click="clicked"></div>
              <div id="sp" @click="clicked"></div>
              <div id="sw" @click="clicked"></div>
              <div id="de" @click="clicked"></div> -->
          </div>
        </section>
      </div>
  </div>
</template>

<script>
  import Navbar from './Navbar'
  export default {
    name: 'Pets',
    data() {
      return {
      }
      
    },
    components: {
      Navbar
    },
    methods: {
      clicked(){
        alert(this.boldRed)
      },
      // boldRed() {
      //   this.$store.dispatch("boldRed", this.user)
      // },
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
  .container-fluid{
    background-image: url("../assets/subCats/background.jpg");
    background-size: cover;
    background-position: 50% 60%;
    background-repeat: no-repeat;
    min-height: 320px;
  }
  .bluesbrothers {
    min-height: 400px;
    padding-top: 10px;
    display: flex;
    justify-content: space-around;
    justify-content: center;
    align-items: center;
  }
  .penguin {
    min-height: 400px;
    padding-bottom: 100px;
    padding-left: 25px;
    padding-right: 25px;
    justify-content: space-around;
    justify-content: center;
    align-items: center;
  }

  h1 {
    font-weight: normal;
    font-family: fantasy;
    color: whitesmoke;
    text-shadow: 2px 5px 5px #000;
  }
  h2 {
    font-weight: normal;
    font-family: fantasy;
    color: pink;
    text-shadow: 2px 5px 5px rgb(29, 29, 29);
  }
  .button {
    -webkit-transition-duration: 0.4s;
    transition-duration: 0.4s;


  }

  .darkSunGlasses {
    background-image: url("https://i.pinimg.com/originals/0b/6c/25/0b6c25127564085bf056151a3e3135da.jpg");

  }

  #br {
    background-image: url("../assets/subCats/200BoldRed.png");
    height: 220px;
    width: 195px;
    background-repeat: no-repeat;
    background-color: transparent;
    border-width: 0px;
    
  }
  #br:hover {
    /* background-color: white;
    color: darkred;
    box-shadow: 0 12px 16px 0 rgba(0,0,0,0.24), 0 17px 50px 0 rgba(0,0,0,0.19); */
    cursor: pointer;
  }

  #mr {
    background-image: url("../assets/subCats/200MediumRed.png");
    height: 220px;
    width: 195px;
    background-repeat: no-repeat;
    background-color: transparent;
    border-width: 0px;
  }

  #mr:hover {
    /* background-color: white;
    color: darkred;
    box-shadow: 0 12px 16px 0 rgba(0, 0, 0, 0.24), 0 17px 50px 0 rgba(0, 0, 0, 0.19); */
    cursor: pointer;
  }

  #lr {
    background-image: url("../assets/subCats/200LightRed.png");
    height: 220px;
    width: 195px;
    background-repeat: no-repeat;
    background-color: transparent;
    border-width: 0px;
    /* background-color: rgb(233, 6, 6);
    color: white;
    border-color: black;
    border-width: 2px;
    border-radius: 8px;
    box-shadow: 0px 3px 10px #aaa, inset 0px 5px 8px rgb(247, 168, 168);
    min-width: 150px;
    font-family: monospace;
    font-size: 22px;
    text-shadow: 2px 5px 3px black; */
  }

  #lr:hover {
    /* background-color: white;
    color: darkred;
    box-shadow: 0 12px 16px 0 rgba(0, 0, 0, 0.24), 0 17px 50px 0 rgba(0, 0, 0, 0.19); */
  }

  #ro {
    background-image: url("../assets/subCats/200Rose.png");
    height: 220px;
    width: 195px;
    background-repeat: no-repeat;
    background-color: transparent;
    border-width: 0px;
    /* background-color: rgb(247, 82, 82);
    color: white;
    border-color: black;
    border-width: 2px;
    border-radius: 8px;
    box-shadow: 0px 3px 10px #aaa, inset 0px 5px 8px rgb(247, 168, 168);
    min-width: 150px;
    font-family: monospace;
    font-size: 22px;
    text-shadow: 2px 5px 3px black; */
  }

  #ro:hover {
    /* background-color: white;
    color: darkred;
    box-shadow: 0 12px 16px 0 rgba(0, 0, 0, 0.24), 0 17px 50px 0 rgba(0, 0, 0, 0.19); */
  }

  #rw {
    background-image: url("../assets/subCats/200RichWhite.png");
    height: 220px;
    width: 195px;
    background-repeat: no-repeat;
    background-color: transparent;
    border-width: 0px;
    /* background-color: rgb(245, 248, 48);
    color: rgb(19, 18, 18);
    border-color: black;
    border-width: 2px;
    border-radius: 8px;
    box-shadow: 0px 4px 15px #aaa, inset 0px 8px 12px rgb(248, 248, 215);
    min-width: 150px;
    font-family: monospace;
    font-size: 22px;
    text-shadow: 2px 5px 3px rgb(156, 154, 2);
    font-weight: 700; */
  }

  #rw:hover {
    /* background-color: white;
    color: rgb(7, 7, 7);
    box-shadow: 0 12px 16px 0 rgba(0, 0, 0, 0.24), 0 17px 50px 0 rgba(0, 0, 0, 0.19); */
  }

  #lw {
    background-image: url("../assets/subCats/200LightWhite.png");
    height: 220px;
    width: 195px;
    background-repeat: no-repeat;
    background-color: transparent;
    border-width: 0px;
    /* background-color: rgb(245, 248, 48);
    color: rgb(17, 17, 17);
    border-color: black;
    border-width: 2px;
    border-radius: 8px;
    box-shadow: 0px 4px 15px #aaa, inset 0px 8px 12px rgb(248, 248, 215);
    min-width: 150px;
    font-family: monospace;
    font-size: 22px;
    text-shadow: 2px 5px 3px rgb(156, 154, 2);
    font-weight: 700; */
  }

  #lw:hover {
    /* background-color: white;
    color: rgb(7, 7, 7);
    box-shadow: 0 12px 16px 0 rgba(0, 0, 0, 0.24), 0 17px 50px 0 rgba(0, 0, 0, 0.19); */
  }

  #sp {
    background-image: url("../assets/subCats/200Sparkling.png");
    height: 220px;
    width: 195px;
    background-repeat: no-repeat;
    background-color: transparent;
    border-width: 0px;
    /* background-color: rgb(245, 248, 48);
    color: rgb(12, 12, 12);
    border-color: black;
    border-width: 2px;
    border-radius: 8px;
    box-shadow: 0px 4px 15px #aaa, inset 0px 8px 12px rgb(248, 248, 215);
    min-width: 150px;
    font-family: monospace;
    font-size: 22px;
    text-shadow: 2px 5px 3px rgb(156, 154, 2);
    font-weight: 700; */
  }

  #sp:hover {
    /* background-color: white;
    color: rgb(7, 7, 7);
    box-shadow: 0 12px 16px 0 rgba(0, 0, 0, 0.24), 0 17px 50px 0 rgba(0, 0, 0, 0.19); */
  }

  #sw {
    background-image: url("../assets/subCats/200SweetWhite.png");
    height: 220px;
    width: 195px;
    background-repeat: no-repeat;
    background-color: transparent;
    border-width: 0px;
    /* background-color: rgb(245, 248, 48);
    color: rgb(20, 20, 20);
    border-color: black;
    border-width: 2px;
    border-radius: 8px;
    box-shadow: 0px 4px 15px #aaa, inset 0px 8px 12px rgb(248, 248, 215);
    min-width: 150px;
    font-family: monospace;
    font-size: 22px;
    text-shadow: 2px 5px 3px rgb(156, 154, 2);
    font-weight: 700; */
  }

  #sw:hover {
    /* background-color: white;
    color: rgb(7, 7, 7);
    box-shadow: 0 12px 16px 0 rgba(0, 0, 0, 0.24), 0 17px 50px 0 rgba(0, 0, 0, 0.19); */
  }

  #de {
    background-image: url("../assets/subCats/200Dessert.png");
    height: 220px;
    width: 195px;
    background-repeat: no-repeat;
    background-color: transparent;
    border-width: 0px;
    /* background-color: rgb(245, 248, 48);
    color: rgb(17, 17, 17);
    border-color: black;
    border-width: 2px;
    border-radius: 8px;
    box-shadow: 0px 4px 15px #aaa, inset 0px 8px 12px rgb(248, 248, 215);
    min-width: 150px;
    font-family: monospace;
    font-size: 22px;
    text-shadow: 2px 5px 3px rgb(156, 154, 2);
    font-weight: 700; */
  }

  #de:hover {
    /* background-color: white;
    color: rgb(7, 7, 7);
    box-shadow: 0 12px 16px 0 rgba(0, 0, 0, 0.24), 0 17px 50px 0 rgba(0, 0, 0, 0.19); */
  }


  
</style>