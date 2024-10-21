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
        <Spring className="card height-w-1 flex flex-col justify-between card-padded">
            <ClubInfo id="chelsea" title="FC Chelsea" subtitle="London, UK"/>
            <div className="flex justify-between">
                <div className="flex flex-col gap-1">
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