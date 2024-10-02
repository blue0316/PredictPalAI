import {useState, useEffect, useRef} from 'react';

const useDraggableScrollContainer = () => {
    const [isDragging, setIsDragging] = useState(false);
    const [startX, setStartX] = useState(0);
    const [scrollLeft, setScrollLeft] = useState(0);
    const [hasOverflow, setHasOverflow] = useState(false);
    const containerRef = useRef(null);

    useEffect(() => {
        const container = containerRef.current;
        const handleMouseDown = (e) => {
            setIsDragging(true);
            setStartX(e.pageX - container.offsetLeft);
            setScrollLeft(container.scrollLeft);
        };
        const handleMouseLeave = () => {
            setIsDragging(false);
        };
        const handleMouseUp = () => {
            setIsDragging(false);
        };
        const handleMouseMove = (e) => {
            if (!isDragging) return;
            e.preventDefault();
            const x = e.pageX - container.offsetLeft;
            const walk = (x - startX) * 3; //scroll-fast
            container.scrollLeft = scrollLeft - walk;
        };

        if (container.scrollWidth > container.clientWidth) {
            setHasOverflow(true);
        }

        container.addEventListener('mousedown', handleMouseDown);
        container.addEventListener('mouseleave', handleMouseLeave);
        container.addEventListener('mouseup', handleMouseUp);
        container.addEventListener('mousemove', handleMouseMove);

        return () => {
            container.removeEventListener('mousedown', handleMouseDown);
            container.removeEventListener('mouseleave', handleMouseLeave);
            container.removeEventListener('mouseup', handleMouseUp);
            container.removeEventListener('mousemove', handleMouseMove);
        };
    }, [isDragging, startX, scrollLeft]);

    return {containerRef, isDragging, hasOverflow};
}

export default useDraggableScrollContainer