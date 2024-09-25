import { LinkContainer, Links, Navigation, SpanTitle } from "./styles";

const Header = ():JSX.Element => {
  return (
    <Navigation>
      <SpanTitle>PokeLab</SpanTitle>
      <LinkContainer>
        <Links>Home</Links>
        <Links>Contact Us</Links>
      </LinkContainer>
    </Navigation>
  );
};

export default Header;
