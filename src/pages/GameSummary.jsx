// components
import PageHeader from '@layout/PageHeader';
import AppGrid from '@layout/AppGrid';
import PlayerHighlight from '@widgets/PlayerHighlight';
import TeamCompare from '@widgets/TeamCompare';
import ClubsByCountry from '@widgets/ClubsByCountry';
import MatchEventsLarge from '@widgets/MatchEventsLarge';
import MatchResultFinals from '@widgets/MatchResultFinals';
import PassesPolarChart from '@widgets/PassesPolarChart';

const widgets = {
    highlight: <PlayerHighlight />,
    compare: <TeamCompare />,
    passes_polar_chart: <PassesPolarChart />,
    clubs_by_country: <ClubsByCountry />,
    match_events: <MatchEventsLarge />,
    match_result: <MatchResultFinals />
}

const GameSummary = () => {
    return (
        <>
            <PageHeader title="Game summary" />
            <AppGrid id="game_summary" widgets={widgets}/>
        </>
    )
}

export default GameSummary