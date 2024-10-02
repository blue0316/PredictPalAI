// components
import Spring from '@components/Spring';
import {ResponsiveContainer, Area, AreaChart, CartesianGrid, Tooltip, YAxis, XAxis} from 'recharts';
import ChartTooltip from '@ui/ChartTooltip';

// hooks
import {useWindowSize} from 'react-use';
import {useState, useEffect} from 'react';
import {useThemeProvider} from '@contexts/themeContext';

// utils
import {generateGridPoints} from '@utils/helpers';

const data = [
    {a: 25, b: 31},
    {a: 42, b: 89},
    {a: 57, b: 76},
    {a: 63, b: 95},
    {a: 78, b: 42},
    {a: 84, b: 73},
    {a: 36, b: 67},
    {a: 91, b: 47},
    {a: 48, b: 58},
    {a: 64, b: 26}
];

const TrainingPaceChart = () => {
    const {direction} = useThemeProvider();
    const {width} = useWindowSize();
    const [points, setPoints] = useState([]);
    const isRTL = direction === 'rtl';

    useEffect(() => {
        setPoints(generateGridPoints('trainingShapeChart', 20));
    }, [width]);

    const lineProps = {
        type: 'monotone',
        dot: false,
        strokeWidth: 3,
    }

    return (
        <Spring className="card card--side-shadow d-flex flex-column g-10 h-1">
            <div className="card_header d-flex flex-column g-4" style={{marginBottom: -10}}>
                <h3>Training pace</h3>
                <div className="d-flex justify-content-between h6 g-20">
                    <span>8:00</span>
                    <span>12:00</span>
                    <span>16:00</span>
                    <span>20:00</span>
                </div>
            </div>
            <ResponsiveContainer className="flex-1" width="100%" height="100%" id="trainingShapeChart">
                <AreaChart data={data} margin={{top: 4, right: 0, left: 0, bottom: 4}}>
                    <defs>
                        <linearGradient id="gridLine" x1="-5.10517e-05" y1="0" x2="-5.10517e-05" y2="169.677"
                                        gradientUnits="userSpaceOnUse">
                            <stop stopColor="var(--border)" stopOpacity="0.2"/>
                            <stop offset="0.504355" stopColor="var(--border)"/>
                            <stop offset="0.99905" stopColor="var(--border)" stopOpacity="0.257922"/>
                        </linearGradient>
                        <linearGradient id="area" x1="0" y1="0" x2="0" y2="130" gradientUnits="userSpaceOnUse">
                            <stop stopColor="var(--turquoise)"/>
                            <stop offset="1" stopColor="var(--turquoise)" stopOpacity="0.01"/>
                        </linearGradient>
                    </defs>
                    <CartesianGrid strokeDasharray="6"
                                   strokeLinecap="square"
                                   horizontal={false}
                                   verticalPoints={points}
                                   width="100%"
                                   height="100%"
                                   stroke="url(#gridLine)"
                    />
                    <XAxis reversed={isRTL} hide/>
                    <YAxis orientation={isRTL ? 'right' : 'left'} hide/>
                    <Tooltip cursor={false} content={<ChartTooltip multi={true}/>}/>
                    <Area dataKey="a"
                          stroke="var(--azure)"
                          fill="none"
                          activeDot={{r: 4, fill: 'var(--azure)', stroke: 'var(--widget)'}}
                          {...lineProps}/>
                    <Area dataKey="b"
                          stroke="var(--turquoise)"
                          fill="url(#area)"
                          activeDot={{r: 4, fill: 'var(--turquoise)', stroke: 'var(--widget)'}}
                          {...lineProps}/>
                </AreaChart>
            </ResponsiveContainer>
        </Spring>
    )
}

export default TrainingPaceChart