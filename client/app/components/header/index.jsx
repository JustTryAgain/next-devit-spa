import Image from 'next/image';
import styles from './styles.module.scss';
import logo from '../../public/images/Logo.svg';
import Navigation from './navigation';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import Container from "react-bootstrap/Container";

const Header = () => {
  return (
    <header className={styles['header']}>
      <Container className={styles["header__container"]}>
        <Row>
          <Col lg={4} md={12} className={styles['header__logo-wrapper']}>
            <Image src={logo} alt="logo" width={'312px'} height={'35px'}/>
          </Col>
          <Col lg={8} md={12}>
            <Navigation/>
          </Col>
        </Row>
      </Container>
    </header>
  );
}

export default Header;