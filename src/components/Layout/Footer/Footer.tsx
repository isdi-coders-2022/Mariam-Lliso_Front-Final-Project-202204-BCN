import Navigation from "../Navigation/Navigation";
import FooterStyle from "./FooterStyle";

const Footer = (): JSX.Element => {
  return (
    <FooterStyle>
      <nav className="nav">
        <Navigation />
      </nav>
    </FooterStyle>
  )
}

export default Footer;
