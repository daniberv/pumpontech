import styles from './Navbar.module.scss'
import { User } from './User';
import { Balance } from './Balance';

export const Navbar = () => {
    return (
        <div className={styles.navbar}>
            <User />
            <Balance />
        </div>
    );
}