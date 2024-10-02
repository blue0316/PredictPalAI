// components
import PageHeader from '@layout/PageHeader';
import AppGrid from '@layout/AppGrid';
import PRCard from '@widgets/PRCard';
import SignUpForm from '@widgets/SignUpForm';
import Testimonials from '@widgets/Testimonials';
import TaskList from '@widgets/TaskList';
import LocalFans from '@widgets/LocalFans';
import WidgetGroup from '@components/WidgetGroup';
import ClubFans from '@widgets/ClubFans';
import ClubFansMap from '@widgets/ClubFansMap';
import GamesCalendar from '@widgets/GamesCalendar';
import LatestMessages from '@widgets/LatestMessages';

const widgets = {
    club_fans_map: <ClubFansMap id="manunited" />,
    club_fans: <WidgetGroup>
        <ClubFans id="realmadrid" />
        <ClubFans id="manunited" />
    </WidgetGroup>,
    local_fans: <LocalFans />,
    pr: <PRCard />,
    sign_up: <SignUpForm standalone={false} />,
    testimonials: <Testimonials />,
    tasks: <TaskList />,
    calendar: <GamesCalendar />,
    messages: <LatestMessages />
}

const FansCommunity = () => {
    return (
        <>
            <PageHeader title="Fans community" />
            <AppGrid id="fans" widgets={widgets}/>
        </>
    )
}

export default FansCommunity