// components
import Spring from '@components/Spring';
import PlayerInfo from '@components/PlayerInfo';
import {ScatterChart, Scatter, ResponsiveContainer, Tooltip, Cell} from 'recharts';
import ChartTooltip from '@ui/ChartTooltip';

// hooks
import {useThemeProvider} from '@contexts/themeContext';

const CustomScatterShape = ({cx, cy, fill, ...props}) => {
    return (
        <svg width="10" height="222" viewBox="0 0 10 222" x={cx} y={cy} fill="none"
             xmlns="http://www.w3.org/2000/svg">
            <path opacity="0.5" d="M5 28.3799V220.38"
                  stroke={`url(#line_dots-${props.theme})`} strokeWidth="2"
                  strokeLinecap="round"/>
            <path fillRule="evenodd" clipRule="evenodd"
                  d="M5 10C7.76142 10 10 7.76142 10 5C10 2.23858 7.76142 0 5 0C2.23858 0 0 2.23858 0 5C0 7.76142 2.23858 10 5 10Z"
                  fill={fill}/>
            <defs>
                <linearGradient id="line_dots-light" x1="1.5" y1="77.0002" x2="1.5" y2="1.77246"
                                gradientUnits="userSpaceOnUse">
                    <stop stopColor="white"/>
                    <stop offset="1" stopColor="#D1E2EA"/>
                </linearGradient>
                <linearGradient id="line_dots-dark" x1="1.5" y1="59" x2="1.5" y2="1.37988"
                                gradientUnits="userSpaceOnUse">
                    <stop stopColor="var(--neon-green)" stopOpacity="0.2"/>
                    <stop offset="1" stopColor="var(--neon-green)"/>
                </linearGradient>
            </defs>
        </svg>
    );
}

const LineDotsChart = () => {
    const {theme} = useThemeProvider();

    const data = [
        {minutes: 78},
        {minutes: 49},
        {minutes: 94},
        {minutes: 125},
        {minutes: 43},
        {minutes: 100},
        {minutes: 82},
        {minutes: 69},
        {minutes: 88},
        {minutes: 105},
        {minutes: 84},
        {minutes: 52},
        {minutes: 97},
    ];

    return (
        <Spring className="card h-1 d-flex flex-column g-10 card-padded pb-0">
            <PlayerInfo number={7} title="João Félix" subtitle="Minutes played"/>
            <ResponsiveContainer className="flex-1" width="100%" height="100%">
                <ScatterChart margin={{top: 0, right: 5, bottom: 0, left: 5}} data={data}>
                    <Scatter dataKey="minutes" shape={CustomScatterShape}>
                        {
                            data.map((entry, i) => {
                                return (
                                    <Cell key={`cell-${i}`}
                                          fill="var(--neon-green)"
                                          theme={theme}
                                          dataKey="minutes"/>
                                )
                            })
                        }
                    </Scatter>
                    <Tooltip cursor={false} content={<ChartTooltip/>}/>
                </ScatterChart>
            </ResponsiveContainer>
        </Spring>
    )
}

export default LineDotsChart