import Container from "@material-ui/core/Container";
import Grid from "@material-ui/core/Grid";
import Hidden from "@material-ui/core/Hidden";
import { withStyles } from "@material-ui/core/styles";
import PropTypes from "prop-types";
import React from "react";
import Image from "next/image"

const styles = (theme) => ({
  root: {
    marginTop: theme.spacing(10),
    marginBottom: 0,
    display: "flex",
  },
  cardWrapper: {
    zIndex: 1,
  },
  card: {
    display: "flex",
    justifyContent: "center",
    backgroundColor: "#FFC956",
    color: "black",
    padding: theme.spacing(8, 3),
  },
  cardContent: {
    maxWidth: 400,
    minHeight: 170,
  },
  button: {
    width: "100%",
  },
  imagesWrapper: {
    position: "relative",
  },
  image: {
    position: "absolute",
    top: -28,
    left: -135,
    right: 0,
    bottom: 0,
    width: "100%",
    maxWidth: 600,
  },
});

function CardOnCard(props) {
  const { classes, image, children } = props;

  return (
    <Container className={classes.root} component="section">
      <Grid container>
        <Grid item xs={12} md={6} className={classes.cardWrapper}>
          <div className={classes.card}>
            <div className={classes.cardContent}>
              {children}
            </div>
          </div>
        </Grid>
        <Grid item xs={12} md={6} className={classes.imagesWrapper}>
          <Hidden smDown>
            <div className={classes.imageDots} />
            <img src={image} alt="card on card" className={classes.image} />
          </Hidden>
        </Grid>
      </Grid>
    </Container>
  );
}

CardOnCard.propTypes = {
  classes: PropTypes.object.isRequired,
};

CardOnCard.defaultProps = {
  image: "https://source.unsplash.com/random",
}

export default withStyles(styles)(CardOnCard);
