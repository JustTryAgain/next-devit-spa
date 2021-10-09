import Container from 'react-bootstrap/Container';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import styles from './styles.module.scss';
import Image from 'next/image';
import sysadmin from '../../../public/images/info/sysadmin.png';
import rocket from '../../../public/images/info/rocket.png';

const SecondScreen = () => {
  return (
    <Container className={styles['second-screen']}>
      <Row>
        <Col lg={6} className={styles['left-block']}>
          <Image src={sysadmin} alt={'sys admin promises to complete your tasks'}
                 placeholder={`blur`}/>
        </Col>
        <Col lg={6} className={styles['right-block']}>
          <Row>
            <Col lg={12} className={styles['right-block__reviews']}>
              <span className={styles['reviews__count']}>300+</span>
              <span className={styles['reviews__count-text']}>5 star reviews on Shopify</span>
            </Col>
          </Row>
          <Row>
            <Col lg={6} className={styles['right-block__solutions']}>
              <h3 className={styles['solutions__h']}>Solutions for different e-business tasks</h3>
              <p className={styles['solutions__p']}>Our apps help solving multiple tasks for
                improving Shopify online stores</p>
            </Col>
            <Col lg={6} className={styles['right-block__rocket']}>
              <div className={styles['image-wrapper']}>
                <Image src={rocket} alt={'rocket'} placeholder={`blur`}/>
              </div>
            </Col>
          </Row>
        </Col>
      </Row>
    </Container>
  );
};

export default SecondScreen;