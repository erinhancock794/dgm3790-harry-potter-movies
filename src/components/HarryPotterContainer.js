import * as React from "react";
import { movieMetadata } from "../data/movieMetadata";
import HarryPotterCard from "./HarryPotterCard";
import { Box, Modal, CardContent, Typography } from "@mui/material";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: "400",
  bgcolor: "background.paper",
  border: "2px solid #000",
  boxShadow: "24",
  p: "4",
};

const HarryPotterContainer = () => {
  const [open, setOpen] = React.useState(false);
  const [loadData, setLoadData] = React.useState([]);
  const [favorites, setFavorites] = React.useState([]);
  const handleClose = () => {
    return setOpen(false);
  };
  const loadMetadata = (movie) => {
    setOpen(true);
    setLoadData(() => {
      return [movie];
    });
  };

  const addToFavorites = (movie) => {
    const isFavorite = Boolean(favorites.find((item) => item.imdbID === movie.imdbID));
    if (!isFavorite) {
      setFavorites((prevState) => [...prevState, movie]);
    } else {
      setFavorites(() => {
        return favorites.filter((item) => item.imdbID !== movie.imdbID);
      });
    }
  };

  return (
    <div>
    <Box
    sx={{
      display: "flex",
      flexDirection: "column",
      color: "#eee",
      backgroundColor: "#00F",
      justifyContent: "center",
      p: 2
    }}
  >
    <h1>Favorites</h1>
    {favorites &&
      favorites.map((movie) => {
        return (
          <p key={movie.imdbID} sx={{ color: "#fff" }}>
            {movie.Title}
          </p>
        );
      })}
  </Box>
    <Box
      sx={{
        display: "flex",
        justifyContent: "center",
        flexWrap: "wrap",
        width: "100%",
      }}
    >

      {movieMetadata.map((movie) => {
        return (
          <HarryPotterCard
            key={movie.imdbID}
            loadMetadataFunction={loadMetadata}
            addToFavoritesFunction={addToFavorites}
            movie={{ ...movie }}
          />
        );
      })}
      <Modal open={open} onClose={handleClose}>
        <Box sx={style}>
          <CardContent
            sx={{
              bgcolor: "#00F",
              color: "#EEE"
            }}
          >
            {loadData.map((movie) => {
              return (
                <div>
                  <Typography component="h1">{movie.Title}</Typography>
                  <Typography>{movie.Plot}</Typography>
                  <Typography>{`Release Date: ${movie.Year}`}</Typography>
                  <Typography>{`Runtime: ${movie.Runtime}`}</Typography>
                  <Typography>{`Director: ${movie.Director}`}</Typography>
                  <Typography>{`Cast: ${movie.Actors}`}</Typography>
                  <Typography>
                    {`Rotten Tomatoes: ${movie.Metascore}`}
                  </Typography>
                  <Typography>{`imdb Rating: ${movie.imdbRating}`}</Typography>
                </div>
              );
            })}
          </CardContent>
        </Box>
      </Modal>
    </Box>
    </div>
  );
};

export default HarryPotterContainer;
