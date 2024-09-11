// styling
import styles from './styles.module.scss';

// components
import Spring from '@components/Spring';
import LazyImage from '@components/LazyImage';
import Submenu from '@ui/Submenu';

// hooks
import {useRef} from 'react';
import useFileReader from '@hooks/useFileReader';
import useSubmenu from '@hooks/useSubmenu';

// assets
import user from '@assets/user.webp';
import placeholder from '@assets/placeholder.webp';

const ProfileAvatar = () => {
    const {anchorEl, open, handleClick, handleClose} = useSubmenu();
    const {file, setFile, handleFile} = useFileReader();
    const inputRef = useRef(null);

    const triggerInput = () => inputRef.current?.click();

    const submenuActions = [
        {
            label: 'Upload',
            icon: 'upload',
            onClick: triggerInput,
        },
        {
            label: 'Remove',
            icon: 'trash',
            onClick: () => setFile(placeholder)
        }
    ]

    return (
        <Spring className={`${styles.card} card card-padded`}>
            <h3 className={styles.title}>My Profile</h3>
            <div className={`${styles.container} d-flex align-items-center`}>
                <div className={styles.wrapper}>
                    <input type="file" onChange={handleFile} ref={inputRef} hidden/>
                    <div>
                        <LazyImage className={styles.img} src={file ? file : user} alt="Lottie Poole"/>
                    </div>
                    <button className={styles.button} onClick={handleClick} aria-label="Open menu">
                        <i className="icon-camera"/>
                    </button>
                    <Submenu open={open} onClose={handleClose} anchorEl={anchorEl} actions={submenuActions}/>
                </div>
                <div className="d-flex flex-column g-4">
                    <h3 className="text-overflow">Lottie Poole</h3>
                    <span className="text-overflow">Munich, Germany</span>
                </div>
            </div>
        </Spring>
)
}

export default ProfileAvatar