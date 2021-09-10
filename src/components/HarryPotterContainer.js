import { movieMetadata } from "../data/movieMetadata";
import Movie from "./HarryPotterCard";
import { Box } from "@material-ui/core";
const HarryPotterContainer = () => {
  return (
    <Box
      sx={{
        display: "flex",
        // gridTemplateColumns: 'auto auto auto auto',

        justifyContent: "center",
        flexWrap: "wrap",
        flexDirection: "row",
        // width: '50%'
        // alignContent: 'flex-start'
      }}
    >
      {/* <div> */}
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
      {/* </div> */}
    </Box>
  );
};

export default HarryPotterContainer;
