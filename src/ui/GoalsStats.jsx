const GoalsStats = ({ goals = 0 }) => {
    return (
        <div className="flex items-center gap-2">
            <i className="icon icon-ball text-12 text-header"/>
            <span className="h6 uppercase" style={{letterSpacing: '0.45px'}}>
                {goals} goals
            </span>
        </div>
    )
}

export default GoalsStats