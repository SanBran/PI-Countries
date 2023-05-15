const { Country, Activity } = require("../db");

const createActivity = async (
  name,
  difficulty,
  duration,
  season,
  countries
) => {
  let newActivity = await Activity.create({
    name,
    difficulty,
    duration,
    season,
  });

  let country = await Country.findAll({
    where: {
      name: countries,
    },
  });

  await newActivity.addCountry(country);

  return "Activity created.";
};

module.exports = createActivity;
