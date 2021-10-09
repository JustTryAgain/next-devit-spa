import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import styles from './styles.module.scss';
//🤮 <- my code
const Review = () => {
  return (
    <section className={styles['review']}>
      <Container className={styles['review__container']}>
        <Row>
          <Col className={styles['review__icons']}>

          </Col>
          <Col className={styles['review__text']}>

          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default Review;