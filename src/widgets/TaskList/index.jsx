// styling
import styles from './styles.module.scss';

// components
import Spring from '@components/Spring';
import LegendItem from '@ui/LegendItem';
import ScrollContainer from '@components/ScrollContainer';
import DnDLayout from '@components/Todos/DnDLayout';
import CustomSelect from '@ui/CustomSelect';
import AddFormContainer from '@components/AddFormContainer';

// hooks
import {useState, useRef, useEffect} from 'react';
import {useSelector, useDispatch} from 'react-redux';
import useMeasure from 'react-use-measure';
import {useForm, Controller} from 'react-hook-form';

// utils
import classNames from 'classnames';
import {nanoid} from 'nanoid';

// actions
import {addTodo, toggleCollapse} from '@features/todos/todosSlice';

// constants
import {TODO_LEGEND, TODO_OPTIONS} from '@constants/todo';

const TaskList = () => {
    const {control, handleSubmit, register, reset, formState: {errors}} = useForm({
        defaultValues: {
            title: '',
            type: null
        }
    });
    const [formVisible, setFormVisible] = useState(false);

    const [headerRef, {height: headerHeight}] = useMeasure();
    const [footerRef, {height: footerHeight}] = useMeasure();
    const trackRef = useRef(null);

    const todos = useSelector(state => state['todos'].todos);
    const dispatch = useDispatch();

    const onSubmit = data => {
        const {title, type} = data;
        const id = nanoid(5);
        dispatch(addTodo({
            id,
            name: title,
            label: type.value,
            timestamp: Date.now(),
            expanded: false
        }));
        setFormVisible(false);
        setTimeout(() => dispatch(toggleCollapse({id})), 300);
        reset();
    }

    const onReset = () => {
        reset();
        setFormVisible(false);
    }

    useEffect(() => {
        trackRef.current && trackRef.current.scrollTo(0, 0);
    }, [formVisible]);

    return (
        <Spring className="card h-2 d-flex flex-column justify-content-between">
            <div className={`${styles.header} card_header d-flex`} ref={headerRef}>
                <h3>Tasks</h3>
                <div className="d-flex g-16">
                    {
                        TODO_LEGEND.map((item, index) => (
                            <LegendItem key={index} {...item}/>
                        ))
                    }
                </div>
            </div>
            <ScrollContainer height={headerHeight + footerHeight}>
                <div className={`${styles.main} track`} ref={trackRef}>
                    <AddFormContainer open={formVisible}>
                        <form className="d-flex flex-column g-20"
                              onSubmit={handleSubmit(onSubmit)}
                              style={{padding: '20px 30px 10px'}}>
                            <div className="d-flex flex-column g-20">
                                <input className={classNames('field', {'field--error': errors.title})}
                                       type="text"
                                       placeholder="Task name"
                                       {...register('title', {required: true})}/>
                                <Controller name="type"
                                            control={control}
                                            rules={{required: true}}
                                            render={({field}) => (
                                                <CustomSelect value={field.value}
                                                              onChange={field.onChange}
                                                              innerRef={field.ref}
                                                              options={TODO_OPTIONS}
                                                              placeholder="Task type"
                                                              className={classNames('field', {'field--error': errors.type})}/>
                                            )}/>
                            </div>
                            <div className="d-grid col-2 g-20">
                                <button className="btn">Submit</button>
                                <button className="btn btn--outlined" type="reset" onClick={onReset}>
                                    Cancel
                                </button>
                            </div>
                        </form>
                    </AddFormContainer>
                    {todos.length !== 0 ? <DnDLayout variant="list"/> : null}
                </div>
            </ScrollContainer>
            <div className="card_footer" ref={footerRef} style={{paddingTop: 20}}>
                <button className="btn w-100" onClick={() => setFormVisible(true)} disabled={formVisible}>
                    Add new task
                </button>
            </div>
        </Spring>
    )
}

export default TaskList