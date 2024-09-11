// components
import PageHeader from '@layout/PageHeader';
import AppGrid from '@layout/AppGrid';
import PassesPieChart from '@widgets/PassesPieChart';
import LineDotsChart from '@widgets/LineDotsChart';
import PlayerMultiProgress from '@widgets/PlayerMultiProgress';
import PlayerVerticalProgress from '@widgets/PlayerVerticalProgress';
import PlayerSpeed from '@widgets/PlayerSpeed';
import ChampionshipPositionChart from '@widgets/ChampionshipPositionChart';
import TeamCompareChart from '@widgets/TeamCompareChart';
import LiveMatches from '@widgets/LiveMatches';
import WidgetGroup from '@components/WidgetGroup';
import PlayerDiscipline from '@widgets/PlayerDiscipline';
import PlayerBasicCard from '@components/PlayerBasicCard';

const widgets = {
    player_cards: <WidgetGroup>
        <PlayerBasicCard/>
        <PlayerDiscipline/>
    </WidgetGroup>,
    passes_pie_chart: <PassesPieChart />,
    dots_chart: <LineDotsChart />,
    multi_progress: <PlayerMultiProgress />,
    vertical_progress: <PlayerVerticalProgress />,
    speed: <PlayerSpeed />,
    championship_position: <ChampionshipPositionChart />,
    team_compare: <TeamCompareChart />,
    live_matches: <LiveMatches variant="small" />
}

const Statistics = () => {
    return (
        <>
            <PageHeader title="Statistics" />
            <AppGrid id="statistics" widgets={widgets}/>
        </>
    )
}

export default Statistics