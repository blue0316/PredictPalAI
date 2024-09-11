// styling
import styles from './styles.module.scss';
import styled from 'styled-components/macro';

// components
import Spring from '@components/Spring';
import ClubInfo from '@components/ClubInfo';
import {Cell, ResponsiveContainer, Scatter, ScatterChart, Tooltip, XAxis, YAxis} from 'recharts';
import ChartTooltip from '@ui/ChartTooltip';
import AnimatedCount from '@components/AnimatedCount';

// hooks
import useArrayNav from '@hooks/useArrayNav';
import {useThemeProvider} from '@contexts/themeContext';

// data placeholder
import team_compare from '@db/team_compare';

const StyledClubInfo = styled.div`
  .main {
    display: none !important;
  }

  // tablet portrait
  @media screen and (min-width: 768px) {
    .main {
      display: flex !important;
    }
    
    &:last-of-type .info {
      flex-direction: row-reverse;
      text-align: right;
    }
  }
`;

const CustomScatterShape = ({cx, cy, fill, ...props}) => {
    const color = fill === 'var(--red)' ? 'red' : 'purple';
    const isDominant = props.dom === props.dataKey;

    return (
        <svg width="10" height="222" viewBox="0 0 10 222" x={cx} y={cy} fill="none"
             xmlns="http://www.w3.org/2000/svg">
            {
                isDominant && (
                    <path opacity="0.5" d="M5 28.3799V220.38"
                          stroke={`url(#${color}_line)`} strokeWidth="2"
                          strokeLinecap="round"/>
                )
            }
            <path fillRule="evenodd" clipRule="evenodd"
                  d="M5 10C7.76142 10 10 7.76142 10 5C10 2.23858 7.76142 0 5 0C2.23858 0 0 2.23858 0 5C0 7.76142 2.23858 10 5 10Z"
                  fill={fill}/>
            <defs>
                <linearGradient id="red_line" x1="2" y1="128" x2="2" y2="1" gradientUnits="userSpaceOnUse">
                    <stop stopColor="var(--widget)"/>
                    <stop offset="1" stopColor="#ED0423"/>
                </linearGradient>
                <linearGradient id="purple_line" x1="2" y1="128" x2="2" y2="1" gradientUnits="userSpaceOnUse">
                    <stop stopColor="var(--widget)"/>
                    <stop offset="1" stopColor="var(--purple)"/>
                </linearGradient>
            </defs>
        </svg>
    );
}

const TeamCompareChart = () => {
    const {theme, direction} = useThemeProvider();
    const {index, navigate} = useArrayNav(Object.keys(team_compare));
    const isRTL = direction === 'rtl';

    const getAverageValues = (arr) => {
        let totalA = 0, totalB = 0, count = 0;

        for (let i = 0; i < arr.length; i++) {
            totalA += arr[i].a;
            totalB += arr[i].b;
            count++;
        }

        const averageA = totalA / count;
        const averageB = totalB / count;

        return {averageA, averageB};
    }

    return (
        <Spring className="card h-2 d-flex flex-column g-30">
            <div className="card_header">
                <div className="d-flex align-items-center justify-content-between p-relative">
                    <StyledClubInfo>
                        <ClubInfo id="bayern"/>
                    </StyledClubInfo>
                    <span className={`${styles.vs} h3`}>vs</span>
                    <StyledClubInfo>
                        <ClubInfo id="barcelona"/>
                    </StyledClubInfo>
                </div>
            </div>
            <div className="d-flex flex-column border-top flex-1 card-padded">
                <div className="d-flex justify-content-between p-relative">
                    <div className="d-flex align-items-center g-20">
                        <button data-direction="prev" onClick={navigate} aria-label="Previous">
                            <i className="icon-arrow-left"/>
                        </button>
                        <h2 className={`${styles.a} ${styles.num}`}>
                            <AnimatedCount
                                count={getAverageValues(team_compare[Object.keys(team_compare)[index]]).averageA.toFixed(2)}
                                decimals={2}/>
                        </h2>
                    </div>
                    <span className={styles.separator}/>
                    <div className="d-flex align-items-center g-20">
                        <h2 className={`${styles.b} ${styles.num}`}>
                            <AnimatedCount
                                count={getAverageValues(team_compare[Object.keys(team_compare)[index]]).averageB.toFixed(2)}
                                decimals={2}/>
                        </h2>
                        <button data-direction="next" onClick={navigate} aria-label="Next">
                            <i className="icon-arrow-right"/>
                        </button>
                    </div>
                </div>
                <ResponsiveContainer className="flex-1" width="100%" height="100%">
                    <ScatterChart margin={false} data={team_compare[Object.keys(team_compare)[index]]}>
                        <XAxis reversed={isRTL} hide/>
                        <YAxis orientation={isRTL ? 'right' : 'left'} hide/>
                        <Scatter dataKey="a" shape={CustomScatterShape}>
                            {
                                team_compare[Object.keys(team_compare)[index]].map((entry, i) => {
                                    return (
                                        <Cell key={`cell-${i}`}
                                              fill="var(--red)"
                                              theme={theme}
                                              dom={entry.a > entry.b ? 'a' : 'b'}
                                              dataKey="a"/>
                                    )
                                })
                            }
                        </Scatter>
                        <Scatter dataKey="b" shape={CustomScatterShape}>
                            {
                                team_compare[Object.keys(team_compare)[index]].map((entry, i) => {
                                    return (
                                        <Cell key={`cell-${i}`}
                                              fill="var(--purple)"
                                              theme={theme}
                                              dom={entry.a > entry.b ? 'a' : 'b'}
                                              dataKey="b"/>
                                    )
                                })
                            }
                        </Scatter>
                        <Tooltip cursor={false} content={<ChartTooltip/>}/>
                    </ScatterChart>
                </ResponsiveContainer>
            </div>
        </Spring>
    )
}

export default TeamCompareChart