// components
import PageHeader from '@layout/PageHeader';
import AppGrid from '@layout/AppGrid';
import LeagueRating from '@widgets/LeagueRating';
import MatchesOverview from '@widgets/MatchesOverview';
import TeamStatsCard from '@components/TeamStatsCard';
import TeamPulse from '@widgets/TeamPulse';
import GamesCalendar from '@widgets/GamesCalendar';
import Standings from '@widgets/Standings';
import BallPossessionAreaChart from '@widgets/BallPossessionAreaChart';
import LineDotsChart from '@widgets/LineDotsChart';
import WidgetGroup from '@components/WidgetGroup';

const widgets = {
    league_rating: <LeagueRating />,
    matches_overview: <MatchesOverview />,
    team_stats: <WidgetGroup>
                    <TeamStatsCard id="manunited" value={14} />
                    <TeamStatsCard id="chelsea" value={12} />
                </WidgetGroup>,
    team_pulse: <TeamPulse />,
    calendar: <GamesCalendar />,
    standings: <Standings />,
    ball_possession: <BallPossessionAreaChart />,
    dots_chart: <LineDotsChart />
}

const LeagueOverview = () => {
    return (
        <>
            <PageHeader title="English Premier League" />
            <AppGrid id="league_overview" widgets={widgets}/>
        </>
    )
}

export default LeagueOverview