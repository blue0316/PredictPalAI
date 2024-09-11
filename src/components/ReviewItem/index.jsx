// styling
import styles from './styles.module.scss';

// components
import Spring from '@components/Spring';
import CustomRating from '@ui/CustomRating';

// hooks
import {useState} from 'react';

// utils
import PropTypes from 'prop-types';
import classNames from 'classnames';

const ReviewItem = ({review, index}) => {
    const [liked, setLiked] = useState({count: review.liked || 0, isLiked: false});
    const [isDisliked, setIsDisliked] = useState({count: review.disliked || 0, isDisliked: false});

    const handleLike = () => {
        setIsDisliked((prev) => ({...prev, isDisliked: false}));
        setLiked((prev) => ({...prev, isLiked: !prev.isLiked}));
    }

    const handleDislike = () => {
        setLiked((prev) => ({...prev, isLiked: false}));
        setIsDisliked((prev) => ({...prev, isDisliked: !prev.isDisliked}));
    }

    return (
        <Spring className={styles.container} type="slideUp" index={index}>
            <div className="d-flex flex-column g-20">
                <h3>{review.title}</h3>
                <p>{review.text}</p>
            </div>
            <div className={styles.rating}>
                <CustomRating value={review.rating}/>
            </div>
            <div className={styles.footer}>
                <div className="d-flex align-items-center g-20">
                    <img className="square-avatar" src={review.avatar} alt={review.name}/>
                    <span className="text-600">{review.name}</span>
                </div>
                <div className="d-flex align-items-center g-16">
                    <button className="d-flex g-8 align-items-center"
                            aria-label="This review was helpful"
                            onClick={handleLike}>
                        <span className={`${styles.thumbs} ${styles.up}`}>
                            <i className={`${styles.icon} ${styles.active} icon-thumbs-up-regular`}/>
                            <i className={classNames(`${styles.icon} icon-thumbs-up-solid`, {[styles.active]: liked.isLiked})}/>
                        </span>
                        <span className="label h6">({liked.count})</span>
                    </button>
                    <button className="d-flex g-8 align-items-center"
                            aria-label="This review was not helpful"
                            onClick={handleDislike}>
                        <span className={`${styles.thumbs} ${styles.down}`}>
                            <i className={`${styles.icon} ${styles.active} icon-thumbs-down-regular`}/>
                            <i className={classNames(`${styles.icon} icon-thumbs-down-solid`, {[styles.active]: isDisliked.isDisliked})}/>
                        </span>
                        <span className="label h6">({isDisliked.count})</span>
                    </button>
                </div>
            </div>
        </Spring>
    )
}

ReviewItem.propTypes = {
    review: PropTypes.object.isRequired,
    index: PropTypes.number.isRequired
}

export default ReviewItem