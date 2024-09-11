// components
import Spring from '@components/Spring';
import ClubInfo from '@components/ClubInfo';
import TabButton from '@ui/TabButton';
import {ResponsiveContainer, BarChart, Bar, XAxis, CartesianGrid, Tooltip} from 'recharts';
import ChartTooltip from '@ui/ChartTooltip';

// hooks
import {useState, useEffect} from 'react';
import {useThemeProvider} from '@contexts/themeContext';
import {useWindowSize} from 'react-use';

// utils
import {generateGridPoints} from '@utils/helpers';

const data = {
    first: [
        {label: 'GK', a: 12, b: 23},
        {label: 'LB', a: 17, b: 34},
        {label: 'CB', a: 28, b: 18},
        {label: 'CB', a: 15, b: 27},
        {label: 'RB', a: 19, b: 31},
        {label: 'CM', a: 20, b: 25},
        {label: 'CM', a: 22, b: 16},
        {label: 'CAM', a: 30, b: 35},
        {label: 'LW', a: 14, b: 26},
        {label: 'RW', a: 24, b: 11},
        {label: 'ST', a: 33, b: 29}
    ],
    second: [
        {label: 'GK', a: 21, b: 32},
        {label: 'LB', a: 16, b: 36},
        {label: 'CB', a: 13, b: 45},
        {label: 'CB', a: 37, b: 42},
        {label: 'RB', a: 44, b: 41},
        {label: 'CM', a: 40, b: 46},
        {label: 'CM', a: 47, b: 38},
        {label: 'CAM', a: 43, b: 48},
        {label: 'LW', a: 39, b: 20},
        {label: 'RW', a: 26, b: 15},
        {label: 'ST', a: 28, b: 30}
    ]
}

const ActiveActionsChart = () => {
    const [selectedHalf, setSelectedHalf] = useState('first');
    const {direction} = useThemeProvider();
    const {width} = useWindowSize();
    const [points, setPoints] = useState([]);
    const isRTL = direction === 'rtl';

    useEffect(() => {
        setPoints(generateGridPoints('activeActionsChart', 20, 'x'));
    }, [width]);

    return (
        <Spring className="card h-2 d-flex flex-column g-30 card-padded">
            <div className="d-flex flex-column g-20">
                <ClubInfo id="tottenham" title="Active actions" subtitle="Tottenham, London"/>
                <div className="tab-nav col-2">
                    <TabButton
                        title="First half"
                        active={selectedHalf === 'first'}
                        onClick={() => setSelectedHalf('first')}
                    />
                    <TabButton
                        title="Second half"
                        active={selectedHalf === 'second'}
                        onClick={() => setSelectedHalf('second')}
                    />
                </div>
            </div>
            <ResponsiveContainer className="flex-1" width="100%" height="100%" id="activeActionsChart">
                <BarChart data={data[selectedHalf]} margin={false}>
                    <defs>
                        <linearGradient id="grid" x1="769.75" y1="-0.442191" x2="-0.783631" y2="-0.442191" gradientUnits="userSpaceOnUse">
                            <stop stopColor="var(--border)" stopOpacity="0.2"/>
                            <stop offset="0.504355" stopColor="var(--border)"/>
                            <stop offset="0.99905" stopColor="var(--border)" stopOpacity="0.257922"/>
                        </linearGradient>
                    </defs>
                    <CartesianGrid vertical={false} horizontalPoints={points} strokeDasharray="3 3" stroke="url(#grid)"/>
                    <XAxis dataKey="label"
                           tickLine={false}
                           axisLine={false}
                           reversed={isRTL}
                           style={{
                               fontFamily: 'var(--heading-font)',
                               fontSize: '0.5rem',
                               fontWeight: 600,
                           }}/>
                    <Tooltip cursor={false} content={<ChartTooltip multi/>}/>
                    <Bar dataKey="a" stackId="a" fill="var(--orange)" barSize={8} />
                    <Bar dataKey="b" stackId="a" fill="var(--grass)" barSize={8}/>
                </BarChart>
            </ResponsiveContainer>
        </Spring>
    )
}

export default ActiveActionsChart