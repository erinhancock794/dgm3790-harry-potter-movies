import { harryPotter } from "../data/harrypotter";
import Movie from "./HarryPotterCard";
import { Box } from "@material-ui/core";
const HarryPotterContainer = () => {
  return (
      <Box sx={{

        display: 'flex',
        flexWrap: 'wrap'
      }}>
    <div>
      {harryPotter.map((movie) => {
        return (
          <Movie 
          sx={{
              margin: '16px'
          }}
          movieTitle={movie.Title} 
          year={movie.Year} 
          id={movie.imdbID}
          key={movie.imdbID} />
        );
      })}
    </div>
    </Box>
  );
};

export default HarryPotterContainer;
