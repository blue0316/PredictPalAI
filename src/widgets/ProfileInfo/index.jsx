// styling
import styles from './styles.module.scss';

// components
import Spring from '@components/Spring';

const ProfileInfo = () => {
    const data = [
        {'Full Name': 'Lottie Poole'},
        {'Phone': '+123 45 567 88'},
        {'E-mail': 'ligasoccer@template.com'},
        {'Location': 'Munich, Germany'}
    ]

    return (
        <Spring className="card d-flex flex-column g-16 card-padded">
            <h3>Profile info</h3>
            <ul className="d-flex flex-column justify-content-between flex-1 g-14">
                {
                    data.map((item, index) => {
                        return (
                            <li className={styles.item} key={index}>
                                <span className="text-600 text-header">
                                    {Object.keys(item)[0]}:
                                </span>
                                <span className={`${styles.value} text-overflow`}>
                                    {Object.values(item)[0]}
                                </span>
                            </li>
                        )
                    })
                }
            </ul>
        </Spring>
    )
}

export default ProfileInfo