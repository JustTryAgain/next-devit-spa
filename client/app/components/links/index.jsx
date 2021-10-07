import Image from 'next/image';
import styles from './styles.module.scss';

const Link = ({ text, svg, link }) => {
  return (
    <div className={styles.linkWrapper}>
      <a href={link} className={styles.link}>
        {text}
      </a>
      <Image src={svg} alt={text} width={'30px'} height={'35px'}/>
    </div>
  );
}

export default Link;