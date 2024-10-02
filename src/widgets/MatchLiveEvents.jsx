// components
import Spring from '@components/Spring';
import MatchScoreItem from '@components/MatchScoreItem';
import MatchProgress from '@ui/MatchProgress';
import MatchEventText from '@ui/MatchEventText';
import MatchTrack from '@ui/MatchTrack';

// hooks
import useMeasure from 'react-use-measure';

const MatchLiveEvents = () => {
    const [ref, { width }] = useMeasure();

    const data = {
        team1: {
            id: 'mancity',
            score: 2
        },
        team2: {
            id: 'manunited',
            score: 1
        }
    }

    const events = [
        {type: 'goal', minute: 32},
        {type: 'substitution', minute: 50, count: 4},
    ]

    return (
        <Spring className="card h-2 d-flex flex-column">
            <div className="d-flex flex-column justify-content-between flex-1 p-relative" ref={ref}>
                <div className="d-flex flex-column g-20 card-padded">
                    <MatchEventText minute={32} text="Man. City conceded a goal"/>
                </div>
                <MatchProgress currentMinute={55} containerWidth={width}/>
                <div style={{marginBottom: 38}}>
                    <MatchTrack events={events} withStartEndMarkers={false}/>
                </div>
            </div>
            <div className="border-top card-padded">
                <MatchScoreItem match={data} withLogo/>
            </div>
        </Spring>
    )
}

export default MatchLiveEvents