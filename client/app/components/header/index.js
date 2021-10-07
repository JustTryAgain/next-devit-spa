import Image from 'next/image';
import styles from './styles.module.scss';
import logo from '../../public/images/Logo.svg';
import Nav from './navigation';
import Col from 'react-bootstrap/Col'
import Row from 'react-bootstrap/Row'
import cn from "classnames";
import Container from "react-bootstrap/Container";

export default function Header() {
  const classHeader = cn(
    styles.header
  );
  return (
    <Container className={styles["header-container"]}>
      <Row as='header' className={classHeader}>
        <Col xl={4}  className={styles['header__logo-wrapper']}>
          <Image src={logo} alt="logo" />
        </Col>
        <Col xl={8}>
          <Nav />
        </Col>
      </Row>
    </Container>
  );
}
