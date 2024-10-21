// components
import Spring from '@components/Spring';
import TabButton from '@ui/TabButton';
import Progress from '@ui/Progress';

// hooks
import {useState} from 'react';

const TeamCompare = () => {
    const [selected, setSelected] = useState('barcelona');

    const data = [
        {
            name: 'barcelona',
            goals: 2,
            attempts: 12
        },
        {
            name: 'bvb',
            goals: 1,
            attempts: 8
        }
    ]

    return (
        <Spring className="card flex flex-col g-30 card-padded">
            <div className="tab-nav col-2">
                <TabButton
                    title="Barcelona"
                    active={selected === 'barcelona'}
                    onClick={() => setSelected('barcelona')}
                    type="color"
                    color="purple"
                />
                <TabButton
                    title="Dortmund"
                    active={selected === 'bvb'}
                    onClick={() => setSelected('bvb')}
                    type="color"
                    color="accent"
                />
            </div>
            <div className="flex flex-col justify-between flex-1 gap-6">
                {
                    data.find(item => item.name === selected) && (
                        <>
                            <div className="flex flex-col gap-2">
                                <h6 className="label">Goals: <span className="font-bold">{data.find(item => item.name === selected).goals}</span></h6>
                                <Progress value={30} barColor="purple" trackColor="accent"/>
                            </div>
                            <div className="flex flex-col gap-2">
                                <h6 className="label">Total attempts: <span className="font-bold">{data.find(item => item.name === selected).attempts}</span></h6>
                                <Progress value={60} barColor="purple" trackColor="accent"/>
                            </div>
                        </>
                    )
                }
            </div>
        </Spring>
    )
}

export default TeamCompare