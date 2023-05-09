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

  let countrie = await Country.findAll({
    where: {
      name: countries,
    },
  });

  await newActivity.addCountry(countrie);

  return "Activity created.";
};

module.exports = createActivity;
