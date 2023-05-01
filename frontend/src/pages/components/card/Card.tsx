import { TripSuggestion } from "@/types/TripSuggestion";
import { CardContainer, ImageContainer, StyledImg, TitleContainer, VoteContainer } from "./Card.styles";
import { Person } from "@/types/Person";
import { VoteCircle } from "../VoteCircle/VoteCircle";

export const Card = ({ tripSuggestion }: { tripSuggestion: TripSuggestion }) => {
  return (
    <CardContainer>
      {tripSuggestion && (
        <>
          <ImageContainer>
            <StyledImg src={tripSuggestion.image} />
          </ImageContainer>
          <TitleContainer style={{ paddingTop: "20px", paddingLeft: "20px" }}>
            {tripSuggestion.city + ", " + tripSuggestion.country}
          </TitleContainer>
          {tripSuggestion.votes!.length > 0 ? (
            <div>
              {tripSuggestion.votes!.map((vote: Person) => {
                console.log(vote);
                return (
                  <VoteContainer key={vote.name}>
                    <div key={vote.name}>
                      <img src={vote.image}></img>
                    </div>
                    <VoteCircle reference={tripSuggestion} />
                  </VoteContainer>
                );
              })}
            </div>
          ) : (
            <VoteContainer>
              <VoteCircle reference={tripSuggestion} />
            </VoteContainer>
          )}
        </>
      )}
    </CardContainer>
  );
};
