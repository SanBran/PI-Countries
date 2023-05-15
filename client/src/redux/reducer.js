import {
  GET_COUNTRIES,
  GET_COUNTRIES_BY_NAME,
  GET_DETAIL,
  GET_ACTIVITIES,
  ORDER_NAME,
  POST_ACTIVITY,
  ORDER_POPULATION,
  FILTER_CONTINENT,
  FILTER_ACTIVITY,
  CLEAN_DETAIL,
} from "./actions";

let initialState = {
  countries: [],
  countriesCopy: [],
  countryDetail: {},
  activities: [],
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_COUNTRIES:
      return {
        ...state,
        countries: action.payload,
        countriesCopy: action.payload,
      };

    case GET_COUNTRIES_BY_NAME:
      return { ...state, countriesCopy: action.payload };

    case GET_DETAIL:
      return { ...state, countryDetail: action.payload };

    case GET_ACTIVITIES:
      return { ...state, activities: action.payload };

    case POST_ACTIVITY:
      return { ...state };

    case ORDER_NAME:
      const allCountries = state.countriesCopy;
      let countriesOrderbyName = [];

      switch (action.payload) {
        case "Sort by Name":
          return {
            ...state,
            countriesCopy: allCountries,
          };
        case "A-Z":
          countriesOrderbyName = state.countriesCopy.sort((a, b) => {
            if (a.name > b.name) {
              return 1;
            }
            if (b.name > a.name) {
              return -1;
            }
            return 0;
          });

          return {
            ...state,
            countriesCopy: countriesOrderbyName,
          };
        case "Z-A":
          countriesOrderbyName = state.countriesCopy.sort((a, b) => {
            if (a.name > b.name) {
              return -1;
            }
            if (b.name > a.name) {
              return 1;
            }
            return 0;
          });
          return {
            ...state,
            countriesCopy: countriesOrderbyName,
          };
        default:
          break;
      }
    case ORDER_POPULATION:
      switch (action.payload) {
        case "Sort by Population":
          return {
            ...state,
            countries: state.countries,
          };
        case "Ascending":
          return {
            ...state,
            countries: state.countriesCopy.sort(
              (a, b) => a.population - b.population
            ),
          };
        case "Descending":
          return {
            ...state,
            countries: state.countriesCopy.sort(
              (a, b) => b.population - a.population
            ),
          };
        default:
          break;
      }

    case FILTER_CONTINENT:
      const filteredCountriesByContinent =
        action.payload === "Filter by Continent"
          ? state.countriesCopy
          : state.countriesCopy.filter(
              (country) => country.continent === action.payload
            );
      return {
        ...state,
        countries:
          action.payload === "Filter by Continent"
            ? state.countriesCopy
            : filteredCountriesByContinent,
      };

    case FILTER_ACTIVITY:
      const filteredCountriesByActivity =
        action.payload === "Filter by Activity"
          ? state.countriesCopy
          : state.countriesCopy.filter((country) =>
              country.activities.some(
                (activity) => activity.name === action.payload
              )
            );
      return {
        ...state,
        countries:
          action.payload === "Filter by Activity"
            ? state.countriesCopy
            : filteredCountriesByActivity,
      };

    case CLEAN_DETAIL:
      return {
        ...state,
        recipeDetail: {},
      };

    default:
      return { ...state };
  }
};

export default reducer;
