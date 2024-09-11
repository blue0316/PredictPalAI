// components
import Spring from '@components/Spring';
import DoubleRangeSlider from '@ui/DoubleRangeSlider';

// hooks
import {useState} from 'react';

const NotificationsSchedule = () => {
    const [value, setValue] = useState([8, 18]);

    const formatValue = (val) => {
        const rounded = Math.round(val * 2) / 2;
        const hours = Math.floor(rounded);
        const minutes = (rounded - hours) * 60;
        const minutesString = minutes.toFixed().padStart(2, '0');
        return hours + ':' + minutesString;
    }

    return (
        <Spring className="card card-padded h-1 d-flex flex-column justify-content-between g-16">
            <div>
                <h3>Notifications Schedule</h3>
                <p className="text-12">Choose how often you want to receive alerts</p>
            </div>
            <div className="d-flex flex-column g-16">
                <DoubleRangeSlider value={value}
                                   min={0}
                                   max={24}
                                   step={0.5}
                                   ariaLabel="Notifications Schedule"
                                   valueText={(val) => formatValue(val)}
                                   onChange={(e, val) => setValue(val)}
                                   valueLabelDisplay="on"/>
                <button className="btn">Apply</button>
            </div>
        </Spring>
    )
}

export default NotificationsSchedule