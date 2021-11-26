import React from "react";
import { AppBar, Toolbar, makeStyles } from "@material-ui/core";
import MenuIcon from "@material-ui/icons/Menu";

const useStyles = makeStyles({
  header: {
    height: 70,
    backgroundColor: "#fff",
  },
  logo: {
    height: 55,
    margin: "auto",
  },
  menu: {
    color: "#000",
  },
});

const Header = (props) => {
  const classes = useStyles();
  const url =
    "https://assets.inshorts.com/website_assets/images/logo_inshorts.png";
  return (
    <AppBar className={classes.header}>
      <Toolbar>
        <MenuIcon className={classes.menu} />
        <img src={url} alt="logo" className={classes.logo} />
      </Toolbar>
    </AppBar>
  );
};

export default Header;
