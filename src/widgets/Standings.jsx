// components
import Spring from '@components/Spring';
import TeamScoreRow from '@components/TeamScoreRow';

const Standings = () => {
    const data = [
        {
            name: 'Club Atlético de Madrid',
            color: 'red',
            score: 9
        },
        {
            name: 'FC Internazionale Milano',
            color: 'blue',
            score: 6
        },
        {
            name: 'Celtic FC',
            color: 'green',
            score: 6
        },
        {
            name: 'Liverpool FC',
            color: 'orange',
            score: 0
        }
    ];

    return (
        <Spring className="card flex flex-col gap-4 card-padded">
            <div className="flex flex-col">
                <h3>Group E</h3>
                <p className="text-12">Standing after group stage</p>
            </div>
            <div className="flex flex-col gap-0.5">
                {
                    data.map((item, index) => (
                        <TeamScoreRow key={index} data={item} index={index} />
                    ))
                }
            </div>
        </Spring>
    )
}

export default Standings