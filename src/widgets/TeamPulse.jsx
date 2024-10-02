// components
import Spring from '@components/Spring';
import ClubInfo from '@components/ClubInfo';
import ProgressInfo from '@ui/ProgressInfo';
import SimpleLineChart from '@components/SimpleLineChart';

const TeamPulse = () => {
    const data = [
        {points: 30},
        {points: 120},
        {points: 12},
        {points: 168},
        {points: 40},
        {points: 200},
    ];

    return (
        <Spring className="card h-1 d-flex flex-column justify-content-between card-padded">
            <ClubInfo id="chelsea" title="FC Chelsea" subtitle="London, UK"/>
            <div className="d-flex justify-content-between">
                <div className="d-flex flex-column g-4">
                    <h3>34 pts</h3>
                    <ProgressInfo progress={2} text="positions"/>
                </div>
               <div className="flex-1" style={{maxWidth: 140}}>
                   <SimpleLineChart data={data} dataKey="points"/>
               </div>
            </div>
        </Spring>
    )
}

export default TeamPulse