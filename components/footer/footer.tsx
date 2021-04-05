import { faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Copyright, Row, Wrapper } from './styles';

export interface Props {
  fixed?: boolean
}

const Footer: React.FC<Props> = ({ fixed }) => {
  return (
    <Wrapper fixed={fixed}>
      <Row>
        <a href="https://github.com/rafaelangical"><FontAwesomeIcon icon={faGithub}></FontAwesomeIcon></a>
        <a href="https://www.linkedin.com/in/rafaelangical/"><FontAwesomeIcon icon={faLinkedin}></FontAwesomeIcon></a>
      </Row>
      <Row>
        <Copyright>Copyright @2021 All rights reserved</Copyright>
      </Row>
    </Wrapper>
  )
}

export default Footer;