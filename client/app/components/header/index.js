import Image from 'next/image';
import styles from './styles.module.scss';
import logo from '../../public/images/Logo.svg';
import Nav from './navigation';

export default function Header() {
  return (
    <header className={styles.header}>
      <div className='header__logo-wrapper'>
        <Image src={logo} alt='logo' />
      </div>
      <Nav />
    </header>
  );
}
