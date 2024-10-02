// components
import Grow from '@mui/material/Grow';
import Collapse from '@mui/material/Collapse';

// hooks
import {useForm} from 'react-hook-form';
import {useState, useId} from 'react';
import {useDispatch} from 'react-redux';

// actions
import {addTodo, toggleCollapse} from '@features/todos/todosSlice';

// utils
import PropTypes from 'prop-types';
import classNames from 'classnames';

const AddTodo = ({isVisible, visibilityHandler}) => {
    const {register, handleSubmit, reset, formState: {errors}} = useForm();
    const [task, setTask] = useState('');
    const [category, setCategory] = useState(null);
    const dispatch = useDispatch();
    const timestamp = Date.now();

    return (
        <Collapse in={isVisible}>
            <Grow in={isVisible} timeout={700}>
                <form className="d-flex flex-column g-20 card-padded">
                    <div className="d-flex flex-column g-20">
                        <input type="text"
                               value={task}
                               onChange={e => setTask(e.target.value)}
                               className={classNames('field', {'error': errors.task})}
                               placeholder="Task"
                               {...register('task', {required: true})}/>
                        <div></div>
                    </div>
                    <div className="d-grid col-2 g-20">
                        <button className="btn accept">Add</button>
                        <button className="btn decline">Cancel</button>
                    </div>
                </form>
            </Grow>
        </Collapse>
    )
}

AddTodo.propTypes = {
    isVisible: PropTypes.bool.isRequired,
    visibilityHandler: PropTypes.func.isRequired
}

export default AddTodo