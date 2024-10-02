// components
import {LineChart, Line, ResponsiveContainer, Tooltip, XAxis, YAxis} from 'recharts';
import ChartTooltip from '@ui/ChartTooltip';

// hooks
import {useThemeProvider} from '@contexts/themeContext';

// utils
import PropTypes from 'prop-types';

const SimpleLineChart = ({data, dataKey}) => {
    const {direction} = useThemeProvider();
    const isRTL = direction === 'rtl';

    return (
        <ResponsiveContainer className="flex-1" width="100%" height="100%">
            <LineChart data={data} margin={{top: 4, right: 6, left: 6, bottom: 4}}>
                <XAxis reversed={isRTL} hide/>
                <YAxis orientation={isRTL ? 'right' : 'left'} hide/>
                <Line type="monotone"
                      dataKey={dataKey}
                      stroke="var(--blue)"
                      strokeWidth={2}
                      activeDot={{r: 4, fill: 'var(--blue)', stroke: 'var(--blue)'}}
                      dot={false}/>
                <Tooltip cursor={false} content={<ChartTooltip/>}/>
            </LineChart>
        </ResponsiveContainer>
    );
}

SimpleLineChart.propTypes = {
    data: PropTypes.array.isRequired,
    dataKey: PropTypes.string.isRequired
}

export default SimpleLineChart
