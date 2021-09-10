import './HarryPotterCard.css';
import { Card, CardContent } from "@material-ui/core"; //download material ui instructions are in codeJournal

const HarryPotterCard = (props) => {
  const { movieTitle, year, id } = props;
  return (
    <Card key={id} className='card'>
        <CardContent >
      {movieTitle} {year}
      </CardContent>
    </Card>
  );
};

export default HarryPotterCard;
