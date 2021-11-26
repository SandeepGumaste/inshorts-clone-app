import { Box } from "@material-ui/core";
import Header from "./components/Header";
import { makeStyles } from "@material-ui/core/styles";
import InfoHeader from "./components/InfoHeader";
import Articles from "./components/Articles";

const useStyles = makeStyles((theme) => ({
  container: {
    marginTop: 110,
    width: "59%",
    margin: "0 auto",
    [theme.breakpoints.down("md")]: {
      width: "75%",
    },
    [theme.breakpoints.down("sm")]: {
      width: "90%",
    },
  },
}));
function App() {
  const classes = useStyles();
  return (
    <Box>
      <Header />
      <Box className={classes.container}>
        <InfoHeader />
        <Articles />
      </Box>
    </Box>
  );
}

export default App;
