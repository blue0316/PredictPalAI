// components
import Spring from '@components/Spring';
import {NavLink} from 'react-router-dom';
import SelectionButton from '@ui/SelectionButton';
import ScrollContainer from '@components/ScrollContainer';
import DnDLayout from '@components/Todos/DnDLayout';

// hooks
import {useState} from 'react';
import useMeasure from 'react-use-measure';
import {useSelector} from 'react-redux';
import {useWindowSize} from 'react-use';

// utils
import dayjs from 'dayjs';

const TrainingsPlanner = () => {
    const [selectedMonth, setSelectedMonth] = useState(dayjs().format('MMMM'));
    const [headerRef, {height: headerHeight}] = useMeasure();
    const todos = useSelector(state => state['todos'].todos);
    const currentTodos = todos.filter(todo => dayjs(todo.timestamp).format('MMMM') === selectedMonth);
    const isSmallScreen = useWindowSize().width < 414;

    return (
        <Spring className="card height-w-2">
            <div className="card_header flex flex-col gap-5" ref={headerRef} style={{paddingBottom: 20}}>
                <div className="flex justify-between items-center">
                    <h3>Trainings {!isSmallScreen && 'planner'}</h3>
                    <NavLink className="text-button" to="/schedule">Scheduler</NavLink>
                </div>
                <div className="flex flex-wrap gap-5">
                    <SelectionButton type="group"
                                     text={dayjs().format('MMMM')}
                                     onClick={() => setSelectedMonth(dayjs().format('MMMM'))}
                                     active={selectedMonth === dayjs().format('MMMM')}/>
                    <SelectionButton type="group"
                                     text={dayjs().add(1, 'month').format('MMMM')}
                                     onClick={() => setSelectedMonth(dayjs().add(1, 'month').format('MMMM'))}
                                     active={selectedMonth === dayjs().add(1, 'month').format('MMMM')}/>
                    <SelectionButton type="group"
                                     text={dayjs().add(2, 'month').format('MMMM')}
                                     onClick={() => setSelectedMonth(dayjs().add(2, 'month').format('MMMM'))}
                                     active={selectedMonth === dayjs().add(2, 'month').format('MMMM')}/>
                </div>
            </div>
            <ScrollContainer height={headerHeight}>
                <div className="track flex flex-col gap-5 card-padded" style={{paddingTop: 0}}>
                    {currentTodos.length !== 0 ? <DnDLayout variant="planner" data={currentTodos}/> : null}
                </div>
            </ScrollContainer>
        </Spring>
    )
}

export default TrainingsPlanner