import styles from './styles.module.scss';
import Link from "../links";
import CallIcon from "../../public/images/icon call.svg";
import ClickIcon from "../../public/images/icon click.svg";
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import Container from "react-bootstrap/Container";
import Image from 'next/image';
import Logos from '../../public/images/ecommers/Logos e-commerce.png';

const HelpEcommerce = () => {
  return (
    <section className={styles['ecommerce']}>
      <Container className={styles['ecommerce__container']}>
        <Row>
          <Col lg={7} className={styles['ecommerce__text']}>
            <div className={styles['ecommerce__text-left']}>
              <h2 className={styles.txt__h}>We help e-commerce owners run Shopify their business easier</h2>
              <p className={styles.txt__p}>
                There is a reason many Shopify sellers have given us a 5-star rating on the Shopify App Store.
                Because we help online store owners sell more on Shopify.
              </p>
              <div className={styles.links}>
                <Link link={'#'} svg={ClickIcon} text={'Go to App'}/>
                <Link link={'#'} svg={CallIcon} text={'Book a call'}/>
              </div>
            </div>
          </Col>
          <div className={styles.ecommerce__bgImage}>
            <Image src={Logos} alt={'logo`s'} quality={85} placeholder={"blur"}/>
          </div>
        </Row>
      </Container>
    </section>
  );
}

export default HelpEcommerce;