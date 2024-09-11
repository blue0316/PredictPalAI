// components
import CustomRating from '@ui/CustomRating';

const LeagueRatingItem = ({rating, max = 5, title, labelMin, labelMax}) => {
    return (
        <div className="d-flex flex-column g-4">
            <span className="text-12 text-700 text-header">{title}</span>
            <CustomRating value={rating} max={max} type="bars" />
            <div className="d-flex justify-content-between label h6">
                <span>{labelMin}</span>
                <span>{labelMax}</span>
            </div>
        </div>
    )
}

export default LeagueRatingItem