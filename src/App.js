import "./App.css";
import manmoon from "./manmoon.png";

import {
  CardContainer,
  CardTitle,
  CardImg,
  CardElementTop,
  CardElementBottom,
  CardParagraph,
} from "./card";
import StarRating from "./StarRating";
import Favorite from "./Favorite";

function App() {
  return (
    <CardContainer>
      <CardElementTop>
        <CardImg src={manmoon} alt="album1" />
      </CardElementTop>
      <CardElementBottom>
        <CardTitle>Man on the Moon II: The Legend of Mr. Rager</CardTitle>
        <CardParagraph>Year: 2010</CardParagraph>
        <CardParagraph>
          Give your note: <StarRating />
        </CardParagraph>
        <CardParagraph>
          <Favorite />
        </CardParagraph>
      </CardElementBottom>
    </CardContainer>
  );
}

export default App;
