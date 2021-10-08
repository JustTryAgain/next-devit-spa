import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import Image from 'next/image';
import annaLogo from '../../public/images/featured/anna_ij_logo 1.png';
import lalaLogo from '../../public/images/featured/lala logo.png';
import cosyLogo from '../../public/images/featured/Cosyspeed.png';
import sneakerLogo from '../../public/images/featured/Sneaker world.png';
import styles from './styles.module.scss';
import Container from "react-bootstrap/Container";

const Featured = () => {
  return (
    <section>
     <Container className={styles['featured']}>
       <Row as={'p'} className={styles['featured__text']}>
         Featured by
       </Row>
       <Row className={styles['featured__logos']}>
         <Col xl={3} lg={6}>
           <Image src={sneakerLogo} alt={'Sneaker world company logo'} />
         </Col>
         <Col xl={3}  lg={6}>
           <Image src={cosyLogo} alt={'CosySpeed company logo'} />
         </Col>
         <Col xl={3} lg={6}>
           <Image src={lalaLogo} alt={'Lala Berlin company logo'} />
         </Col>
         <Col xl={3} lg={6}>
           <Image src={annaLogo} alt={'ANNA Jewellery company logo'} />
         </Col>
       </Row>
     </Container>
    </section>
  );
}

export default Featured;