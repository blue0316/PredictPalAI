// components
import PageHeader from '@layout/PageHeader';
import AppGrid from '@layout/AppGrid';
import PlayerProfileCard from '@widgets/PlayerProfileCard';
import TrainingPaceChart from '@widgets/TrainingPaceChart';
import GamesCalendar from '@widgets/GamesCalendar';
import ShotsStats from '@widgets/ShotStats';
import TrainingsPlanner from '@widgets/TrainingsPlanner';
import LatestMessages from '@widgets/LatestMessages';
import HotField from '@widgets/HotField';
import ChampionsLeague from '@widgets/ChampionsLeague';

const widgets = {
    profile_card: <PlayerProfileCard />,
    training_pace: <TrainingPaceChart />,
    calendar: <GamesCalendar />,
    shots: <ShotsStats />,
    planner: <TrainingsPlanner />,
    messages: <LatestMessages />,
    field: <HotField />,
    champions: <ChampionsLeague />
}

const Tickets = () => {
    return (
        <>
            <PageHeader title="Player Profile" />
            <AppGrid id="player_profile" widgets={widgets}/>
        </>
    )
}

export default Tickets