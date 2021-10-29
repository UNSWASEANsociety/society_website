import { Grid, Paper } from "@material-ui/core";
import React from "react";
import { Block } from "../src/components/Block";
import { makeStyles } from "@material-ui/core/styles";
import Form from "../src/page_sections/Register/Form";

const useStyles = makeStyles((theme) => ({
  root: {
    "& .MuiTextField-root": {
      // marginTop: theme.spacing(2),
      // marginBottom: theme.spacing(1),
      width: "100%", // Fix IE 11 issue.
      marginTop: theme.spacing(3),
    },
  },
}));

export default function Register() {
  const classes = useStyles();
  const paperStyle = {
    padding: 20,
    // height: "95vh",
    width: 500,
    margin: "20px auto ",
    borderRadius: "20px",
  };

  return (
    <Block>
      <Grid>
        <Paper elevation={10} style={paperStyle}>
          <Grid align="center">
            <h1
              style={{
                fontWeight: "lighter",
                fontSize: "2rem",
                fontFamily: "Georgia",
              }}
            >
              Registeration
            </h1>
            <Form formStyle={classes.root} />
          </Grid>
        </Paper>
      </Grid>
    </Block>
  );
}
