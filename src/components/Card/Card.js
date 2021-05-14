import Button from "@material-ui/core/Button";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Grid from "@material-ui/core/Grid";
import { makeStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import React from "react";
import { Link } from "react-router-dom";
import MUICard from "@material-ui/core/Card";

const useStyles = makeStyles((theme) => ({
  icon: {
    marginRight: theme.spacing(2),
  },
  heroContent: {
    backgroundColor: theme.palette.background.paper,
    padding: theme.spacing(8, 0, 6),
  },
  heroButtons: {
    marginTop: theme.spacing(4),
  },
  cardGrid: {
    paddingTop: theme.spacing(8),
    paddingBottom: theme.spacing(8),
  },
  card: {
    height: "100%",
    display: "flex",
    flexDirection: "column",
  },
  cardMedia: {
    paddingTop: "56.25%", // 16:9
  },
  cardContent: {
    flexGrow: 1,
  },
  footer: {
    backgroundColor: theme.palette.background.paper,
    padding: theme.spacing(6),
  },
}));

const Card = ({image, children}) => {
  const classes = useStyles();

  return (
    <Grid item xs={12} sm={6} md={4}>
      <MUICard className={classes.card}>
        <CardMedia
          className={classes.cardMedia}
          image={image}
          title="Image title"
        />
        <CardContent className={classes.cardContent}>
         {children}
        </CardContent>
        <CardActions>
          <Link to="/article/5">
            <Button size="small" color="primary">
              View
            </Button>
          </Link>
          <Button size="small" color="primary">
            Edit
          </Button>
        </CardActions>
      </MUICard>
    </Grid>
  );
};

export default Card;
