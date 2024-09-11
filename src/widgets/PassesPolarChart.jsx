// components
import Spring from '@components/Spring';
import LegendItem from '@ui/LegendItem';
import {Radar, RadarChart, PolarGrid, PolarAngleAxis, ResponsiveContainer, Tooltip} from 'recharts';
import ChartTooltip from '@ui/ChartTooltip';

// hooks
import {useWindowSize} from 'react-use';

// utils
import {renderPolarAngleAxis} from '@utils/helpers';

const PassesPolarChart = () => {
    const {width} = useWindowSize()
    const data = [
        {value: 'shots', a: 10, b: 15},
        {value: 'crosses', a: 20, b: 7},
        {value: 'outs', a: 12, b: 22},
        {value: 'saves', a: 25, b: 6},
        {value: 'corners', a: 8, b: 18},
        {value: 'passes', a: 14, b: 28}
    ]

    return (
        <Spring className="card d-flex flex-column card-padded g-30">
            <h3>Passes stats</h3>
            <div className={width >= 768 ? 'flex-1' : ''} style={{height: 240}}>
                <ResponsiveContainer width="100%" height="100%">
                    <RadarChart cx="50%" cy="50%" outerRadius="80%" data={data}>
                        <PolarGrid stroke="var(--border)"/>
                        <PolarAngleAxis dataKey="value"
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
                        <Radar dataKey="a"
                               activeDot={{stroke: 'var(--accent)'}}
                               stroke="var(--accent)"
                               strokeWidth={4}
                               fill="var(--accent)"
                               fillOpacity={0.1}/>
                        <Radar dataKey="b"
                               activeDot={{stroke: 'var(--red)'}}
                               stroke="var(--red)"
                               strokeWidth={4}
                               fill="var(--red)"
                               fillOpacity={0.1}/>
                        <Tooltip cursor={false} content={<ChartTooltip multi/>}/>
                    </RadarChart>
                </ResponsiveContainer>
            </div>
            <div className="d-flex justify-content-center g-20">
                <LegendItem color="accent" text="Juventus"/>
                <LegendItem color="red" text="Bayern"/>
            </div>
        </Spring>
    )
}

export default PassesPolarChart