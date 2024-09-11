// hooks
import useDraggableScrollContainer from '@hooks/useDraggableScrollContainer';

// utils
import classNames from 'classnames';

const DraggableScrollContainer = ({children, className, style = {}, wrapperEL}) => {
    const {containerRef, isDragging, hasOverflow} = useDraggableScrollContainer();
    const Wrapper = wrapperEL || 'div';

    return (
        <Wrapper className={classNames('draggable-container', className, {'isDragging': isDragging, 'isDraggable': hasOverflow})}
             ref={containerRef}
             style={{...style}}>
            {children}
        </Wrapper>
    )
}

export default DraggableScrollContainer