// components
import CustomRating from '@ui/CustomRating';

const LeagueRatingItem = ({rating, max = 5, title, labelMin, labelMax}) => {
    return (
        <div className="flex flex-col gap-1">
            <span className="text-12 font-bold text-header">{title}</span>
            <CustomRating value={rating} max={max} type="bars" />
            <div className="flex justify-between label h6">
                <span>{labelMin}</span>
                <span>{labelMax}</span>
            </div>
        </div>
    )
}

export default LeagueRatingItem