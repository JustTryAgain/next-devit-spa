import Image from 'next/image';
import styles from './styles.module.scss';
import logo from '../../public/images/Logo.svg';
import Nav from './navigation';
import Col from 'react-bootstrap/Col'
import Row from 'react-bootstrap/Row'
import cn from "classnames";

export default function Header() {
  const classHeader = cn(
    styles.header
  );
  return (
    <div className={styles["header-container"]}>
      <Row as='header' className={classHeader + ' ' + 'justify-content-between'}>
        <Col xs={12} className={styles['header__logo-wrapper']}>
          <Image src={logo} alt="logo" />
        </Col>
        <Col>
          <Nav />
        </Col>
      </Row>
    </div>
  );
}
