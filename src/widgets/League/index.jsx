// styling
import styles from './styles.module.scss';

// components
import Spring from '@components/Spring';
import AnimatedCount from '@components/AnimatedCount';
import LeagueRatingItem from '@components/LeagueRatingItem';
import LeagueHeader from '@components/LeagueHeader';

// assets
import bundesliga from '@assets/clubs/bundesliga.webp';

const League = () => {
    const stats = [
        {title: 'Attack', rating: 3, labelMin: 'Too tight', labelMax: 'Too loose'},
        {title: 'Force', rating: 4, labelMin: 'Uncomfortable', labelMax: 'Comfortable'},
        {title: 'Exciting', rating: 2, labelMin: 'Poor', labelMax: 'Perfect'}
    ]
    return (
        <Spring className="card card-padded">
            <LeagueHeader img={bundesliga}
                          title={<>German <span className="d-block">Bundes Liga</span></>}
                          subtitle="Regular Championship" />
            <div className={`${styles.stats} d-flex flex-column g-10`}>
                <AnimatedCount className={`${styles.stats_num} h1`} count={71} suffix="%" />
                <span>of customers recommend this league</span>
            </div>
            <div className="d-flex flex-column g-16">
                {
                    stats.map((item, index) => (
                        <LeagueRatingItem key={index} {...item} />
                    ))
                }
            </div>
        </Spring>
    )
}

export default League