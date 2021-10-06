import styles from './styles.module.scss';
import Col from 'react-bootstrap/Col'
import Row from 'react-bootstrap/Row'

export default function Nav() {
  return (
    <nav className={styles.navigation}>
      <Row  as="ul" className={styles.navigation__list}>
        <Col as="li" className={styles.navigation__item}>
          <a className={styles.navigation__link} href="#">Home</a>
        </Col>
        <Col as="li" className={styles.navigation__item}>
          <a className={styles.activator + " " + styles.navigation__link} href="#">Shopify Apps</a>
          <span className={styles.arrow}/>
        </Col>
        <Col as="li" className={styles.navigation__item}>
          <a className={styles.navigation__link} href="#">Get app now</a>
        </Col>
      </Row>
    </nav>
  );
}
