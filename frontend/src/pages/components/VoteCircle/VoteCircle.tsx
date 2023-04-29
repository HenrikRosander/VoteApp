import { TripSuggestion } from "@/types/TripSuggestion";
import { StyledFaPlus } from "./VoteCircle.styles";

export const VoteCircle = ({ reference }: { reference: TripSuggestion }) => {
  //Find current user
  const getCurrentUser = () => {};

  const user = getCurrentUser();

  const addVote = (e) => {
    e.preventDefault();

    //add current user to trip suggestion
    reference!.votes!.push(user);
    console.log(reference.city);
  };
  return (
    <>
      <StyledFaPlus size={"1.2rem"} onClick={addVote} />
    </>
  );
};
