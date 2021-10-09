import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Image from 'next/image';
import techUsers from '../../../public/images/info/tech-users.png';
import styles from './styles.module.scss';

const ThirdScreen = () => {
  return (
    <Container className={styles['third-screen']}>
      <Row>
        <Col lg={6} className={styles['third-screen__left-block']}>
          <Row lg={12}>
            <Col className={styles['active-merchants']}>
              <span className={styles['nums']}>5000+</span>
              <span>Active Merchants</span>
            </Col>
          </Row>
          <Row>
            <Col lg={6} className={styles['countries']}>
              <span className={styles['nums']}>190+</span>
              <span>Countries</span>
            </Col>
            <Col lg={6} className={styles['promotion']}>
              <h3 className={styles['promotion__h']}>Boost sales with minimum efforts</h3>
              <p className={styles['promotion__p']}>User-friendly design, simple navigation,
                automated processes, and affordable
                prices</p>
            </Col>
          </Row>
        </Col>
        <Col lg={6} className={styles['third-screen__right-block']}>
          <div className={styles['image-wrapper']}>
            <Image src={techUsers} alt={'our users is happy!'}/>
          </div>
        </Col>
      </Row>
    </Container>
  );
};

export default ThirdScreen;