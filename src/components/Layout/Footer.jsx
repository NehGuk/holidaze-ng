import { FooterContainer, FooterContent1, FooterContent2, FooterContent3, FooterContent4, FooterLogo } from "./Footer.style";
import logo from "../../assets/logolight-name.png";

export default function Footer() {
  return (
    <FooterContainer>
      <FooterLogo>
        <img src={logo} />
      </FooterLogo>

      <FooterContent1>
        <h3>Built with</h3>
        <ul>
          <li>React</li>
          <li>Styled Components</li>
          <li>Adobe XD</li>
          <li>Norof API</li>
        </ul>
      </FooterContent1>

      <FooterContent2>
        <h3>Contact</h3>
        <ul>
          <li>Linkedin</li>
          <li>Github</li>
          <li>Email</li>
        </ul>
      </FooterContent2>

      <FooterContent3>
        <h3>About</h3>
        <p>This website has been developed as part of my Frontend Development studies at the Norwegian School of Technology and Digital media, Noroff.</p>
      </FooterContent3>

      <FooterContent4>
        <p>Henri | 2023</p>
      </FooterContent4>
    </FooterContainer>
  );
}
