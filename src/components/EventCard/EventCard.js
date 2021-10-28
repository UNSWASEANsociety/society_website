import MUICard from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Grid from "@material-ui/core/Grid";
import { makeStyles } from "@material-ui/core/styles";
import React from "react";
import { Link } from "react-router-dom";
import styles from "./EventCard.module.scss";
import IconButton from '@mui/material/IconButton';
import FavoriteIcon from '@mui/icons-material/Favorite';
import ShareIcon from '@mui/icons-material/Share';

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
    borderRadius: "25px",
    height: "100%",
    width: "100%",
    display: "flex",
    transition: "transform 0.2s",
    flexDirection: "column",
    paddingLeft: "10px",
    paddingRight: "10px",
    position: "relative"
  },
  cardMedia: {
    paddingTop: "56.25%", // 16:9
    paddingLeft: "95%", // 16:9
    width: "20%"
  },  
  cardContent: {
    flexGrow: 1,
  },
  footer: {
    backgroundColor: theme.palette.background.paper,
    padding: theme.spacing(6),
  },
}));

const Card = ({ image, to, children }) => {
  const classes = useStyles();
  const card = (
    <MUICard className={`${classes.card} ${styles.card}`}>
      <CardMedia
        className={classes.cardMedia}
        image={image}
        title="Image title"
      />
      <div 
        style={{
          position: "absolute",
          top: "20px",
          left: "20px"
        }}
      >
        <IconButton 
          aria-label="add to favorites" 
          style={{
            backgroundColor: "#E2C8E9"
          }}>
          <FavoriteIcon color="warning" />
        </IconButton>
        <IconButton 
          aria-label="share" 
          style={{
            backgroundColor: "#E2C8E9",
            marginLeft: "10px"
          }}
        >
          <ShareIcon />
        </IconButton>
      </div>
      
      <CardContent className={classes.cardContent}>{children}</CardContent>
    </MUICard>
  );

  return (
    <Grid item xs={12} sm={6} lg={4}>
      {to ? (
        <Link to={to} className={styles.link}>
          {card}
        </Link>
      ) : (
        card
      )}
    </Grid>
  );
};

export default Card;