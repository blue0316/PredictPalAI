// components
import PageHeader from '@layout/PageHeader';
import AppGrid from '@layout/AppGrid';
import User from '@widgets/User';
import WidgetGroup from '@components/WidgetGroup';
import Weather from '@widgets/Weather';
import Attendance from '@widgets/Attendance';
import TeamStatsProgress from '@widgets/TeamStatsProgress';
import PassesPolarChart from '@widgets/PassesPolarChart';
import BassPossessionAreaChartMini from '@widgets/BassPossessionAreaChartMini';
import MatchResultBasic from '@widgets/MatchResultBasic';
import TeamsLineups from '@widgets/TeamsLineups';
import MatchLiveEvents from '@widgets/MatchLiveEvents';
import Coach from '@widgets/Coach';
import PlayerBasicCard from '@components/PlayerBasicCard';

const widgets = {
    user: <User />,
    group1: <WidgetGroup>
        <Attendance />
        <Coach />
    </WidgetGroup>,
    group2: <WidgetGroup>
        <Weather />
        <PlayerBasicCard />
    </WidgetGroup>,
    team_stats_progress: <TeamStatsProgress />,
    passes_polar_chart: <PassesPolarChart />,
    ball_possession: <BassPossessionAreaChartMini />,
    match_result: <MatchResultBasic />,
    teams_lineups: <TeamsLineups />,
    match_live_events: <MatchLiveEvents />
}

const MatchSummary = () => {
    return (
        <>
            <PageHeader title="Match Summary" />
            <AppGrid id="match_summary" widgets={widgets}/>
        </>
    )
}

export default MatchSummary