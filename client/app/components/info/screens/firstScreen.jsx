import Container from "react-bootstrap/Container";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import styles from './styles.module.scss';
import Image from 'next/image';
import MobileUp from '../../../public/images/info/mobile-up.png';

const FirstScreen = () => {
    return (
        <Container className={styles['first-screen']}>
            <Row className={'justify-content-between'}>
                <Col lg={6} className={styles['left-block']}>
                    <span className={styles['left-block__bg']} />
                    <Row className={styles['left-h']}>
                        <Col lg={10} className={styles['left-h']} as={'h3'}>
                            We help clients take their online business to the next level
                        </Col>
                    </Row>
                    <Row className={styles['sub-h']}>
                        <Col xl={5} md={12} className={styles['sub-h__expertise']}>
                            <span className={styles['count']}>7</span>
                            <span className={styles['years']}>Years expertise</span>
                        </Col>
                        <Col xl={7} md={12} className={styles['sub-h__promotion']}>
                            <h4 className={styles['sub-header']}>Great applications with striking features</h4>
                            <p className={styles['sub-paragraph']}>
                                Solving customers' everyday challenges and help them grow their business
                            </p>
                        </Col>
                    </Row>
                </Col>
                <Col lg={5} className={styles['right-block']}>
                    <Image src={MobileUp}  alt={'Up your business!'} placeholder={'blur'}/>
                    <span className={styles['right-block__bg']} />
                </Col>
            </Row>
        </Container>
    );
}

export default FirstScreen;