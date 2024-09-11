// components
import Spring from '@components/Spring';
import LeagueHeader from '@components/LeagueHeader';
import ProgressItem from '@components/ProgressItem';
import AnimatedCount from '@components/AnimatedCount';

// hooks
import {useThemeProvider} from '@contexts/themeContext';

// assets
import english_premier from '@assets/clubs/english_premier.webp';

const LeagueRating = () => {
    const {theme} = useThemeProvider();
    const data = {
        '5 stars': 400,
        '4 stars': 210,
        '3 stars': 300,
        '2 stars': 56,
        '1 star': 150,
    }

    const getPercents = (data) => {
        let total = 0;
        for (const key in data) {
            total += data[key];
        }
        const result = {};
        for (const key in data) {
            result[key] = (data[key] / total) * 200;
        }
        return result;
    }

    return (
        <Spring className="card d-flex flex-column justify-content-between g-20 card-padded">
            <LeagueHeader img={english_premier} title="English Premier League" subtitle="Regular Championship" />
            <AnimatedCount className="h1 large" count={4.2} decimals={1} />
            <div className="d-flex flex-column g-24">
                {
                    Object.keys(data).map((key, index) => (
                        <ProgressItem
                            key={index}
                            title={key}
                            value={getPercents(data)[key]}
                            barColor="accent"
                            trackColor={theme === 'light' ? 'body' : 'border'}
                        />
                    ))
                }
            </div>
        </Spring>
    )
}

export default LeagueRating