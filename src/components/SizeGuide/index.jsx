// styling
import styles from './styles.module.scss';

// components
import Popup from '@components/Popup';

// utils
import PropTypes from 'prop-types';

const SizeGuide = ({open, onClose}) => {
    return (
        <Popup open={open} onClose={onClose}>
            <div className="d-flex flex-column g-16">
                <h2 className="text-center">Size Chart</h2>
                <div className="d-flex flex-column g-30">
                    <div className={`${styles.header} ${styles.row}`}>
                        <span></span>
                        <span className="h4">Chest(in)</span>
                        <span className="h4">Waist(in)</span>
                    </div>
                    <div>
                        <div className={styles.row}>
                            <span className="h4">XS</span>
                            <span>34-36</span>
                            <span>28-30</span>
                        </div>
                        <div className={styles.row}>
                            <span className="h4">S</span>
                            <span>36-38</span>
                            <span>30-32</span>
                        </div>
                        <div className={styles.row}>
                            <span className="h4">M</span>
                            <span>38-40</span>
                            <span>32-34</span>
                        </div>
                        <div className={styles.row}>
                            <span className="h4">L</span>
                            <span>40-42</span>
                            <span>34-36</span>
                        </div>
                        <div className={styles.row}>
                            <span className="h4">XL</span>
                            <span>42-44</span>
                            <span>36-38</span>
                        </div>
                        <div className={styles.row}>
                            <span className="h4">XXL</span>
                            <span>44-46</span>
                            <span>38-40</span>
                        </div>
                        <div className={styles.row}>
                            <span className="h4">3XL</span>
                            <span>46-48</span>
                            <span>44-46</span>
                        </div>
                        <div className={styles.row}>
                            <span className="h4">4XL</span>
                            <span>48-50</span>
                            <span>44-46</span>
                        </div>
                        <div className={styles.row}>
                            <span className="h4">5XL</span>
                            <span>48-50</span>
                            <span>44-46</span>
                        </div>
                    </div>
                </div>
            </div>
        </Popup>
    )
}

SizeGuide.propTypes = {
    open: PropTypes.bool.isRequired,
    onClose: PropTypes.func.isRequired
}

export default SizeGuide