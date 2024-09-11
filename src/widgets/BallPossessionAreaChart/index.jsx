// styling
import styles from './styles.module.scss';

// components
import Spring from '@components/Spring';
import ClubInfo from '@components/ClubInfo';
import {AreaChart, Area, Tooltip, ResponsiveContainer, XAxis, YAxis} from 'recharts';
import ChartTooltip from '@ui/ChartTooltip';
import Navigator from '@ui/Navigator';

// hooks
import useArrayNav from '@hooks/useArrayNav';
import {useThemeProvider} from '@contexts/themeContext';

// data placeholder
import ball_possession from '@db/ball_possession';

const BallPossessionAreaChart = () => {
    const {direction} = useThemeProvider();
    const {index, navigate} = useArrayNav(ball_possession);
    const isRTL = direction === 'rtl';

    const areaProps = {
        type: 'monotone',
        strokeWidth: 3,
        activeDot: {stroke: 'var(--widget)'},
    }

    return (
        <Spring className="card h-1 d-flex flex-column g-10">
            <div className={`${styles.header} card_header`}>
                <ClubInfo id="realmadrid" title="Ball possession" subtitle="Inter, Milan"/>
                <Navigator className={styles.header_navigator} text={ball_possession[index].label} handler={navigate}/>
            </div>
            <ResponsiveContainer className="flex-1" width="100%" height="100%">
                <AreaChart data={ball_possession[index].data} margin={{top: 4, right: 0, left: 0, bottom: 0}}>
                    <Tooltip cursor={false} content={<ChartTooltip multi/>}/>
                    <XAxis reversed={isRTL} hide/>
                    <YAxis orientation={isRTL ? 'right' : 'left'} hide/>
                    <Area dataKey="a"
                          stroke="var(--purple)"
                          fill="var(--purple)"
                          fillOpacity={0.8}
                          {...areaProps}/>
                    <Area dataKey="b"
                          stroke="var(--accent)"
                          fill="var(--accent)"
                          fillOpacity={0}
                          {...areaProps}/>
                </AreaChart>
            </ResponsiveContainer>
        </Spring>
    )
}

export default BallPossessionAreaChart