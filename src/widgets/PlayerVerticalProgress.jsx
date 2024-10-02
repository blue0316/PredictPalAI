// components
import Spring from '@components/Spring';
import PlayerInfo from '@components/PlayerInfo';
import LabeledProgress from '@ui/LabeledProgress';
import DraggableScrollContainer from '@components/DraggableScrollContainer';

// hooks
import {useThemeProvider} from '@contexts/themeContext';

const PlayerVerticalProgress = () => {
    const {theme} = useThemeProvider();

    const data = [
        {label: 'bar', value: 87},
        {label: 'mci', value: 72},
        {label: 'psg', value: 96},
        {label: 'liv', value: 84},
        {label: 'bay', value: 69},
        {label: 'che', value: 58},
        {label: 'atl', value: 79},
        {label: 'juv', value: 91},
        {label: 'rea', value: 65},
        {label: 'man', value: 77},
        {label: 'bar', value: 87},
        {label: 'mci', value: 72},
        {label: 'psg', value: 96},
        {label: 'liv', value: 84},
    ];

    return (
        <Spring className="card d-flex flex-column justify-content-between card--side-shadow g-16">
            <PlayerInfo wrapperClass="card-padded"
                        style={{paddingBottom: 0}}
                        title="Gareth Bale"
                        subtitle="Minutes played"
                        number={11}/>
            <DraggableScrollContainer className="d-flex g-16" style={{padding: '0 30px 20px'}}>
                {
                    data.map((item, i) => (
                        <LabeledProgress value={item.value}
                                         label={item.label}
                                         barHeight={90}
                                         trackColor={theme === 'light' ? 'body' : 'border'}
                                         key={i}/>
                    ))
                }
            </DraggableScrollContainer>
        </Spring>
    )
}

export default PlayerVerticalProgress