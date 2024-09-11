// components
import PageHeader from '@layout/PageHeader';
import AppGrid from '@layout/AppGrid';
import GeneralSupport from '@widgets/GeneralSupport';
import HotField from '@widgets/HotField';
import MatchLiveEvents from '@widgets/MatchLiveEvents';
import TeamsLineups from '@widgets/TeamsLineups';
import ActiveActionsChart from '@widgets/ActiveActionsChart';
import PassesPolarChart from '@widgets/PassesPolarChart';
import PlayerFullInfo from '@widgets/PlayerFullInfo';
import Merch from '@widgets/Merch';
import ActiveMatchCard from '@widgets/ActiveMatchCard';

const widgets = {
    active_match: <ActiveMatchCard />,
    match_live_events: <MatchLiveEvents />,
    hot_field: <HotField />,
    teams_lineups: <TeamsLineups />,
    active_actions: <ActiveActionsChart />,
    passes_polar_chart: <PassesPolarChart />,
    player_full_info: <PlayerFullInfo />,
    merch: <Merch />,
    support: <GeneralSupport />
}

const MatchOverview = () => {
    return (
        <>
            <PageHeader title="Match Overview" />
            <AppGrid id="match_overview" widgets={widgets}/>
        </>
    )
}

export default MatchOverview