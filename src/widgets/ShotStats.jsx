// components
import Spring from '@components/Spring';
import LegendItem from '@ui/LegendItem';
import {ResponsiveContainer, Scatter, ScatterChart, ReferenceLine, Cell, Tooltip, XAxis} from 'recharts';
import ClubInfo from '@components/ClubInfo';
import TabButton from '@ui/TabButton';
import ChartTooltip from '@ui/ChartTooltip';

// hooks
import {useState} from 'react';
import {useThemeProvider} from '@contexts/themeContext';

const data = {
    first: [
        {target: 61, miss: 20},
        {target: 92, miss: 43},
        {target: 49, miss: 39},
        {target: 84, miss: 27},
        {target: 83, miss: 45},
        {target: 43, miss: 17},
        {target: 87, miss: 10},
        {target: 78, miss: 56},
        {target: 15, miss: 34},
        {target: 48, miss: 14},
        {target: 74, miss: 18},
        {target: 35, miss: 92}
    ],
    second: [
        {target: 70, miss: 27},
        {target: 43, miss: 57},
        {target: 53, miss: 27},
        {target: 14, miss: 71},
        {target: 23, miss: 19},
        {target: 75, miss: 92},
        {target: 33, miss: 15},
        {target: 26, miss: 28},
        {target: 97, miss: 32},
        {target: 25, miss: 34},
        {target: 84, miss: 12},
        {target: 93, miss: 41}
    ]
}

const ShotsStats = () => {
    const [selectedHalf, setSelectedHalf] = useState('first');
    const {direction} = useThemeProvider();
    const isRTL = direction === 'rtl';

    const infoStyles = {
        position: 'absolute',
        bottom: 0,
    }

    const CustomScatterShape = ({cx, cy, fill, ...props}) => {
        const isDominant = props.dom === props.dataKey;

        return (
            <svg width="10" height="217" viewBox="0 0 10 222" x={cx} y={cy} fill="none"
                 xmlns="http://www.w3.org/2000/svg">
                {
                    isDominant &&
                    <>
                        <path d="M5 25V215" stroke="url(#dashed)" strokeWidth="4" strokeLinecap="round"
                              strokeDasharray="8 8"/>
                        <path fillRule="evenodd" clipRule="evenodd"
                              d="M5 10C7.76142 10 10 7.76142 10 5C10 2.23858 7.76142 0 5 0C2.23858 0 0 2.23858 0 5C0 7.76142 2.23858 10 5 10Z"
                              fill={fill}/>
                    </>
                }
                <defs>
                    <linearGradient id="dashed" x1="3" y1="145" x2="3" y2="2" gradientUnits="userSpaceOnUse">
                        <stop stopColor="var(--widget)"/>
                        <stop offset="0.795555" stopColor="var(--border)"/>
                    </linearGradient>
                </defs>
            </svg>
        );
    }

    return (
        <Spring className="card h-2 d-flex flex-column p-relative">
            <div className="d-flex flex-column g-16 flex-1">
                <div className="card_header d-flex flex-column g-20">
                    <ClubInfo title="Shots stats" subtitle="Manchester City" id="mancity"/>
                    <div className="tab-nav col-2">
                        <TabButton title="First half" active={selectedHalf === 'first'}
                                   onClick={() => setSelectedHalf('first')}/>
                        <TabButton title="Second half" active={selectedHalf === 'second'}
                                   onClick={() => setSelectedHalf('second')}/>
                    </div>
                </div>
                <ResponsiveContainer className="flex-1" width="100%" height="100%">
                    <ScatterChart margin={false} data={data[selectedHalf]}>
                        <XAxis dataKey="name" reversed={isRTL} hide/>
                        <Scatter dataKey="miss" shape={CustomScatterShape}>
                            {
                                data[selectedHalf].map((entry, index) => {
                                    return (
                                        <Cell key={`cell-${index}`}
                                              fill="var(--salmon)"
                                              dom={entry.miss > entry.target ? 'miss' : 'target'}
                                              dataKey="miss"/>
                                    )
                                })
                            }
                        </Scatter>
                        <Scatter dataKey="target" shape={CustomScatterShape}>
                            {
                                data[selectedHalf].map((entry, index) => {
                                    return (
                                        <Cell key={`cell-${index}`}
                                              fill="var(--grass)"
                                              dom={entry.miss > entry.target ? 'miss' : 'target'}
                                              dataKey="target"/>
                                    )
                                })
                            }
                        </Scatter>
                        <ReferenceLine y={50} stroke="var(--grass)" strokeWidth={2} strokeDasharray="4 2"/>
                        <Tooltip cursor={false} content={ChartTooltip} multi={false}/>
                    </ScatterChart>
                </ResponsiveContainer>
            </div>
            <div className="card_footer d-flex flex-column g-8" style={infoStyles}>
                <div>
                    <span className="h1">18</span> shots
                </div>
                <div className="d-flex g-14">
                    <LegendItem color="salmon" text="miss"/>
                    <LegendItem color="grass" text="On target"/>
                </div>
            </div>
        </Spring>
    )
}

export default ShotsStats