import React from "react";
import { Box, Typography, makeStyles } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  container: {
    backgroundColor: "#f44336",
    color: "#fff",
    height: 48,
    display: "flex",
    alignItems: "center",
    marginBottom: "30px",
    [theme.breakpoints.down("md")]: {
      display: "none",
    },
  },
  logo: {
    height: 34,
    "&:last-child": {
      margin: "0 50px 0 20px",
    },
  },
  text: {
    fontWeight: 300,
    fontSize: 14,
    paddingLeft: 50,
  },
}));
const InfoHeader = () => {
  const classes = useStyles();
  const appleStore =
    "https://assets.inshorts.com/website_assets/images/appstore.png";
  const googleStore =
    "https://assets.inshorts.com/website_assets/images/playstore.png";

  return (
    <Box className={classes.container}>
      <Typography
        className={classes.text}
        style={{ fontWeight: 300, fontSize: "14px" }}
      >
        For the best experience use <b style={{ fontWeight: 400 }}>inshorts</b>{" "}
        app on your smartphone
      </Typography>
      <Box style={{ marginLeft: "auto" }}>
        <img src={appleStore} alt="apple" className={classes.logo} />
        <img src={googleStore} alt="google" className={classes.logo} />
      </Box>
    </Box>
  );
};

export default InfoHeader;
