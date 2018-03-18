<template>
    <div>
        <navbar></navbar>
        <div class="sweetness">
            <div class="universal">
                <h2>Sugars calories for all wine classes</h2>
                <div class="calories">
                    <div>
                        <h5>Dry</h5>
                        <p>Sugars: 0 to 6</p>
                        <p>Examples: Dry Red and White Wines, Lambrusco Secco, Demi-Sec Vouvray</p>
                    </div>
                    <div>
                        <h5>Off Dry</h5>
                        <p>Sugars: 6 to 12</p>
                        <p>Examples: Extra-Dry Champagne, Lambrusco Secco, Demi-Sec Vouvray</p>
                    </div>
                    <div>
                        <h5>Medium Dry/Semi-Sweet</h5>
                        <p>Sugars: 12 to 30</p>
                        <p>Examples: Sweet Riesling, Demi-Sec Champagne, Dry Champagne, Demi-Sec Vouvray, Sercial Madeira, Lambrusco
                            Semisecco, Lambrusco Amabile</p>
                    </div>
                    <div>
                        <h5>Medium Sweet</h5>
                        <p>Sugars: 30 to 72</p>
                        <p>Examples: Sweet Riesling, Port, Madeira, Brachetto D'Acqui, Moscato D'Asti & Muscat De Beaumes-De-Venise,
                            Lambrusco Dolce, Recioto Della Valpolicella</p>
                    </div>
                    <div>
                        <h5>Sweet/Very Sweet</h5>
                        <p>Sugars: more than 72</p>
                        <p>Examples: German TBA Riesling & Eiswein, Rutherglen Muscat, Tokaji Aszu, Sauternes, Recioto Della
                            Valpolicella
                        </p>
                    </div>

                </div>
            </div>
            <div class="red-chart">
                <img src="http://i63.tinypic.com/14tsevc.jpg" alt="red wine sweetness chart">

            </div>
            <div class="white-chart">
                <img src="http://winefolly.com/wp-content/uploads/2015/08/wine-sweetness-chart-white.png" alt="">
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
        }
    }
</script>

<style>
</style>