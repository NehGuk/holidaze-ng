import { PageArea1Container, SLinkButton, Sh1Title } from "../styles/globalstyles";

export default function ErrorPage() {
  return (
    <PageArea1Container>
      <Sh1Title>Oops!</Sh1Title>
      <p>An error has occurred. Not your fault, though.</p>
      <br></br>
      <SLinkButton to="/">Back to home</SLinkButton>
    </PageArea1Container>
  );
}
