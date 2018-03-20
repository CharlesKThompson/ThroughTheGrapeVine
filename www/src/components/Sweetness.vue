<template>
    <div>
        <navbar></navbar>
        <div class="sweetness">
            <div class="universal">
                <div class="red-chart">
                    <!-- <img src="http://i63.tinypic.com/14tsevc.jpg" alt="red wine sweetness chart"> -->
                </div>
                <h1>Red Wine Sugar</h1>
                <div class="red-sugar row">
                    <div class="card text-white mb-3" style="max-width: 17rem;">
                        <h3> Very Dry</h3>
                        <div class="card-body">
                            <p class="card-text">Examples: Bordeaux, Chianti, Montepulciano</p>
                            <p class="card-text2">Generarlly 0-5 grams of residual sugar per liter</p>
                            <h5 class="card-title">
                                <i class="fas fa-cube"></i>
                            </h5>
                        </div>
                    </div>
                    <div class="card text-white" style="max-width: 17rem;">
                        <h3> Off Dry</h3>
                        <div class="card-body">
                            <p class="card-text">Examples: Beaujolias, Burgandy, Caberet Franc, Sangiovese, Valpolicella</p>
                            <p class="card-text2">Generarlly 5-10 grams of residual sugar per liter</p>
                            <h5 class="card-title">
                                <i class="fas fa-cube"></i>
                                <i class="fas fa-cube"></i>
                            </h5>
                        </div>
                    </div>
                    <div class="card text-white" style="max-width: 17rem;">
                        <h3> Medium</h3>
                        <div class="card-body">
                            <p class="card-text">Examples: Caberet Sauvignon, Grenache, Malbec, Merlot, Shiraz/Syrah, Zinfandel</p>
                            <p class="card-text2">Generarlly 10-20 grams of residual sugar per liter</p>
                            <h5 class="card-title">
                                <i class="fas fa-cube"></i>
                                <i class="fas fa-cube"></i>
                                <i class="fas fa-cube"></i>
                            </h5>
                        </div>
                    </div>
                    <div class="card text-white" style="max-width: 17rem;">
                        <h3> Sweet</h3>
                        <div class="card-body">
                            <p class="card-text">Examples: Port, Maury</p>
                            <p class="card-text2">Generarlly 20-30 grams of residual sugar per liter</p>
                            <h5 class="card-title">
                                <i class="fas fa-cube"></i>
                                <i class="fas fa-cube"></i>
                                <i class="fas fa-cube"></i>
                                <i class="fas fa-cube"></i>
                            </h5>
                        </div>
                    </div>
                    <div class="card text-white" style="max-width: 17rem;">
                        <h3> Very Sweet</h3>
                        <div class="card-body">
                            <p class="card-text">Examples: Ice Wine, Tawny Port</p>
                            <p class="card-text2">Generarlly 30+ grams of residual sugar per liter</p>
                            <h5 class="card-title">
                                <i class="fas fa-cube"></i>
                                <i class="fas fa-cube"></i>
                                <i class="fas fa-cube"></i>
                                <i class="fas fa-cube"></i>
                                <i class="fas fa-cube"></i>
                            </h5>
                        </div>
                    </div>
                </div>
                <div class="white-chart">
                    <img src="http://winefolly.com/wp-content/uploads/2015/08/wine-sweetness-chart-white.png" alt="">
                </div>
                <h1>White Wine Sugar</h1>
                <div class="white-sugar row">
                    <div class="card-b" style="max-width: 17rem;">
                        <h3>Very Dry</h3>
                        <div class="card-body">
                            <h5 class="card-title">Examples: Chenin Blanc, Pinot Grigio</h5>
                            <p class="card-text">Generallay 0-5 grams if residual sugar per liter</p>
                            <h5>
                                <i class="fas fa-cube"></i>
                            </h5>
                        </div>
                    </div>
                    <div class="card-b" style="max-width: 17rem;">
                        <h3>Off Dry</h3>
                        <div class="card-body">
                            <h5 class="card-title">Examples: Chardonnay, Pinot Gris, Sauvignon Blanc, Semillon</h5>
                            <p class="card-text">Generallay 5-10 grams if residual sugar per liter</p>
                            <h5>
                                <i class="fas fa-cube"></i>
                                <i class="fas fa-cube"></i>
                            </h5>
                        </div>
                    </div>
                    <div class="card-b" style="max-width: 17rem;">
                        <h3>Medium</h3>
                        <div class="card-body">
                            <h5 class="card-title">Examples: Gewurztraminer, Moscato/Muscat, Riesling</h5>
                            <p class="card-text">Generallay 10-20 grams if residual sugar per liter</p>
                            <h5>
                                <i class="fas fa-cube"></i>
                                <i class="fas fa-cube"></i>
                                <i class="fas fa-cube"></i>
                            </h5>
                        </div>
                    </div>
                    <div class="card-b" style="max-width: 17rem;">
                        <h3>Sweet</h3>
                        <div class="card-body">
                            <h5 class="card-title">Examples: Sauternes</h5>
                            <p class="card-text">Generallay 20-30 grams if residual sugar per liter</p>
                            <h5>
                                <i class="fas fa-cube"></i>
                                <i class="fas fa-cube"></i>
                                <i class="fas fa-cube"></i>
                                <i class="fas fa-cube"></i>
                            </h5>
                        </div>
                    </div>
                    <div class="card-b" style="max-width: 17rem;">
                        <h3>Very Sweet</h3>
                        <div class="card-body">
                            <h5 class="card-title">Examples: Ice Wine, White Port, Vin Santo</h5>
                            <p class="card-text">Generallay 30+ grams if residual sugar per liter</p>
                            <h5>
                                <i class="fas fa-cube"></i>
                                <i class="fas fa-cube"></i>
                                <i class="fas fa-cube"></i>
                                <i class="fas fa-cube"></i>
                                <i class="fas fa-cube"></i>
                            </h5>
                        </div>
                    </div>
                </div>
            </div>


        </div>
    </div>
</template>

<script>
    import Navbar from './Navbar'

    export default {
        name: 'Sweetness',
        data() {
            return {

            }
        },
        components: {
            Navbar
        },
        mounted() {
            this.$store.dispatch('authenticate');
        }
    }
</script>

<style>
    .sweetness {
        background-image: url(https://images.unsplash.com/photo-1504000862552-65badf4afe88?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=f3950e184c95b475d8e1e684ea4bd72e&auto=format&fit=crop&w=700&q=80);
        /* background-image: url(https://media.gettyimages.com/photos/pink-water-splash-picture-id163520693?b=1&k=6&m=163520693&s=612x612&w=0&h=ctmdLR-MxfF7w5M86nhF_iZuRM0n074Bia6BXZX1KKg=); */
        background-repeat: repeat;
        height: fit-content;
    }

    /* .col-sm-4 {
        display: flex;
        justify-content: center;
    }

    .col-sm-6 {
        display: flex;
        justify-content: center;
    } */

    h1 {
        color: #dfb88f;
    }

    .red-chart {
          /* width: 100%; */
          background-image: url(http://i63.tinypic.com/14tsevc.jpg);
          background-repeat: no-repeat;
          background-size: cover;
          max-height: 100vh;
          min-height: 50vh;
    }

     /* .white-chart {
    } */

    .red-sugar {
        justify-content: space-around;
        margin-bottom: 50px;
    }

    .white-sugar {
        justify-content: space-around;
        color: white;
    }

    .card {
        background-color: #731210da;
        padding-top: 25px;
        border: 2px ridge #dfb88f;
        margin-top: 30px;
        margin-bottom: 30px;
    }

    .card-b{
        background-color: #d16e40b2;
        padding-top: 25px;
        border: 2px ridge black;
        margin-top: 30px;
        margin-bottom: 30px;
    }
</style>