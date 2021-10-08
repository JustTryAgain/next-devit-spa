import styles from './styles.module.scss';
import FirstScreen from "./screens/firstScreen";


const Info = () => {
    return (
        <section>
            <div className={styles['container']}>
                <FirstScreen/>
            </div>
        </section>
    );
}

export default Info;