import Icon from '../../public/logo-gnb.svg';
import styles from '@/app/home.module.scss';

export default function Home() {
    return (
        <main>
            <Icon />
            <div className={styles.test}> 메인페이지</div>
        </main>
    );
}
