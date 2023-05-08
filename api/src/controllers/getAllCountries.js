const axios = require("axios");
require("dotenv").config();
const { Country, Activity } = require("../db");
const { cleanArrayDb, cleanArrayApi } = require("../utils/utils");

const getAllCountries = async () => {
  const countriesDB = await Recipe.findAll({
    include: {
      model: Activity,
      attributes: ["name"],
      through: {
        attributes: [],
      },
    },
  });

  const countriesApi = (
    await axios(
      `https://api.spoonacular.com/recipes/complexSearch?apiKey=${API_KEY}&addRecipeInformation=true&number=100`
    )
  ).data.results;

  const dataBaseCountries = cleanArrayDb(countriesDB);
  const apiCountries = cleanArrayApi(countriesApi);

  return [...dataBaseCountries, ...apiCountries];
};

module.exports = getAllRecipes;
