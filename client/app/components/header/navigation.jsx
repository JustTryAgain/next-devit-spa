import styles from './styles.module.scss';
import Col from 'react-bootstrap/Col'
import Row from 'react-bootstrap/Row'
import Container from "react-bootstrap/Container";
import cn from "classnames";

const Navigation = () => {
  const DropClass = cn(
    styles['drop-down'],
    styles.item__link);

  const GetClass = cn(
    styles.item__link,
    styles['navigation__get-btn']);

  return (
    <nav className={styles.navigation}>
      <Container className={styles.navigation__container}>
        <Row as="ul" className={styles.navigation__list}>
          <Col lg={4} md={4} as="li" className={styles.list__item}>
            <a className={styles.item__link} href="#">Home</a>
          </Col>
          <Col lg={4} md={4} as="li" className={styles.list__item}>
            <a className={DropClass} href="#">Shopify Apps</a>
            <span className={styles.arrow}/>
          </Col>
          <Col  lg={4} md={4} as="li" className={styles.list__item}>
            <a className={GetClass} href="#">Get app now</a>
          </Col>
        </Row>
      </Container>
    </nav>
  );
}

export default Navigation;