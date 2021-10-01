import * as React from "react";
import Box from "@mui/material/Box";
import Drawer from "@mui/material/Drawer";
import CssBaseline from "@mui/material/CssBaseline";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import List from "@mui/material/List";
import Typography from "@mui/material/Typography";
import Divider from "@mui/material/Divider";
import ListItem from "@mui/material/ListItem";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import HighlightOffIcon from "@mui/icons-material/HighlightOff";
import ListItemButton from "@mui/material/ListItemButton";
import VisibilityIcon from "@mui/icons-material/Visibility";

import { useSelector, useDispatch } from "react-redux";
import {
  selectFavorites,
  removeFromFavorites,
  searchFavorites,
  setSelectedCountry,
} from "../filter/filterSlice";
const drawerWidth = 240;

export default function SideBar() {
  const dispatch = useDispatch();
  const favorites = useSelector(selectFavorites);
  let countryData = React.useState({});
  let data = false;

  return (
    <Box sx={{ display: "flex" }}>
      <CssBaseline />
      <AppBar
        position="fixed"
        sx={{ width: `calc(100% - ${drawerWidth}px)`, ml: `${drawerWidth}px` }}
      >
        <Toolbar>
          <Typography variant="h6" noWrap component="div">
            2 - React Countries Project - with Redux store + Material UI
          </Typography>
        </Toolbar>
      </AppBar>
      <Drawer
        sx={{
          width: drawerWidth,
          flexShrink: 0,
          "& .MuiDrawer-paper": {
            width: drawerWidth,
            boxSizing: "border-box",
          },
        }}
        variant="permanent"
        anchor="left"
      >
        <Toolbar />
        Favorites
        <input
          type="search"
          name="search"
          id="search"
          autoComplete="off"
          placeholder="Search Country"
          onChange={(e) => dispatch(searchFavorites(e.target.value))}
          //onChange={(e) => searchCountries(e.target.value)}
        />
        <Divider />
        <List>
          {favorites.map((country, index) => (
            <ListItem key={country}>
              <ListItemButton
                onClick={() => {
                  dispatch(setSelectedCountry(country));
                }}
              >
                <VisibilityIcon />
              </ListItemButton>
              <ListItemButton
                onClick={() => dispatch(removeFromFavorites(country))}
              >
                <HighlightOffIcon />
              </ListItemButton>
              <ListItemText primary={country} />
            </ListItem>
          ))}
        </List>
      </Drawer>
      <Box
        component="main"
        sx={{ flexGrow: 1, bgcolor: "background.default", p: 3 }}
      >
        <Toolbar />
      </Box>
    </Box>
  );
}
