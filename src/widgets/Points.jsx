// components
import Spring from '@components/Spring';
import SimpleLineChart from '@components/SimpleLineChart';
import ProgressInfo from '@ui/ProgressInfo';

const Points = () => {
    const data = [
        {points: 30},
        {points: 120},
        {points: 12},
        {points: 168},
        {points: 40},
        {points: 200},
    ];

    return (
        <Spring className="card height-w-1 flex flex-col gap-2.5">
            <div className="card_header flex flex-col gap-1">
                <h3>FC Chelsea</h3>
                <span className="text-12 text-overflow">Average attendance</span>
            </div>
            <div className="flex-1">
                <SimpleLineChart data={data} dataKey="points" />
            </div>
            <div className="card_footer" style={{paddingBottom: 20}}>
                <ProgressInfo progress={18} text="%"/>
            </div>
        </Spring>
    )
}

export default Points