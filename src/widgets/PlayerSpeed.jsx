import styled from 'styled-components/macro';

// components
import Spring from '@components/Spring';
import PlayerInfo from '@components/PlayerInfo';
import {Fragment} from 'react';

// hooks
import {useGauge} from 'use-gauge';
import {useThemeProvider} from '@contexts/themeContext';
import {useWindowSize} from 'react-use';

// assets
import avatar from '@assets/players/11.webp';

const START_ANGLE = 45;
const END_ANGLE = 315;

const Wrapper = styled.div`
  margin-top: 50px;
`;

const PlayerSpeed = () => {
    const {theme} = useThemeProvider();
    const {width} = useWindowSize();
    const color = theme === 'light' ? 'var(--body)' : 'var(--border)';
    const gauge = useGauge({
        domain: [0, 100],
        startAngle: START_ANGLE,
        endAngle: END_ANGLE,
        numTicks: 24,
        diameter: width < 768 ? 170 : 200,
    });

    const needle = gauge.getNeedleProps({
        value: 27.8,
        baseRadius: 3,
        tipRadius: 1
    });

    return (
        <Spring className={`card d-flex flex-column ${width < 414 ? 'g-20' : 'g-30'}`}>
            <PlayerInfo wrapperClass="card_header"
                        avatar={avatar}
                        title="Gareth Bale"
                        subtitle="Average sprint speed"
                        number={11} />
            <div className="border-top flex-1 card-padded">
                <Wrapper>
                    <svg className="w-100" {...gauge.getSVGProps()} style={{overflow: 'visible'}}>
                        <g id="arcs">
                            <path
                                {...gauge.getArcProps({
                                    offset: 30,
                                    startAngle: START_ANGLE,
                                    endAngle: END_ANGLE
                                })}
                                stroke={color}
                                strokeLinecap="round"
                                strokeWidth={30}
                                fill="none"
                            />
                            <path
                                {...gauge.getArcProps({
                                    offset: 30,
                                    startAngle: START_ANGLE,
                                    endAngle: gauge.valueToAngle(27.8)
                                })}
                                fill="none"
                                stroke="var(--grass)"
                                strokeLinecap="round"
                                strokeWidth={30}
                            />
                        </g>
                        <g id="ticks">
                            {gauge.ticks.map((angle) => {
                                const asValue = gauge.angleToValue(angle);
                                const showText = asValue === 20 || asValue === 80 || asValue === 50;

                                return (
                                    <Fragment key={`tick-group-${angle}`}>
                                        <line
                                            stroke="var(--border)"
                                            strokeWidth={2}
                                            {...gauge.getTickProps({ angle, length: showText ? 12 : 6 })}
                                        />
                                        {showText && (
                                            <text
                                                className="text-sm fill-gray-400 font-medium"
                                                {...gauge.getLabelProps({ angle, offset: 20 })}
                                            >
                                                {asValue}
                                            </text>
                                        )}
                                    </Fragment>
                                );
                            })}
                        </g>
                        <g id="needle">
                            <polyline fill="#414D55" points={needle.points} />
                        </g>
                    </svg>
                </Wrapper>
                <div className="d-flex flex-column align-items-center justify-content-center">
                    <h3>27.8 km/h</h3>
                    <span className="label h6">87 meters</span>
                </div>
            </div>
        </Spring>
    )
}

export default PlayerSpeed