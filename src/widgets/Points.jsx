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
        <Spring className="card h-1 d-flex flex-column g-10">
            <div className="card_header d-flex flex-column g-4">
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