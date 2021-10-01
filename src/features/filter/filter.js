import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import List from "@mui/material/List";
import Box from "@mui/material/Box";
import StarIcon from "@mui/icons-material/Star";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import CountryDetail from "../countryDetail/CountryDetail";

import {
  searchCountries,
  selectCountries,
  filterByRegion,
  selectFavorites,
  addToFavorites,
  selectCountryData,
  selectDataAvailable,
} from "./filterSlice";
//import CountryApi from "../store/data-api"
//import store from "../store/index.js"
//import { getCountryByRegionAction } from "../actions/actions.js"

const Filter = ({
  searchInput,
  // setSearchInput,
  setFiltered,
  setCountries,
  // countries,
}) => {
  const regions = [
    {
      name: "Filter by region",
      desc: "",
    },
    {
      name: "Africa",
      desc: "Africa",
    },
    {
      name: "Americas",
      desc: "Americas",
    },
    {
      name: "Asia",
      desc: "Asia",
    },
    {
      name: "Europe",
      desc: "Europe",
    },
    {
      name: "Oceania",
      desc: "Oceania",
    },
  ];

  const handleSubmit = (e) => {
    e.preventDefault();
  };
  //const count = useSelector(selectCount);
  const dispatch = useDispatch();
  const countries = useSelector(selectCountries);
  const countryData = useSelector(selectCountryData);
  const dataAvailable = useSelector(selectDataAvailable);
  return (
    <Box
      sx={{ marginLeft: "500px", width: "100%", bgcolor: "background.paper" }}
    >
      <form className="form" id="form" onSubmit={handleSubmit}>
        <Box sx={{ width: "100%", maxWidth: 500, marginBottom: 5 }}>
          <CountryDetail />
        </Box>

        <Box sx={{ width: "100%", maxWidth: 360, bgcolor: "background.paper" }}>
          <input
            type="search"
            name="search"
            id="search"
            autoComplete="off"
            placeholder="Search Country"
            onChange={(e) => dispatch(searchCountries(e.target.value))}
            //onChange={(e) => searchCountries(e.target.value)}
          />

          <select
            name="select"
            id="select"
            //onChange={(e) => setSelectedRegion(e.target.value)}
            onChange={(e) => dispatch(filterByRegion(e.target.value))}
            value={regions.name}
          >
            {regions.map(region => <option value={region.desc}>{region.name}</option>)}
          </select>

          <List>
            {countries.map((country) => (
              <div style={{ display: "flex" }}>
                <ListItemButton
                  onClick={() => dispatch(addToFavorites(country))}
                >
                  <ListItemIcon>
                    <StarIcon />
                  </ListItemIcon>
                  <li>{country.name}</li>
                </ListItemButton>
              </div>
            ))}
          </List>
        </Box>

        <Box sx={{ width: "50%", bgcolor: "background.paper" }}></Box>
      </form>
    </Box>
  );
};

export default Filter;
