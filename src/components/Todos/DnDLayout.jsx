// components
import Todo from '@components/Todos/Todo';
import {
    DndContext,
    closestCenter,
    TouchSensor,
    PointerSensor,
    useSensor,
    useSensors,
} from '@dnd-kit/core';
import {
    arrayMove,
    SortableContext,
    verticalListSortingStrategy,
    useSortable
} from '@dnd-kit/sortable';
import {CSS} from '@dnd-kit/utilities';
import {restrictToVerticalAxis} from '@dnd-kit/modifiers';

// hooks
import {useDispatch, useSelector} from 'react-redux';
import useMobileDetect from 'use-mobile-detect-hook';

// utils
import propTypes from 'prop-types';
import {updateOrder} from '@features/todos/todosSlice';

const DnDLayout = ({variant, data}) => {
    const device = useMobileDetect();
    const todos = useSelector(state => state['todos'].todos);
    const dispatch = useDispatch();
    const sensors = useSensors(useSensor(PointerSensor, {
        activationConstraint: {
            distance: 15,
        }
    }), useSensor(TouchSensor, {
        activationConstraint: {
            delay: 2000,
            tolerance: 5,
        },
    }));

    const SortableItem = (props) => {
        const {
            attributes,
            listeners,
            setNodeRef,
            transform,
            transition,
            isOver,
            isDragging,
        } = useSortable({id: props.id});

        const style = {
            transform: CSS.Transform.toString(transform),
            transition,
            zIndex: isOver || isDragging ? 10 : 0,
            position: 'relative',
            touchAction: 'none',
        };

        return (
            <div ref={setNodeRef} style={style} {...attributes} {...listeners}>
                {props.children}
            </div>
        );
    }

    const onDragEnd = e => {
        const {active, over} = e;

        if (active.id !== over.id) {
            const oldIndex = todos.findIndex(({id}) => id === active.id);
            const newIndex = todos.findIndex(({id}) => id === over.id);
            dispatch(updateOrder(arrayMove(todos, oldIndex, newIndex)));
        }
    }

    const list = data || todos;

    return (
        <DndContext sensors={sensors} collisionDetection={closestCenter} onDragEnd={onDragEnd}
                    modifiers={[restrictToVerticalAxis]} autoScroll={true}>
            <SortableContext items={list} strategy={verticalListSortingStrategy} disabled={!device.isDesktop()}>
                {list.map(todo => (
                    <SortableItem key={todo.id} id={todo.id}>
                        <Todo data={todo} variant={variant}/>
                    </SortableItem>
                ))}
            </SortableContext>
        </DndContext>
    )
}

DnDLayout.propTypes = {
    variant: propTypes.oneOf(['planner', 'list']).isRequired
}

export default DnDLayout