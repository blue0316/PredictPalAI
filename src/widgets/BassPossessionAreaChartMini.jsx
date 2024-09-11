// components
import Spring from '@components/Spring';
import {Area, AreaChart, ResponsiveContainer, Tooltip} from 'recharts';
import ChartTooltip from '@ui/ChartTooltip';
import SubmenuButton from '@ui/SubmenuButton';

// hooks
import {useThemeProvider} from '@contexts/themeContext';

const BassPossessionAreaChartMini = () => {
    const {theme} = useThemeProvider();

    const data = [
        { a: 11, b: 45 },
        { a: 14, b: 25 },
        { a: 22, b: 15 },
        { a: 17, b: 30 },
        { a: 40, b: 16 },
        { a: 23, b: 35 },
        { a: 29, b: 18 },
        { a: 12, b: 48 },
        { a: 26, b: 42 },
        { a: 19, b: 31 }
    ];

    const areaProps = {
        type: 'monotone',
        strokeWidth: 3,
        activeDot: {stroke: 'var(--widget)'},
        fillOpacity: theme === 'light' ? 1 : 0
    }

    const footerStyles = {
        position: 'absolute',
        width: '100%',
        bottom: 0,
        left: 0,
        zIndex: 1,
    }

    return (
        <Spring className="card h-1 card--side-shadow d-flex flex-column">
            <div className="card_header">
                <h3>Ball possession</h3>
                <span className="text-12">Tottenham vs. Wolves</span>
            </div>
            <ResponsiveContainer className="flex-1" width="100%" height="100%">
                <AreaChart data={data} margin={{top: 4, right: 0, left: 0, bottom: 0}}>
                    <Tooltip cursor={false} content={<ChartTooltip multi/>}/>
                    <defs>
                        <linearGradient id="a" x1="375" y1="125" x2="375" y2="0" gradientUnits="userSpaceOnUse">
                            <stop stopColor="white" stopOpacity="0.1"/>
                            <stop offset="1" stopColor="#2662F0"/>
                        </linearGradient>
                        <linearGradient id="b" x1="373.971" y1="137.242" x2="373.971" y2="0" gradientUnits="userSpaceOnUse">
                            <stop stopColor="white" stopOpacity="0.1"/>
                            <stop offset="1" stopColor="#FDE100"/>
                        </linearGradient>
                    </defs>
                    <Area dataKey="a"
                          stroke="var(--blue)"
                          fill="url(#a)"
                          {...areaProps}/>
                    <Area dataKey="b"
                          stroke="var(--accent)"
                          fill="url(#b)"
                          {...areaProps}/>
                </AreaChart>
            </ResponsiveContainer>
            <div className="card_footer d-flex justify-content-between" style={footerStyles}>
                <div className="d-flex g-16">
                    <span className="tag h6 dark" style={{backgroundColor: 'var(--blue)'}}>
                        Tottenham
                    </span>
                    <span className="tag h6 light" style={{backgroundColor: 'var(--accent)'}}>
                        Wolves
                    </span>
                </div>
                <SubmenuButton/>
            </div>
        </Spring>
    )
}

export default BassPossessionAreaChartMini