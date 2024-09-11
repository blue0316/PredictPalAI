// styling
import styles from './styles.module.scss';

// hooks
import {useSidebar} from '@contexts/sidebarContext';

// utils
import classNames from 'classnames';

const SidebarTrigger = () => {
    const {open, setOpen} = useSidebar();

    return (
        <button className={classNames([styles.burger, open && styles.active])}
                onClick={() => setOpen(!open)}
                aria-label="Open sidebar">
            <span className={styles.burger_line}/>
            <span className={styles.burger_line}/>
            <span className={styles.burger_line}/>
        </button>
    )
}

export default SidebarTrigger