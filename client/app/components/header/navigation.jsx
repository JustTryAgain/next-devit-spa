import styles from './styles.module.scss';
import Col from 'react-bootstrap/Col'
import Row from 'react-bootstrap/Row'
import Container from "react-bootstrap/Container";

export default function Nav() {
  return (
    <Container as="nav" className={styles.navigation}>
      <Row  as="ul" className={styles.navigation__list}>
        <Col as="li" className={styles.navigation__item}>
          <a className={styles.navigation__link} href="#">Home</a>
        </Col>
        <Col as="li" className={styles.navigation__item}>
          <a className={styles.activator + " " + styles.navigation__link} href="#">Shopify Apps</a>
          <span className={styles.arrow}/>
        </Col>
        <Col as="li" className={styles.navigation__item}>
          <a className={styles.navigation__link + ' ' + styles['navigation__get-btn']} href="#">Get app now</a>
        </Col>
      </Row>
    </Container>
  );
}
