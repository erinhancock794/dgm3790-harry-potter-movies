import React from "react";
import "./HarryPotterCard.css";
import { makeStyles } from "@material-ui/core/styles";
import { Card, CardContent, CardMedia, Typography } from "@material-ui/core"; //download material ui instructions are in codeJournal
const useStyles = makeStyles({
  root: {
    //   margin: '0 auto',
    maxWidth: '400px',
    margin: '20px',
      display: 'grid',
    //   flexDirection: 'column',
    // gridTemplateColumns: 'auto auto auto',
    backgroundColor: 'blue',
  },
  content: {
      color: 'white'
  },
  media: {
    padding: '5%',
    maxWidth: '100%'

  },
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
        <Typography gutterBottom variant="h5" component="h2">
          {movieTitle}
        </Typography>
        <Typography variant="body2" component="h2">
          Release Date: {year}
        </Typography>
        <Typography variant="body2" component="p">
          Runtime: {runtime}
        </Typography>
        <Typography variant="body2" component="h2">
          Director: {director}
        </Typography>
        <Typography variant="body2" component="h2">
          Cast: {actors}
        </Typography>
        <CardMedia className={classes.media} title="Movie Poster">
          <img src={poster} alt="movie poster" />
        </CardMedia>
        <Typography variant="body2" component="p">
          {plot}
        </Typography>
        <Typography variant="body2" color="white" component="h3">
          <Typography>Rotten Tomatoes: {metascore} </Typography>
          <Typography>imdb Rating: {imdbRating}</Typography>
        </Typography>
      </CardContent>
    </Card>
  );
};

export default HarryPotterCard;
