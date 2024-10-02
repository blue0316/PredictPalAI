// styling
import styles from './styles.module.scss'

// components
import Spring from '@components/Spring';
import {Area, AreaChart, ResponsiveContainer, Tooltip, XAxis, YAxis, CartesianGrid} from 'recharts';
import ChartTooltip from '@ui/ChartTooltip';
import TruncatedText from '@components/TruncatedText';

// hooks
import {useEffect, useState} from 'react';
import {useWindowSize} from 'react-use';
import useArrayNav from '@hooks/useArrayNav';
import {useThemeProvider} from '@contexts/themeContext';
import useMeasure from 'react-use-measure';

// utils
import {generateGridPoints} from '@utils/helpers';

// data placeholder
import championship_position from '@db/championship_position';

const ChampionshipPositionChart = () => {
    const {direction} = useThemeProvider();
    const {index, navigate} = useArrayNav([0, 1, 2]);
    const [points, setPoints] = useState([]);
    const {width} = useWindowSize();
    const isRTL = direction === 'rtl';
    const [titleRef, {width: titleWidth}] = useMeasure();

    useEffect(() => {
        setPoints(generateGridPoints('championshipPositionChart'));
    }, [width]);

    const lineProps = () => {
        return {
            type: 'monotone',
            dot: false,
            strokeWidth: 3,
            fillOpacity: .8,
            activeDot: {stroke: 'var(--widget)'},
        }
    }
    return (
        <Spring className="card h-1 d-flex flex-column">
            <div className={`${styles.header} card_header`}>
                <div className="d-flex align-items-center flex-1 g-20">
                    <div className="d-flex g-14">
                        <button className="nav-arrow" aria-label="Previous" data-direction="prev" onClick={navigate}>
                            <i className="icon icon-arrow-left"/>
                        </button>
                        <button className="nav-arrow" aria-label="Next" data-direction="next" onClick={navigate}>
                            <i className="icon icon-arrow-right"/>
                        </button>
                    </div>
                    <h3 className="flex-1" ref={titleRef}>
                        <TruncatedText width={titleWidth} text="Championship position"/>
                    </h3>
                </div>
                <div className="d-flex g-16">
                    <span className="tag h6 dark" style={{backgroundColor: 'var(--blue)'}}>
                        Tottenham
                    </span>
                    <span className="tag h6 light" style={{backgroundColor: 'var(--accent)'}}>
                        Wolves
                    </span>
                </div>
            </div>
            <ResponsiveContainer className="flex-1" width="100%" height="100%" id="championshipPositionChart">
                <AreaChart data={championship_position[index]} margin={{top: 20, right: 0, left: 0, bottom: 0}}>
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
                    <CartesianGrid horizontal={false}
                                   verticalPoints={points}
                                   strokeDasharray="3 3"
                                   stroke="url(#gridLine)"/>
                    <XAxis dataKey="name" reversed={isRTL} hide/>
                    <YAxis orientation={isRTL ? 'right' : 'left'} hide/>
                    <Tooltip cursor={false} content={<ChartTooltip multi={true}/>}/>
                    <Area dataKey="team1"
                          stroke="var(--accent)"
                          fill="var(--accent)"
                          {...lineProps()}/>
                    <Area dataKey="team2"
                          stroke="var(--blue)"
                          fill="var(--blue)"
                          {...lineProps()}/>
                </AreaChart>
            </ResponsiveContainer>
        </Spring>
    )
}

export default ChampionshipPositionChart