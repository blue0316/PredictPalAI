import React from 'react';
import "../../styles/AttackerTable.scss"

const AttackerTable = () => {
  const AttackingData = [
    { user: 'Artur Chornyi', videos: 14, likes: 3, dislikes: 1, points: 35, medal: 'gold', levels: 10 },
    { user: 'Alice Doe', videos: 13, likes: 3, dislikes: 2, points: 32, medal: 'silver', levels: 9 },
    { user: 'Lian Doe', videos: 13, likes: 3, dislikes: 3, points: 30, medal: 'bronze', levels: 8 },
    { user: 'Super Lucky', videos: 12, likes: 4, dislikes: 3, points: 28, levels: 7 },
    { user: 'Laura', videos: 11, likes: 4, dislikes: 4, points: 27, levels: 6 },
    { user: 'Yulia Ignatova', videos: 11, likes: 4, dislikes: 6, points: 25, levels: 5 },
  ];

  return (
    <div className="attacker-table">
      <h2>
        <span role="img" aria-label="cup">🏆</span> Standings
      </h2>
      <table>
        <thead>
          <tr>
            <th>User</th>
            <th>Uploaded Videos</th>
            <th>Likes</th>
            <th>Dislikes</th>
            <th>Points</th>
            <th>Levels</th>
          </tr>
        </thead>
        <tbody>
          {AttackingData.map((user) => (
            <tr key={user.user} className={user.medal ? user.medal : ''}>
              <td>
                <div className="flex items-center">
                  <span
                    className={`medal-indicator ${
                      user.medal === 'gold' ? 'gold' :
                      user.medal === 'silver' ? 'silver' :
                      user.medal === 'bronze' ? 'bronze' : ''
                    }`}
                  ></span>
                  {user.user}
                </div>
              </td>
              <td>{user.videos}</td>
              <td>{user.likes}</td>
              <td>{user.dislikes}</td>
              <td>{user.points}</td>
              <td>{'⚽'.repeat(user.levels)}</td>
            </tr>
          ))}
        </tbody>
      </table>
      <div className="medal-legend">
        <div className="legend-item">
          <span className="medal-indicator gold"></span> Gold Medal
        </div>
        <div className="legend-item">
          <span className="medal-indicator silver"></span> Silver Medal
        </div>
        <div className="legend-item">
          <span className="medal-indicator bronze"></span> Bronze Medal
        </div>
      </div>
    </div>
  );
};

export default AttackerTable;
