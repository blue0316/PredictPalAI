const GoalsStats = ({ goals = 0 }) => {
    return (
        <div className="d-flex align-items-center g-8">
            <i className="icon icon-ball text-12 text-header"/>
            <span className="h6 text-uppercase" style={{letterSpacing: '0.45px'}}>
                {goals} goals
            </span>
        </div>
    )
}

export default GoalsStats