import styles from './styles.module.scss';
import Image from 'next/image';
import ecomIcon from '../../public/images/ecommers/Logo e-commers.png';

const  HelpEcomm = () => {
  return (
    <section className={styles.sec}>
      <h2>We help e-commerce owners run Shopify their business easier</h2>
      <p>
        There is a reason many Shopify sellers have given us a 5-star rating
        on the Shopify App Store. Because we help online store owners sell more on Shopify.
      </p>
      <Image src={ecomIcon} className={styles.imgS}/>
    </section>
  );
};

export default HelpEcomm;