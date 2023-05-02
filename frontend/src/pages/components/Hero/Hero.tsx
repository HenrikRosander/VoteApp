import { FormEvent, useState } from "react";
import { HeroText, StyledInput, TopContainer } from "./Hero.styles";
import PersonSection from "../PersonSection";

const Hero = () => {
  const [name, setName] = useState("");

  const eventHandler = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    //Add new card.
    // console.log(e.target[0].value);

    // const imageUrl =
    // fetch(`http://localhost:3001/db?city=${e.target[0].value}&country=${'lol'}&image=`)
  };

  return (
    <div>
      <TopContainer>
        <HeroText>Ultimata reseplaneraren 9000</HeroText>
        <PersonSection />
      </TopContainer>
      <form onSubmit={eventHandler}>
        <StyledInput type="text" name="location" placeholder="Skriv in ett önskemål på destination!"></StyledInput>
      </form>
    </div>
  );
};

export default Hero;
