// styling
import styles from './styles.module.scss';

// components
import Spring from '@components/Spring';
import SelectionList from '@ui/SelectionList';
import MatchResultColorItem from '@components/MatchResultColorItem';
import MatchResultFullCard from '@components/MatchResultFullCard';

// hooks
import {useState} from 'react';

// constants
import {FINALS_OPTIONS} from '@constants/selection_options';

// utils
import {getRandomInt} from '@utils/helpers';

// data placeholder
import finals from '@db/finals';

const MatchResultFinals = () => {
    const [selected, setSelected] = useState(FINALS_OPTIONS[0].value);

    return (
        <Spring className="card">
            <SelectionList options={FINALS_OPTIONS} active={selected} setActive={setSelected} />
            <div className={styles.container}>
                <div className="d-flex flex-column g-20">
                    {
                        finals[selected].map((match, index) => (
                            <MatchResultColorItem key={`${selected}-${index}`} match={match} index={index} type="final" />
                        ))
                    }
                </div>
                <MatchResultFullCard match={finals[selected][getRandomInt(0, 4)]} />
            </div>
        </Spring>
    )
}

export default MatchResultFinals