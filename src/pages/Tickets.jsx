// components
import PageHeader from '@layout/PageHeader';
import AppGrid from '@layout/AppGrid';
import Ticket from '@widgets/Ticket';
import User from '@widgets/User';
import GamesCalendar from '@widgets/GamesCalendar';
import Merch from '@widgets/Merch';
import LatestMessages from '@widgets/LatestMessages';
import League from '@widgets/League';
import LiveMatches from '@widgets/LiveMatches';
import WidgetGroup from '@components/WidgetGroup';
import TeamBasicCard from '@components/TeamBasicCard';

const widgets = {
    ticket: <Ticket />,
    user: <User />,
    calendar: <GamesCalendar />,
    merch: <Merch />,
    messages: <LatestMessages />,
    promo: <League />,
    live: <LiveMatches />,
    teams: <WidgetGroup>
        <TeamBasicCard id="bayern" />
        <TeamBasicCard id="bvb" />
    </WidgetGroup>
}

const Tickets = () => {
    return (
        <>
            <PageHeader title="My Tickets" />
            <AppGrid id="tickets" widgets={widgets}/>
        </>
    )
}

export default Tickets