// components
import Spring from '@components/Spring';
import TabButton from '@ui/TabButton';
import {PieChart, Pie, Cell, ResponsiveContainer, Tooltip} from 'recharts';
import ChartTooltip from '@ui/ChartTooltip';

// hooks
import {useState} from 'react';

const data = {
    first: [
        {name: 'Group A', value: 400},
        {name: 'Group B', value: 300},
        {name: 'Group C', value: 300}
    ],
    second: [
        {name: 'Group A', value: 500},
        {name: 'Group B', value: 800},
        {name: 'Group C', value: 200}
    ]
}

const COLORS = ['var(--azure)', 'var(--grass)', 'var(--accent)'];

const PassesPieChart = () => {
    const [selectedHalf, setSelectedHalf] = useState('first');

    return (
        <Spring className="card d-flex flex-column justify-content-between">
            <h3 className="card_header">Passes stats</h3>
            <div style={{height: 300}}>
                <ResponsiveContainer width="100%" height="100%">
                    <PieChart>
                        <Pie
                            data={data[selectedHalf]}
                            cx="50%"
                            cy="50%"
                            innerRadius={0}
                            outerRadius={130}
                            dataKey="value"
                            stroke="var(--widget)"
                            strokeWidth={5}
                        >
                            {data[selectedHalf].map((entry, index) => (
                                <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]}/>
                            ))}
                        </Pie>
                        <Tooltip content={<ChartTooltip/>}/>
                    </PieChart>
                </ResponsiveContainer>
            </div>
            <div className="card_footer" style={{paddingTop: 0}}>
                <div className="tab-nav col-2">
                    <TabButton title="First half"
                               active={selectedHalf === 'first'}
                               onClick={() => setSelectedHalf('first')}/>
                    <TabButton title="Second half"
                               active={selectedHalf === 'second'}
                               onClick={() => setSelectedHalf('second')}/>
                </div>
            </div>
        </Spring>
    )
}

export default PassesPieChart