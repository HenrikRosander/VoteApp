import { PersonContainer, StyledFaPlus } from "./PersonSection.styles";

const PersonSection = () => {
  return (
    <PersonContainer>
      <p>Vem är du?</p>
      <div style={{ display: "flex", gap: "32px" }}>
        <StyledFaPlus>H</StyledFaPlus>
        <StyledFaPlus>M</StyledFaPlus>
        <StyledFaPlus>J</StyledFaPlus>
        <StyledFaPlus>R</StyledFaPlus>
      </div>
    </PersonContainer>
  );
};

export default PersonSection;
