import React from "react";
import lines from "@Assets/png/lines.png";
import { StyledContainer, StyledLinesShape } from "./style";
const Hero = () => {
  return (
    <StyledContainer>
      <div>
        <h3>ინვოისის გაგზავნა არასდროს ყოფილა ასეთი მარტივი</h3>
        <p>
          დაზოგე მეტი დრო და აღმოაჩინე ინვოისის შექმნის კომფორტული გამოცდილება!
        </p>

        <button>დაჯავშნე მომხმარებელი</button>
      </div>
      <StyledLinesShape>
        <img src={lines} />
      </StyledLinesShape>
    </StyledContainer>
  );
};

export default Hero;
