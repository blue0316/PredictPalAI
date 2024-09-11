// components
import Spring from '@components/Spring';
import SelectionList from '@ui/SelectionList';
import MatchResultColorItem from '@components/MatchResultColorItem';
import ScrollContainer from '@components/ScrollContainer';

// hooks
import {useState, useRef, useEffect} from 'react';
import useMeasure from 'react-use-measure';

// constants
import {GROUPS_OPTIONS} from '@constants/selection_options';

// data placeholder
import groups_matches from '@db/groups_matches';

const MatchResultColor = () => {
    const [ref, {height}] = useMeasure();
    const trackRef = useRef(null);
    const [group, setGroup] = useState(GROUPS_OPTIONS[0].value);
    const groupMatches = groups_matches.filter(match => match.group.toLowerCase() === group);

    useEffect(() => {
        trackRef.current && trackRef.current.scrollTo({top: 0, behavior: 'smooth'});
    }, [group]);

    return (
        <Spring className="card h-4">
            <SelectionList options={GROUPS_OPTIONS} active={group} setActive={setGroup} innerRef={ref}/>
            <ScrollContainer height={height}>
                <div className="track d-flex flex-column g-20" ref={trackRef} style={{padding: 20}}>
                    {
                        groupMatches.map((match, index) => (
                            <MatchResultColorItem key={match.id} match={match} index={index}/>
                        ))
                    }
                </div>
            </ScrollContainer>
        </Spring>
    )
}

export default MatchResultColor