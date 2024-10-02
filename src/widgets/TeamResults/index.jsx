// styling
import styles from './styles.module.scss';

// components
import Spring from '@components/Spring';
import {
    PieChart,
    Pie,
    ResponsiveContainer,
    Cell,
    Tooltip,
    RadarChart,
    PolarGrid,
    PolarAngleAxis,
    Radar
} from 'recharts';
import LegendItem from '@ui/LegendItem';
import ChartTooltip from '@ui/ChartTooltip';
import TabButton from '@ui/TabButton';

// hooks
import {useThemeProvider} from '@contexts/themeContext';
import {useState} from 'react';
import {useWindowSize} from 'react-use';

// constants
import {PIE_COLORS} from '@constants/chart';

// utils
import {renderPolarAngleAxis} from '@utils/helpers';

const TeamResults = () => {
    const {width} = useWindowSize();
    const {theme} = useThemeProvider();
    const [selectedTeam, setSelectedTeam] = useState('barcelona');
    const outerRadius = width < 375 ? 90 : 130;

    const pieData = [
        {name: 'Wins', value: 500},
        {name: 'Loses', value: 700},
        {name: 'Draws', value: 300},
    ];

    const polarData = {
        barcelona: [
            {label: 'shots', value: 10},
            {label: 'crosses', value: 20},
            {label: 'outs', value: 12},
            {label: 'saves', value: 25},
            {label: 'corners', value: 8},
            {label: 'passes', value: 14}
        ],
        mancity: [
            {label: 'shots', value: 20},
            {label: 'crosses', value: 10},
            {label: 'outs', value: 22},
            {label: 'saves', value: 15},
            {label: 'corners', value: 18},
            {label: 'passes', value: 4}
        ]
    }

    return (
        <Spring className={`${styles.container} card`}>
            <div className={`${styles.container_item} d-flex flex-column justify-content-between card-padded`}>
                <h3>Results</h3>
                <div className="d-flex flex-column justify-content-between flex-1">
                    <ResponsiveContainer className="flex-1" width="100%" height="100%">
                        <PieChart>
                            <Pie data={pieData}
                                 dataKey="value"
                                 cx="50%"
                                 cy="50%"
                                 outerRadius={outerRadius}
                                 innerRadius={80}
                                 strokeWidth={2}
                                 stroke="var(--widget)"
                                 fill="#8884d8">
                                {
                                    pieData.map((entry, index) => (
                                        <Cell key={`cell-${index}`}
                                              fill={`var(--${PIE_COLORS[theme][index % PIE_COLORS[theme].length]})`}/>
                                    ))
                                }
                            </Pie>
                            <Tooltip content={<ChartTooltip/>}/>
                        </PieChart>
                    </ResponsiveContainer>
                    <div className="d-flex align-items-center justify-content-center g-14">
                        {
                            PIE_COLORS[theme].map((color, index) => (
                                <LegendItem key={index} color={color} text={pieData[index].name}/>
                            ))
                        }
                    </div>
                </div>
            </div>
            <div className={`${styles.container_item} d-flex flex-column g-30 card-padded`}>
                <div className="d-flex flex-column g-16">
                    <h3>Passes stats</h3>
                    <div className="tab-nav col-2">
                        <TabButton title="Barcelona"
                                   active={selectedTeam === 'barcelona'}
                                   type="color"
                                   color="purple"
                                   onClick={() => setSelectedTeam('barcelona')}/>
                        <TabButton title="Man. City"
                                   active={selectedTeam === 'mancity'}
                                   type="color"
                                   color="light-azure"
                                   onClick={() => setSelectedTeam('mancity')}/>
                    </div>
                </div>
                <ResponsiveContainer className="flex-1" width="100%" height="100%">
                    <RadarChart cx="50%" cy="50%" outerRadius="80%" data={polarData[selectedTeam]}>
                        <PolarGrid stroke="var(--border)"/>
                        <PolarAngleAxis dataKey="label"
                                        tick={props => renderPolarAngleAxis(props)}
                                        cx="50%"
                                        cy="50%"
                                        style={{
                                            textTransform: 'uppercase',
                                            fontFamily: 'var(--heading-font)',
                                            fontSize: '8px',
                                            fontWeight: '600',
                                        }}
                        />
                        <Radar dataKey="value"
                               activeDot={{stroke: selectedTeam === 'barcelona' ? 'var(--purple)' : 'var(--light-azure)'}}
                               stroke={selectedTeam === 'barcelona' ? 'var(--purple)' : 'var(--light-azure)'}
                               strokeWidth={4}
                               fill={selectedTeam === 'barcelona' ? 'var(--purple)' : 'var(--light-azure)'}
                               fillOpacity={0.1}/>
                        <Tooltip cursor={false} content={<ChartTooltip/>}/>
                    </RadarChart>
                </ResponsiveContainer>
            </div>
        </Spring>
    )
}

export default TeamResults