import styles from './styles.module.scss';
import Image from 'next/image';
import ecommerceLogos from '../../public/images/ecommers/Logo e-commers.png';
import Link from "../links";
import CallIcon from "../../public/images/icon call.svg";
import ClickIcon from "../../public/images/icon click.svg";
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';

const HelpEcommerce = () => {
  return (
    <Row as={'section'} className={styles.ecommerce}>
      <Col className={styles.ecommerce__text}>
        <Row>
          <Col xl={12} lg={11} className={styles["ecommerce__text-promotion"]}>
            <h2 className={styles.txt__h}>We help e-commerce owners run Shopify their business easier</h2>
            <p className={styles.txt__p}>
              There is a reason many Shopify sellers have given us a 5-star rating
              on the Shopify App Store. Because we help online store owners sell more on Shopify.
            </p>
          </Col>
          <div className={styles.links}>
            <Row>
            <Col xl={5} lg={5} md={12}>
              <Link link={'#'} svg={ClickIcon} text={'Go to App'} />
            </Col>
            <Col xl={6} lg={7} md={12}>
              <Link link={'#'} svg={CallIcon} text={'Book a call'} />
            </Col>
            </Row>
          </div>
        </Row>
      </Col>
      <Col className={styles.ecommerce__logos}>
        <Image src={ecommerceLogos} alt='logo-icons' quality={95} placeholder={`blur`} />
      </Col>
      <div className={styles.ecommerce__shapes}>
        <div className={styles['shape-left']} />
        <div className={styles['shape-left-small']} />
        <div className={styles['shape-right']} />
        <div className={styles['shape-right-small']} />
        <div className={styles['shape-main']} />
      </div>
    </Row>
  );
}

export default HelpEcommerce;