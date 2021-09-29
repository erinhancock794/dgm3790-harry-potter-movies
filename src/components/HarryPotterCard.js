import * as React from "react";
import {
  Card,
  CardContent,
  CardMedia,
  IconButton,
} from "@mui/material";
import InfoIcon from "@mui/icons-material/Info";
import FavoriteIcon from "@mui/icons-material/Favorite";
import Tooltip from "@mui/material/Tooltip";

const HarryPotterCard = (props) => {
  const [loadMovieData, setLoadMovieData] = React.useState(false);
  const [favorite, setFavorite] = React.useState(false);

  const handleSetMovieDataClick = () => {
    setLoadMovieData(loadMovieData);
    props.loadMetadataFunction(props.movie);
  };

  const handleFavoriteClick = () => {
    if (favorite) {
      setFavorite(false)
    } else {
      setFavorite(true)

    }
    props.addToFavoritesFunction(props.movie);

  };
  return (
    <Card
      sx={{
        m: 3,
        bgcolor: "#000",
        border: "2px solid #EEE",
        color: "#EEE"
      }}
    >
      <CardContent>
        <CardMedia title="Movie Poster" >
          <img src={props.movie.Poster} alt="movie poster" />
        </CardMedia>
        <Tooltip title="Learn More">
          <IconButton onClick={handleSetMovieDataClick}>
            <InfoIcon sx={{color: "#EEE"}}/>
          </IconButton>
        </Tooltip>
        <Tooltip title="Add To Favorites">
          <IconButton onClick={handleFavoriteClick}>
            <FavoriteIcon sx={{color: favorite ? '#F00' : '#EEE'}}/>
          </IconButton>
        </Tooltip>
      </CardContent>
    </Card>
  );
};

export default HarryPotterCard;
