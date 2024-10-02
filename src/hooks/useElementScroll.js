import {useEffect, useState, useRef} from 'react';

const useElementScroll = () => {
    const ref = useRef(null);
    const [isOverflown, setIsOverflown] = useState(undefined);
    const [contentHeight, setContentHeight] = useState(undefined);
    const [isTop, setIsTop] = useState(true);
    const [isBottom, setIsBottom] = useState(false);

    const handleScroll = () => {
        const { current } = ref;

        if (current.children[0].scrollTop === 0) {
            current.classList.add('is-top');
            setIsTop(true);
        } else {
            current.classList.remove('is-top');
            setIsTop(false);
        }

        const inScrolledToBottom =
            current.children[0].scrollHeight === (Math.ceil(current.children[0].scrollTop) + current.children[0].clientHeight)
            ||
            current.children[0].scrollHeight === (Math.floor(current.children[0].scrollTop) + current.children[0].clientHeight);

        if (inScrolledToBottom) {
            current.classList.add('is-bottom');
            setIsBottom(true);
        } else {
            current.classList.remove('is-bottom');
            setIsBottom(false);
        }
    }

    useEffect(() => {
        const { current } = ref;

        const trigger = () => {
            setContentHeight(current.children[0].scrollHeight);

            const hasOverflow = current.children[0].scrollHeight > current.children[0].clientHeight;

            setIsOverflown(hasOverflow);

            current?.classList.toggle('has-overflow', hasOverflow);

            current.children[0].addEventListener('scroll', handleScroll);
        };

        if (current) {

            if ('ResizeObserver' in window) {
                new ResizeObserver(trigger).observe(current);
            }
            trigger();
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    } , [ref, contentHeight]);

    return { ref, isOverflown, isTop, isBottom };
}

export default useElementScroll