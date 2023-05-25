import { FooterContainer, FooterContent1, FooterContent2, FooterContent3, FooterContent4, FooterLink, FooterLogo } from "./Footer.style";
import logo from "../../assets/logo-name-offwhite.png";

export default function Footer() {
  return (
    <FooterContainer>
      <FooterLogo>
        <img src={logo} alt="Holidaze logo" />
      </FooterLogo>

      <FooterContent1>
        <h3>Built with</h3>
        <ul>
          <li>
            <FooterLink to="https://react.dev" target="_blank">
              React
            </FooterLink>
          </li>
          <li>
            <FooterLink to="https://styled-components.com" target="_blank">
              Styled Components
            </FooterLink>
          </li>
          <li>
            <FooterLink to="https://helpx.adobe.com/xd/get-started.html" target="_blank">
              Adobe XD
            </FooterLink>
          </li>
          <li>
            <FooterLink to="https://docs.noroff.dev" target="_blank">
              Noroff API
            </FooterLink>
          </li>
        </ul>
      </FooterContent1>

      <FooterContent2>
        <h3>Contact</h3>
        <ul>
          <li>
            <FooterLink to="https://no.linkedin.com/in/henri-kugler-78218422b?trk=people-guest_people_search-card" target="_blank">
              Linkedin
            </FooterLink>
          </li>
          <li>
            <FooterLink to="https://github.com/NehGuk" target="_blank">
              Github
            </FooterLink>
          </li>
          <li>
            <FooterLink to="https://nehguk.no" target="_blank">
              Portfolio
            </FooterLink>
          </li>

          <li>
            <FooterLink to="mailto:bidders-gave.0t@icloud.com">Email</FooterLink>
          </li>
        </ul>
      </FooterContent2>

      <FooterContent3>
        <h3>About</h3>
        <p>This website has been developed as part of my Frontend Development studies at the Norwegian School of Technology and Digital Media, Noroff.</p>
      </FooterContent3>

      <FooterContent4>
        <p>Henri | 2023</p>
      </FooterContent4>
    </FooterContainer>
  );
}
