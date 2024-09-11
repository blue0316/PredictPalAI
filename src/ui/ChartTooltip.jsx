// styling
import styled from 'styled-components/macro';

export const StyledTooltip = styled.div`
  background: var(--tooltip-bg);
  box-shadow: 0 2px 16px rgba(75, 85, 110, 0.2);
  border-radius: 8px;
  font-family: var(--heading-font);
  color: var(--header);
  font-weight: 500;
  height: 30px;
  padding: 0 8px;
  min-width: 32px;
  display: flex;
  align-items: center;
  justify-content: center;
  line-height: 1;
  position: relative;
  text-transform: uppercase;

  &.multiple {
    flex-direction: column;
    align-items: flex-start;
    gap: 10px;
    padding: 10px;
    height: auto;

    .item {
      display: flex;
      align-items: center;
      gap: 8px;

      .color {
        width: 8px;
        height: 8px;
        border-radius: 50%;
        margin-top: 1px;
      }
    }
  }
`;

const ChartTooltip = ({active, payload, tooltip, arrow = false, multi = false, ...props}) => {
    if (multi) {
        if (active && payload && payload.length) {
            return (
                <StyledTooltip className="multiple text-12">
                    {payload.map((item, index) => (
                        <div className="item" key={index}>
                            <div className="color" style={{background: item.stroke ? item.stroke : item.fill}} />
                            <div className="value">{item.value}</div>
                        </div>
                    ))}
                </StyledTooltip>
            );
        }
        return null
    } else {
        if (!active || !payload[0]) return null
        return (
            <StyledTooltip className="text-12">{payload[0].value} {props.right && payload[0].dataKey}</StyledTooltip>
        )
    }
}

export default ChartTooltip;
