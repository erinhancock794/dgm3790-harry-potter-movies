import { movieMetadata } from "../data/movieMetadata";
import Movie from "./HarryPotterCard";
import { Box } from "@material-ui/core";
const HarryPotterContainer = () => {
  return (
      <div>
    <Box
      sx={{
        display: "flex",
        justifyContent: "center",
        flexWrap: "wrap",
        width: '100%'
      }}
    >
        {movieMetadata.map((movie) => {
          return (
            <Movie
              movieTitle={movie.Title}
              year={movie.Year}
              id={movie.imdbID}
              poster={movie.Poster}
              key={movie.imdbID}
              imdbRating={movie.imdbRating}
              metascore={movie.Metascore}
              actors={movie.Actors}
              runtime={movie.Runtime}
              director={movie.Director}
              plot={movie.Plot}
            />
          );
        })}
    </Box>
    </div>
  );
};

export default HarryPotterContainer;
