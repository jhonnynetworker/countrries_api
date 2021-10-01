import { createSlice } from '@reduxjs/toolkit';
import countriesData from './countries.json'

const initialState = {
    countries: [],
    countriesByRegion: countriesData,
    favorites: [],
    favoritesByFilter: [],
    countryData: {},
    selectDataAvailable: false
};
export const filterSlice = createSlice({
    name: 'filter',
    initialState,
    
    reducers: {
      
      searchCountries: (state, action) => {
        console.log('aqui o action', state, action.payload);
        if (action.payload) {
          const filteredCountries = state.countriesByRegion.filter((country) =>
              Object.values(country)
                  .join("")
                  .toLowerCase()
                  .includes(action.payload.toLowerCase())
          )
          state.countries = filteredCountries
      }
      },
      searchFavorites: (state, action) => {
        console.log('aqui o action', state, action.payload);
        if (action.payload) {
          const filteredCountries = state.favoritesByFilter.filter((country) =>
              Object.values(country)
                  .join("")
                  .toLowerCase()
                  .includes(action.payload.toLowerCase())
          )
          state.favorites = filteredCountries
      }
      },
      filterByRegion: (state, action) => {
        console.log(action.payload)
        const region = action.payload
        state.countriesByRegion = countriesData
        state.countries = countriesData

        if (region) {
            const filterCountries = countriesData.filter(country => {
                return country.continent === region
            })

            state.countriesByRegion = filterCountries
            state.countries = filterCountries
        }else{
state.countries = []
        }
    },
    addToFavorites: (state, action) => {
      if(state.favorites.includes(action.payload.name)){
        return
      }
      state.favorites.push(action.payload.name)
      state.favoritesByFilter.push(action.payload.name)
    },
    removeFromFavorites: (state, action) => {
      console.log("action remove",action.payload)
      
      state.favorites = state.favorites.filter(country => {
        console.log(country.name)
        return country !== action.payload})
      state.favoritesByFilter = state.favoritesByFilter.filter(country => country !== action.payload)
    },
    setSelectedCountry: (state, action) => {
      console.log("select", action.payload)
      state.countryData = countriesData.filter(country => country.name === action.payload)[0]
      state.dataAvailable = true
    },
    },
  });
  
  export const { searchCountries,
    searchFavorites, 
    filterByRegion, 
    addToFavorites, 
    removeFromFavorites,
    setSelectedCountry,
    clearCountryDetail
  } = filterSlice.actions;
  
  export const selectCountries = (state) => state.filter.countries;
  export const selectFavorites = (state) => state.filter.favorites;
  export const selectCountryData = (state) => state.filter.countryData;
  export const selectDataAvailable = (state) => state.filter.dataAvailable;

  export default filterSlice.reducer;



  