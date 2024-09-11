// components
import Spring from '@components/Spring';
import ScrollContainer from '@components/ScrollContainer';
import MatchResultBasicItem from '@components/MatchResultBasicItem';

const data = [
    {team1: {id: 'manunited', score: 2}, team2: {id: 'chelsea', score: 1}, currentMinute: 45},
    {team1: {id: 'barcelona', score: 4}, team2: {id: 'realmadrid', score: 2}, currentMinute: 60},
    {team1: {id: 'liverpool', score: 0}, team2: {id: 'arsenal', score: 3}, currentMinute: 30},
    {team1: {id: 'bayern', score: 1}, team2: {id: 'bvb', score: 1}, currentMinute: 75},
    {team1: {id: 'juventus', score: 3}, team2: {id: 'acmilan', score: 0}, currentMinute: 15},
    {team1: {id: 'manunited', score: 2}, team2: {id: 'chelsea', score: 1}, currentMinute: 45},
    {team1: {id: 'barcelona', score: 4}, team2: {id: 'realmadrid', score: 2}, currentMinute: 60},
    {team1: {id: 'liverpool', score: 0}, team2: {id: 'arsenal', score: 3}, currentMinute: 30},
    {team1: {id: 'bayern', score: 1}, team2: {id: 'bvb', score: 1}, currentMinute: 75},
    {team1: {id: 'juventus', score: 3}, team2: {id: 'acmilan', score: 0}, currentMinute: 15}
]

const MatchResultBasic = () => {
    return (
        <Spring className="card h-4">
            <ScrollContainer height={0}>
                <div className="track d-flex flex-column g-20" style={{padding: 20}}>
                    {
                        data.map((item, index) => (
                            <MatchResultBasicItem key={index} data={item} index={index}/>
                        ))
                    }
                </div>
            </ScrollContainer>
        </Spring>
    )
}

export default MatchResultBasic