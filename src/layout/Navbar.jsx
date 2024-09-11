// components
import SidebarTrigger from '@ui/SidebarTrigger';
import Headroom from 'react-headroom';
import Logo from '@components/Logo';

const PageHeader = () => {
    const styles = {
        padding: '15px',
        background: 'var(--widget)',
        borderBottom: '1px solid var(--border)'
    }

    const getHeaderHeight = () => {
        const header = document.querySelector('.headroom-wrapper');
        return `${header.offsetHeight || 0}px`
    }

    const onPin = () => {
        document.documentElement.style.setProperty('--header-active', getHeaderHeight())
    }

    const onUnpin = () => {
        document.documentElement.style.setProperty('--header-active', '0px')
    }

    return (
        <Headroom onPin={onPin} onUnpin={onUnpin} style={{transition: 'all .5s ease-in-out', zIndex: 1000}}>
            <div
                className="d-flex align-items-center justify-content-between" style={styles}>
                <Logo size="sm"/>
                <SidebarTrigger/>
            </div>
        </Headroom>
    )
}

export default PageHeader