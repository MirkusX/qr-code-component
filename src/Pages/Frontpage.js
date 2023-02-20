import {
  StyledDiv,
  StyledH1,
  StyledImg,
  StyledSection,
} from "../Components/StyledComponents";
import qr from "../Images/frame.png";

export const Frontpage = () => {
  return (
    <StyledSection>
      <StyledDiv>
        <StyledImg src={qr} />
        <div>
          <StyledH1>Scan the QR code to visit my portfolio</StyledH1>
          <p>
            The original text said something about scanning the QR code to visit
            their site so you could do their challenges but as the Joker said if
            you're good at something never do it for free.
          </p>
        </div>
      </StyledDiv>
    </StyledSection>
  );
};
