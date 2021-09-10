import React from "react";
import "./HarryPotterCard.css";
import { makeStyles } from "@material-ui/core/styles";
import { Card, CardContent, CardMedia, Typography } from "@material-ui/core"; //download material ui instructions are in codeJournal
const useStyles = makeStyles({
  root: {
    //   minWidth: '40%',

    maxWidth: '40%',
    margin: '10px',
    backgroundColor: 'rgb(142, 151, 58)',
    
    boxShadow: '8px 8px 15px 1px rgba(237, 245, 171, 0.5)'
  },
  title: {
    fontFamily: 'montserrat'

  },
  content: {
      color: 'white',
      fontFamily: 'montserrat'

  },
  media: {
    padding: '5%',
    maxWidth: '100%'

  },
  metadata: {
      display: 'flex',
      justifyContent: 'space-evenly'
  }
});

const HarryPotterCard = (props) => {
  const classes = useStyles();
  const {
    movieTitle,
    year,
    id,
    poster,
    imdbRating,
    metascore,
    actors,
    runtime,
    director,
    plot,
  } = props;

  return (
    <Card key={id} className={classes.root}>
      <CardContent className={classes.content}>
        <Typography className={classes.title} gutterBottom variant="h5" component="h2">
          {movieTitle}
        </Typography>
        <Typography component="p">
          {plot}
        </Typography>
        <CardMedia className={classes.media} title="Movie Poster">
          <img src={poster} alt="movie poster" />
        </CardMedia>
        <Typography  component="h2">
          Release Date: {year}
        </Typography>
        <Typography component="p">
          Runtime: {runtime}
        </Typography>
        <Typography  component="h2">
          Director: {director}
        </Typography>
        <Typography  component="h2">
          Cast: {actors}
        </Typography>
        <Typography className={classes.metadata} component="h3">
          <Typography>Rotten Tomatoes: {metascore} </Typography>
          <Typography>imdb Rating: {imdbRating}</Typography>
        </Typography>
      </CardContent>
    </Card>
  );
};

export default HarryPotterCard;
