import React, { useState, useEffect } from "react";
import Select from "./Select";
import CountryApi from "../store/store";

const Countries = () => {
  const [countries, setCountries] = useState([]);
  const [regions, setRegions] = useState([]);
  const [selectedRegion, setSelectedRegion] = useState("");
  const [selectedCountry, setSelectedCountry] = useState(""); // selected country
  const [countryData, setCountryData] = useState({}); // selected country code
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchRegions = () => {
      const regions = CountryApi.getRegions();
      console.log(regions);
      setRegions(regions);
    };

    fetchRegions();
  }, []);

  useEffect(() => {
    const fetchCountries = () => {
      const countries = CountryApi.getCountriesFromRegion(selectedRegion);
      setCountries(countries);
      console.log("aqui", countries);
    };
    console.log("aqui", selectedRegion);
    fetchCountries();
  }, [selectedRegion]);

  useEffect(() => {
    const fetchCountriesData = () => {
      const countryData = CountryApi.getCountryByName(selectedCountry);
      if (selectedCountry !== "") {
        setCountryData(countryData);
        setIsLoading(false);
      }

      console.log("CountryData", countryData);
    };
    console.log("CountryData", selectedCountry);
    fetchCountriesData();
  }, [selectedCountry]);

  return (
    <>
      <Select
        optionsList={regions}
        setSelected={setSelectedRegion}
        title={"Select Region"}
      />

      <Select
        optionsList={countries}
        title={"Select Country"}
        setSelected={setSelectedCountry}
      />
      {isLoading && Object.keys(countryData).length <= 0 ? (
        <h1>Waiting for option</h1>
      ) : (
        <div className="country">
          <article>
            <div className="flag">
              <img src={countryData.flags[1]} alt={countryData.name} />
            </div>
            <br />
            <div className="details">
              <h4 className="country-name">
                Name: <span>{countryData.name}</span>
              </h4>
              <h4>
                Population:{" "}
                <span>{countryData.population.toLocaleString()}</span>
              </h4>
              <h4>
                Region: <span>{countryData.region}</span>
              </h4>
              <h4>
                Capital: <span>{countryData.capital}</span>
              </h4>
            </div>
          </article>
        </div>
      )}
    </>
  );
};

export default Countries;
