<template>
  <div>
    <navbar></navbar>
    <div class="underly">
      <div class="background-1">
        <div class="search background-2">
          <form action="food-selector" name="searchForm" method="GET" @submit.prevent="getInputs">

            <h2 style="color:rgb(255, 255, 255)">What are you dining with?</h2>
            <h5 style="color:rgb(255, 255, 255)">(Select up to 3 Ingredients)</h5>
            <br />

            <div class="col-sm-12">
              <div class="row">
                <div class="col-sm-6">
                  <h3>Meat</h3>
                </div>
                <div class="col-sm-6">
                  <h3>Vegetables</h3>
                </div>
              </div>
            </div>

            <div class="spacerOne row">
            </div>

            <div class="row">
              <div class="col-sm-6">
                <div class="meat row">
                  <div class="col-sm-12">
                    Red Meat
                    <input type="checkbox" name="meat[]" value="Red Meat" />
                    <br />
                    <p>beef, lamb, venison</p>
                  </div>
                  <div class="col-sm-6">
                    Poultry
                    <input type="checkbox" name="meat[]" value="Poultry" />
                    <br />
                    <p>chicken, duck, turkey</p>
                    Fish
                    <input type="checkbox" name="meat[]" value="Fish" />
                    <br />
                    <p>tuna, cod, trout, bass</p>
                    Pork
                    <input type="checkbox" name="meat[]" value="Pork" />
                    <br />
                    <p>roast, tenderloin, pork chop</p>
                  </div>
                  <div class="col-sm-6">
                    Cured Meat
                    <input type="checkbox" name="meat[]" value="Cured Meat" />
                    <br />
                    <p>salami, proscuitto, bresaola, bacon</p>
                    Lobster & Shellfish
                    <input type="checkbox" name="meat[]" value="Lobster & Shellfish" />
                    <br />
                    <p>prawn, crab, langoustine</p>
                    Mollusk
                    <input type="checkbox" name="meat[]" value="Mollusk" />
                    <br />
                    <p>oyster, mussel, clam</p>
                  </div>
                </div>
              </div>
              <div class="col-sm-6">

                <div class="vegatable row">
                  <div class="col-sm-12">
                      Green Vegetables
                      <input type="checkbox" name="vegetable[]" value="Green Vegetables" />
                      <br />
                      <p>green bean, kale, lettuce</p>
                  </div>
                  <div class="vegMod col-sm-6">

                    Alliums
                    <input type="checkbox" name="vegetable[]" value="Alliums" />
                    <br />
                    <p>onion, shallot, garlic, scallion</p>
                    Root Veggies & Squash
                    <input type="checkbox" name="vegetable[]" value="Root Vegetables & Squash" />
                    <br />
                    <p>turnip, butternut, pumpkin, delicata, carrot</p>
                    Nightshades
                    <input type="checkbox" name="vegetable[]" value="Nightshades" />
                    <br />
                    <p>tomato, eggplant, bell pepper</p>
                  </div>
                  <div class="vegetable col-sm-6">
                    Funghi
                    <input type="checkbox" name="vegetable[]" value="Funghi" />
                    <br />
                    <p>crimini, maitake, chanterelle</p>
                    Nuts & Seeds
                    <input type="checkbox" name="vegetable[]" value="Nuts & Seeds" />
                    <br />
                    <p>peanut, almond, pecan, sesame</p>
                    Beans & Peas
                    <input type="checkbox" name="vegetable[]" value="Beans & Peas" />
                    <br />
                    <p>lentil, navy, pinto, chickpea</p>
                  </div>
                </div>
              </div>
            </div>

            <div class="spacerOne row">
            </div>

            <div class="row">
              <div class="col-sm-4">
                <h3>Dairy</h3>
              </div>
              <div class="starch col-sm-4">
                <h3>Starch</h3>
              </div>
              <div class="col-sm-4">
                <h3>Sweet</h3>
              </div>
            </div>

            <div class="row">
              <div class="col-sm-4">

                Soft Cheese & Cream
                <input type="checkbox" name="dairy[]" value="Soft Cheese & Cream" />
                <br />
                <p>brie, mascarpone, creme fraiche</p>
                Pungent Cheese
                <input type="checkbox" name="dairy[]" value="Pungent Cheese" />
                <br />
                <p>bleu, gorganzola, stilton, roquefort</p>
                Hard Cheese
                <input type="checkbox" name="dairy[]" value="Hard Cheese" />
                <br />
                <p>cheddar, pecorino, manchego, asiago, parmesan</p>
              </div>

              <div class="starchMod col-sm-4">
                White Starches
                <input type="checkbox" name="starch[]" value="White Starches" />
                <br />
                <p>four, white rice, pasta, bread, tortillas</p>
                Whole Wheat Grains
                <input type="checkbox" name="starch[]" value="Whole Wheat Grains" />
                <br />
                <p>quinoa, farro, brown rice</p>
                Sweet Starchy Vegetables
                <input type="checkbox" name="starch[]" value="Sweet Starchy Vegetables" />
                <br />
                <p>sweet potato, yucca, taro</p>
                Potato
                <input type="checkbox" name="starch[]" value="Potato" />
                <br />
                <p>literally just any potato</p>
                <button type="submit" value="Submit">Submit</button>
              </div>


              <div class="col-sm-4">
                Fruit & Berries
                <input type="checkbox" name="sweet[]" value="Fruit & Berries" />
                <br />
                <p>straberry, orange, apple, peach</p>
                Vanilla & Caramel
                <input type="checkbox" name="sweet[]" value="Vanilla & Caramel" />
                <br />
                <p>creme brulee, ice cream</p>
                Chocolate & Coffee
                <input type="checkbox" name="sweet[]" value="Chocolate & Coffee" />
                <br />
                <p>coffee, chocolate</p>
              </div>
            </div>
          </form>
        </div>
      </div>
      <!-- results component -->

      <div class="searchResults">
        <br>
        <div class="spacerTwo row"></div>
        <h3 style="font-style: cursive" v-if="bestRes.length > 0">Our Top Selections:</h3>

        <div class="best-results results" v-for="best in bestRes">
          <results :wine="best"></results>
        </div>

        <h3 v-if="goodRes.length > 0">Good Pairs:</h3>
        <div class="good-results results" v-for="good in goodRes">
          <results :wine="good"></results>
        </div>
        <h3 v-if="results.length > 0">Pairs:</h3>
        <div class="results" v-for="result in results">
          <results :wine="result"></results>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  import Results from './Results'
  import Navbar from './Navbar'
  export default {
    name: 'Search',
    data() {
      return {

      }
    },
    components: {
      Navbar,
      Results
    },
    mounted() {
      this.$store.dispatch('authenticate');
    },
    methods: {
      getResults(foods) {
        this.$store.dispatch('getResults', foods);
      },
      getInputs() {
        var food = document.forms.searchForm;
        var arr = [];
        for (var i = 0; i < food.length; i++) {
          if (food[i].checked) {
            arr.push(food[i].value);
          }
        }
        this.getResults(arr);
      },
      toggle(wineId) {
        if (this.show) {
          this.show = false;
        } else {
          this.show = true;
        }
        this.wineId = wineId;
      }
    },
    computed: {
      bestRes() {
        return this.$store.state.bestRes;
      },
      goodRes() {
        return this.$store.state.goodRes;
      },
      results() {
        return this.$store.state.res;
      }

    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  .underly {
    background-color: #EADAC0
  }

  .results {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
  }

  .searchResults {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    background-color: rgba(87, 46, 60, 0.85);
  }

  h1 {
    font-style: oblique;
  }

  h2,
  h5 {
    font-weight: normal;
    text-shadow: 2px 1px black;

  }

  h3 {
    color: white;
    text-shadow: 2px 1px black;
    padding-top: 10px;
    padding-bottom: 10px;
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

  .meat {
    min-height: 100%;
    text-align: center;


  }

  .spacerOne {
    min-height: 2rem;
    background-color: rgba(87, 46, 60, 0.85);
    border: 3px groove black;
    border-radius: 2rem;
    width: 95%;
    margin-left: 20px;
  }

  .spacerTwo {
    min-height: 2rem;
    background-color:rgb(234, 218, 192);
    border: 3px groove black;
    border-radius: 2rem;
    width: 95%;
    margin-left: 20px;
  }

  .bottom-space {
    min-height: 2rem;
    background-color: rgba(87, 46, 60, 0.85);
    border: 3px groove black;
    width: 635px;
  }

  .vegMod {
    padding-left: 3rem;
    border-left: solid 3px rgba(87, 46, 60, 0.85);

  }

  .starchMod {
    border-left: solid 3px rgba(87, 46, 60, 0.85);
    border-right: solid 3px rgba(87, 46, 60, 0.85);
    padding-bottom: 20px;
  }

  .starch {
    border-right: solid 3px rgba(87, 46, 60, 0.85);
    border-left: solid 3px rgba(87, 46, 60, 0.85);
  }

  .background-1 {
    background-image: url(http://www.courtofmastersommeliers.org/wp-content/uploads/backgrounds-2.jpg);
    height: fit-content;
    background-size: cover;
    background-repeat: no-repeat;
    border: 4px solid black;
  }

  .background-2 {
    background-color: rgba(27, 24, 24, 0.15);
  }

  .col-sm-12 {
    color: white;
    text-shadow: 2px 1px black;
    align-self: center;
  }


  .col-sm-6 {
    color: white;
    text-shadow: 2px 1px black;
    align-self: center;
  }

  .col-sm-4 {
    color: white;
    text-shadow: 2px 1px black;
    align-self: center;
  }
</style>