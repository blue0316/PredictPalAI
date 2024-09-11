// styling
import styled from 'styled-components/macro';
import theme from 'styled-theming';

// components
import Spring from '@components/Spring';
import LeagueHeader from '@components/LeagueHeader';
import TeamScoreRow, {StyledRow} from '@components/TeamScoreRow';

// hooks
import {useThemeProvider} from '@contexts/themeContext';

// assets
import english_premier from '@assets/clubs/english_premier.webp';

// data placeholder
import league_standings from '@db/league_standings';

const TableHeader = styled(StyledRow)`
  display: flex;
  justify-content: space-between;
  align-items: center;
  background: ${theme('theme', {
    light: 'var(--body)',
    dark: '#414D55'
  })};
  color: var(--btn-text) !important;

  &.ltr {
    padding: 0 4px 0 10px;
  }

  &.rtl {
    padding: 0 10px 0 4px;
  }

  div {
    background: ${theme('theme', {
      light: 'var(--body)',
      dark: '#414D55'
    })};
  }

  .points {
    margin-right: 4px;
  }
`;

const LeagueStandings = () => {
    const {direction} = useThemeProvider();
    const tableData = league_standings.sort((a, b) => b.pts - a.pts);

    return (
        <Spring className="card d-flex flex-column g-20 card-padded">
            <LeagueHeader title={<>English <span className="d-block">Premier League</span></>}
                          img={english_premier}
                          variant="compact"/>
            <div className="d-flex flex-column g-4">
                <TableHeader className={`label h6 ${direction}`}>
                    <span className="flex-1">Club</span>
                    <div className="points">
                        <span>W</span>
                        <span>D</span>
                        <span>L</span>
                    </div>
                    <span>PTS</span>
                </TableHeader>
                <div className="d-flex flex-column g-1">
                    {
                        tableData.map((item, index) => (
                            <TeamScoreRow key={index} data={item} index={index} variant="league"/>
                        ))
                    }
                </div>
            </div>
        </Spring>
    )
}

export default LeagueStandings