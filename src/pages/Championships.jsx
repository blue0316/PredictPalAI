// components
import PageHeader from '@layout/PageHeader';
import AppGrid from '@layout/AppGrid';
import MatchesSegmentChart from '@widgets/MatchesSegmentChart';
import LiveMatches from '@widgets/LiveMatches';
import TeamStatsSlider from '@widgets/TeamStatsSlider';
import MonthMatches from '@widgets/MonthMatches';
import MatchResultColor from '@widgets/MatchResultColor';

const widgets = {
    segment_chart: <MatchesSegmentChart />,
    live_matches: <LiveMatches variant="small" />,
    team_stats: <TeamStatsSlider />,
    month_matches: <MonthMatches />,
    match_result: <MatchResultColor />
}

const Championships = () => {
    return (
        <>
            <PageHeader title="Championships" />
            <AppGrid id="championships" widgets={widgets} />
        </>
    )
}

export default Championships