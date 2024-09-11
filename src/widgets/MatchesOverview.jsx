// components
import Spring from '@components/Spring';
import ScrollContainer from '@components/ScrollContainer';
import {TabsList} from '@mui/base/TabsList';
import {TabPanel} from '@mui/base/TabPanel';
import {Tabs} from '@mui/base/Tabs';
import MatchCard from '@components/MatchCard';
import TabButton from '@ui/TabButton';

// hooks
import useMeasure from 'react-use-measure';
import {useState, useEffect, useRef} from 'react';

// data placeholder
import matches from '@db/matches';

const MatchesOverview = () => {
    const [activeTab, setActiveTab] = useState('live');
    const [ref, {height}] = useMeasure();
    const trackRef = useRef(null);

    const matchesLive = matches.filter(match => match.active === true);
    const matchesFinished = matches.filter(match => match.active === false);

    useEffect(() => {
        trackRef.current && trackRef.current.scrollTo(0, 0);
    }, [activeTab]);

    return (
        <Spring className="card h-3">
            <Tabs className="h-100" value={activeTab}>
                <div className="card-padded" ref={ref}>
                    <TabsList className="tab-nav col-2">
                        <TabButton title="Live"
                                   onClick={() => setActiveTab('live')}
                                   active={activeTab === 'live'}/>
                        <TabButton title="Finished"
                                   onClick={() => setActiveTab('finished')}
                                   active={activeTab === 'finished'}/>
                    </TabsList>
                </div>
                <ScrollContainer height={height}>
                    <div className="track" style={{padding: '0 var(--card-padding)'}} ref={trackRef}>
                        <TabPanel className="h-100" value="live" onClick={() => setActiveTab('live')}>
                            <div className="d-flex flex-column g-24" style={{paddingBottom: 24}}>
                                {
                                    matchesLive.map((match, index) => (
                                        <MatchCard key={index} match={match} index={index}/>
                                    ))
                                }
                            </div>
                        </TabPanel>
                        <TabPanel className="h-100" value="finished" onClick={() => setActiveTab('finished')}>
                            <div className="d-flex flex-column g-24" style={{paddingBottom: 24}}>
                                {
                                    matchesFinished.map((match, index) => (
                                        <MatchCard key={index} match={match} index={index}/>
                                    ))
                                }
                            </div>
                        </TabPanel>
                    </div>
                </ScrollContainer>
            </Tabs>
        </Spring>
    )
}

export default MatchesOverview