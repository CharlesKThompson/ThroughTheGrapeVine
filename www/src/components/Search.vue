<template>
  <div>
    <form action="food-selector" method="GET">

      <h2>What are you dining with?</h2>
      <br />
      <h3>Meat</h3>
      Red Meat
      <input type="checkbox" name="meat[]" value="Red Meat" />
      <br />
      <p>beef, lamb, venison</p>
      Cured Meat
      <input type="checkbox" name="meat[]" value="Cured Meat" />
      <br />
      <p>salami, proscuitto, bresaola, bacon</p>
      Pork
      <input type="checkbox" name="meat[]" value="Pork" />
      <br />
      <p>roast, tenderloin, pork chop</p>
      Poultry
      <input type="checkbox" name="meat[]" value="Poultry" />
      <br />
      <p>chicken, duck, turkey</p>
      Mollusk
      <input type="checkbox" name="meat[]" value="Mollusk" />
      <br />
      <p>oyster, mussel, clam</p>
      Fish
      <input type="checkbox" name="meat[]" value="Fish" />
      <br />
      <p>tune, cod, trout, bass</p>
      Lobster & Shellfish
      <input type="checkbox" name="meat[]" value="Lobster & Shellfish" />
      <br />
      <p>prawn, crab, langoustine</p>

      <h3>Dairy</h3>
      Soft Cheese & Cream
      <input type="checkbox" name="dairy[]" value="Soft Cheese & Cream" />
      <br />
      <p>brie, mascarpone, creme fraiche</p>
      Hard Cheese
      <input type="checkbox" name="dairy[]" value="Hard Cheese" />
      <br />
      <p>cheddar, pecorino, manchego, asiago, parmesan</p>
      Pungent Cheese
      <input type="checkbox" name="dairy[]" value="Pungent Cheese" />
      <br />
      <p>bleu, gorganzola, stilton, roquefort</p>

      <h3>Vegetable</h3>
      Alliums
      <input type="checkbox" name="vegetable[]" value="Alliums" />
      <br />
      <p>onion, shallot, garlic, scallion</p>
      Green Vegetables
      <input type="checkbox" name="vegetable[]" value="Green Vegetables" />
      <br />
      <p>green bean, kale, lettuce</p>
      Root Vegetables (& Squash)
      <input type="checkbox" name="vegetable[]" value="Root Vegetables (& Squash)" />
      <br />
      <p>turnip, butternut, pumpkin, delicata, carrot</p>
      Nightshades
      <input type="checkbox" name="vegetable[]" value="Nightshades" />
      <br />
      <p>tomato, eggplant, bell pepper</p>
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

      <h3>Starch</h3>
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

      <h3>Sweet</h3>
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
      <p>cofee, chocolate</p>

      <input type="submit" value="Submit">
    </form>
  </div>
</template>

<script>

</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  h1,
  h2 {
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