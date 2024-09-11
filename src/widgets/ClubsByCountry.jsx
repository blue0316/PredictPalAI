// components
import Spring from '@components/Spring';
import ClubCard from '@components/ClubCard';
import SelectionList from '@ui/SelectionList';
import ScrollContainer from '@components/ScrollContainer';

// hooks
import {useState} from 'react';
import useMeasure from 'react-use-measure';

// data placeholder
import clubs_by_country from '@db/clubs_by_country';

const ClubsByCountry = () => {
    const countries = clubs_by_country.map(item => item.country);
    const [country, setCountry] = useState(countries[0]);
    const clubs = clubs_by_country.find(item => item.country === country).clubs;
    const [ref, {height}] = useMeasure();

    return (
        <Spring className="card h-4">
            <SelectionList options={countries} active={country} setActive={setCountry} innerRef={ref}/>
            <ScrollContainer height={height}>
                <div className="track d-flex flex-column g-20" style={{padding: 20}}>
                    {
                        clubs.map((club, index) => (
                            <ClubCard key={`${club.name}-${country}`} country={country} club={club} index={index}/>
                        ))
                    }
                </div>
            </ScrollContainer>
        </Spring>
    )
}

export default ClubsByCountry