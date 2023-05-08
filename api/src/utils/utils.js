const cleanResApi = (res) => {
  const clean = {
    id: res.id,
    name: res.title,
    image: res.image,
    summary: res.summary,
    healthScore: res.healthScore,
    diets: res.diets,
    steps: res.analyzedInstructions[0]?.steps.map((e) => e.step).join(" "),
    created: false,
  };

  return clean;
};

const cleanResDatabase = (res) => {
  const clean = {
    id: res.id,
    name: res.name,
    image: res.image,
    summary: res.summary,
    healthScore: res.healthScore,
    diets: res.diets?.map((e) => e.name),
    steps: res.steps,
    created: true,
  };

  return clean;
};

const cleanArrayDb = (arr) => {
  const clean = arr.map((e) => {
    return {
      id: e.id,
      name: e.name,
      image: e.image,
      continent: e.region,
      capitals: e.capital[0]?.map((e) => e.capital),
      subregion: e.subregion[0]?.map((e) => e.name),
      area: e.area[0]?.map((e) => e.area),
      papulation: e.papulation,
    };
  });
  return clean;
};

const cleanArrayApi = (arr) => {
  const clean = arr.map((e) => {
    return {
      id: e.id,
      name: e.name,
      image: e.image,
      continent: e.region,
      capitals: e.capital[0]?.map((e) => e.capital),
      subregion: e.subregion[0]?.map((e) => e.name),
      area: e.area[0]?.map((e) => e.area),
      papulation: e.papulation,
    };
  });
  return clean;
};

module.exports = { cleanResApi, cleanResDatabase, cleanArrayDb, cleanArrayApi };
