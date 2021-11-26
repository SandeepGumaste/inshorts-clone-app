import React from "react";
import {
  CardContent,
  Card,
  Grid,
  Typography,
  makeStyles,
} from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  rightContainer: {
    margin: "5px 0 0 -50px",
    display: "flex",
    flexDirection: "column",
    marginBottom: "10px",
    [theme.breakpoints.down("sm")]: {
      margin: "5px 0",
    },
  },
  image: {
    height: 268,
    width: "80%",
    borderRadius: 5,
    objectFit: "cover",
    [theme.breakpoints.down("sm")]: {
      width: "100%",
    },
  },
  component: {
    marginBottom: 20,
  },
  container: {
    padding: "8px",
    paddingBottom: "4px !important",
  },
  title: {
    color: "#44444d",
    fontWeight: 300,
    fontSize: 22,
    lineHeight: "27px",
  },
  author: {
    fontSize: "12px",
    color: "#808290",
    lineHeight: "22px",
  },
  description: {
    lineHeight: "22px",
    color: "#44444d",
    margin: "5px",
  },
  publisher: {
    fontSize: 12,
    marginTop: "auto",
  },
}));

const Article = ({ article }) => {
  const { author, description, link, publisher, timestamp, title, url } =
    article;
  const classes = useStyles();
  return (
    <Card className={classes.component}>
      <CardContent className={classes.container}>
        <Grid container>
          <Grid item lg={5} md={5} sm={12} xs={12}>
            <img src={url} alt="article img" className={classes.image} />
          </Grid>
          <Grid
            item
            lg={7}
            md={7}
            sm={12}
            xs={12}
            className={classes.rightContainer}
          >
            <Typography className={classes.title}>{title}</Typography>
            <Typography className={classes.author}>
              <b>short</b> by {author} /{new Date(timestamp).toDateString()}
            </Typography>
            <Typography className={classes.description}>
              {description}
            </Typography>
            <Typography className={classes.publisher}>
              read more at &nbsp;
              <a
                href={link}
                rel="noreferrer"
                target="_blank"
                style={{ textDecoration: "none" }}
              >
                {publisher}
              </a>
            </Typography>
          </Grid>
        </Grid>
      </CardContent>
    </Card>
  );
};

export default Article;
