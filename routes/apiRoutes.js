const request = require("request");
module.exports = (app) => {
    app.post('/api/post', (req, res) => {
        let pokemonName = req.body.pokemonName;
        pokemonName = pokemonName.toLowerCase();
        console.log(pokemonName);
        let options = {
            method: "GET",
            url: `https://api.pokemontcg.io/v1/cards?name=${pokemonName}`
        };
        request(options, (error, response, body) => {
            if (error) {
                if (response.statusCode == "404") {
                    console.log("not a pokemon name");
                }
                console.log("there was an error");
            } else {
                let info = (JSON.parse(body));
            }

        })
    })
};