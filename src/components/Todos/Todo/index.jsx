// styling
import styles from './styles.module.scss';

// components
import Collapse from '@mui/material/Collapse';
import BasicCheckbox from '@ui/BasicCheckbox';
import MinimalCheckbox from '@ui/MinimalCheckbox';

// utils
import dayjs from 'dayjs';

// actions
import {toggleComplete, removeTodo} from '@features/todos/todosSlice';

// constants
import {TODO_LEGEND} from '@constants/todo';

// hooks
import {useDispatch} from 'react-redux';
import {useThemeProvider} from '@contexts/themeContext';

const Todo = ({data, variant}) => {
    const {theme} = useThemeProvider();
    const {id, name, timestamp, complete, label, expanded} = data;
    const dispatch = useDispatch();
    const checkboxColor = TODO_LEGEND.find(item => item.text.toLowerCase() === label.toLowerCase()).color;

    const TodoLayout = () => {
        switch (variant) {
            default:
            case 'list':
                return (
                    <div className={styles.list_item} tabIndex={0}>
                        <div className={styles.content}>
                            <BasicCheckbox id={`task-${id}`}
                                           color={checkboxColor}
                                           checked={complete}
                                           onChange={() => dispatch(toggleComplete({id}))}/>
                            <div className="d-flex flex-column g-2 flex-1">
                                <input className={`${styles.title} text-overflow`} type="text" defaultValue={name} readOnly={true}/>
                                <span className="label h6">
                                    {dayjs(timestamp).format('DD MMM YYYY / HH:mm')}
                                </span>
                            </div>
                            <div className={styles.secondary}>
                                <button className={`${styles.delete} label h6`}
                                        onClick={() => dispatch(removeTodo({id}))}>
                                   Remove
                                </button>
                                <div className={styles.category}>
                                    <span className={`${styles.category_label} label h6`}>{label}</span>
                                    <span className={styles.category_color}
                                          style={{backgroundColor: `var(--${checkboxColor})`}}/>
                                </div>
                            </div>
                        </div>
                    </div>
                )
            case 'planner':
                return (
                    <div className={`${styles.planner_item} ${styles[theme]} ${complete ? styles.checked : ''}`} tabIndex={0}>
                        <div className="d-flex flex-column g-8">
                            <span className={styles.title}>{name}</span>
                            <div className="d-flex align-items-center g-8">
                                    <span className={styles.category_color}
                                          style={{backgroundColor: `var(--${checkboxColor})`}}/>
                                    <span className={`${theme === 'dark' ? styles.timestamp : ''} label h6`}>
                                        {dayjs(timestamp).format('DD MMM YYYY')}
                                    </span>
                            </div>
                        </div>
                        <MinimalCheckbox id={`task-${id}`}
                                         checked={complete}
                                         onChange={() => dispatch(toggleComplete({id}))}/>
                    </div>
                )
        }
    }

    return (
        <Collapse in={expanded} timeout={300}>
            <TodoLayout/>
        </Collapse>
    )
}

export default Todo