// styling
import styles from './styles.module.scss';

// components
import LazyImage from '@components/LazyImage';
import Spring from '@components/Spring';
import Submenu from '@ui/Submenu';

// hooks
import {useThemeProvider} from '@contexts/themeContext';
import useSubmenu from '@hooks/useSubmenu';

// utils
import classNames from 'classnames';

// assets
import cover from '@assets/tickets/ticket.webp';
import barcode from '@assets/tickets/barcode.svg';
import bayern from '@assets/clubs/bayern.webp';
import newcastle from '@assets/clubs/newcastle.webp';

const Ticket = () => {
    const {theme} = useThemeProvider();
    const {anchorEl, open, handleClick, handleClose} = useSubmenu();

    const submenuActions = [
        {
            label: 'Print',
            icon: 'print',
        },
        {
            label: 'Save as PDF',
            icon: 'pdf',
        },
        {
            label: 'Sent to E-mail',
            icon: 'envelope',
        }
    ]

    return (
        <Spring className="card">
            <div className={styles.header}>
                <h3>E-ticket</h3>
                <button aria-label="Ticket actions" onClick={handleClick}>
                    <i className="icon icon-ticket-light"/>
                </button>
                <Submenu open={open} onClose={handleClose} anchorEl={anchorEl} actions={submenuActions}/>
            </div>
            <LazyImage className={styles.cover} src={cover} alt="cover"/>
            <div className={styles.teams}>
                <div className={styles.teams_item}>
                    <LazyImage className={styles.logo} src={bayern} alt="Bayern Munich"/>
                    <h3>Bayern</h3>
                    <span className="text-12">Munich, Germany</span>
                </div>
                <div className={styles.teams_item}>
                    <LazyImage className={styles.logo} src={newcastle} alt="Newcastle"/>
                    <h3>Newcastle</h3>
                    <span className="text-12">London, UK</span>
                </div>
            </div>
            <div className={styles.details} id="ticket">
                <div className={styles.details_item}>
                    <span className="h6 label">Seat</span>
                    <span className="h3">C58</span>
                </div>
                <div className={styles.details_item}>
                    <span className="h6 label">Date</span>
                    <span className="h3">15 Apr</span>
                </div>
                <div className={styles.details_item}>
                    <span className="h6 label">Time</span>
                    <span className="h3">20:10</span>
                </div>
            </div>
            <div className="d-flex flex-column g-12 card-padded">
                <img className={classNames(styles.code, theme === 'light' && styles.light)} src={barcode}
                     alt="barcode"/>
                <span className="h6 label">32056 - 65651 - 56465 - 09484</span>
            </div>
        </Spring>
    )
}

export default Ticket