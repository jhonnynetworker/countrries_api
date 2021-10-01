import * as React from 'react';
import { styled } from '@mui/material/styles';
import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';
import Typography from '@mui/material/Typography';
import ButtonBase from '@mui/material/ButtonBase';

import { useSelector, useDispatch } from "react-redux";

import {
    selectCountryData,
    selectDataAvailable,
    
  } from "../filter/filterSlice";

const Img = styled('img')({
  margin: 'auto',
  display: 'block',
  maxWidth: '100%',
  maxHeight: '100%',
});

export default function ComplexGrid() {
const country = useSelector(selectCountryData);
  const dataAvailable = useSelector(selectDataAvailable);
console.log(country)
    return (
        !dataAvailable 
        ? <h4>Select Favorite</h4>
    : <Paper sx={{ p: 2, margin: 'auto', maxWidth: 500, flexGrow: 1 }}>
      <Grid container spacing={2}>
        <Grid item>
          <ButtonBase sx={{ width: 128, height: 128 }}>
            <Img alt={country.name} src={country.flags[1]} />
          </ButtonBase>
        </Grid>
        <Grid item xs={12} sm container>
          <Grid item xs container direction="column" spacing={2}>
            <Grid item xs>
              <Typography gutterBottom variant="subtitle1" component="div">
                Name: {country.name}
              </Typography>
              <Typography variant="body2" gutterBottom>
                Population: {country.population}
              </Typography>
              <Typography variant="body2" color="text.secondary">
                Region: {country.region}
              </Typography>
            </Grid>
            <Grid item>
              <Typography sx={{ cursor: 'pointer' }} variant="body2">
                Remove
              </Typography>
            </Grid>
          </Grid>
          <Grid item>
            <Typography variant="subtitle1" component="div">
              Capital: {country.capital}
            </Typography>
          </Grid>
        </Grid>
      </Grid>
    </Paper>
  );
}
