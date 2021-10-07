import Image from 'next/image';
import styles from './styles.module.scss';
import logo from '../../public/images/Logo.svg';
import Nav from './navigation';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import cn from "classnames";

export default function Header() {
  const classHeader = cn(
    styles.header
  );
  return (
    <header className={classHeader}>
      <Row className={styles["header-container"]}>
        <Col lg={4} className={styles['header__logo-wrapper']}>
          <Image src={logo} alt="logo" />
        </Col>
        <Col lg={8}>
          <Nav />
        </Col>
      </Row>
    </header>
  );
}
