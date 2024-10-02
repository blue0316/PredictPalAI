import React from 'react';

const Standings = () => {
  const standingsData = [
    { user: 'Artur Chornyi', videos: 14, likes: 3, dislikes: 1, points: 35, medal: 'gold', levels: 10 },
    { user: 'Alice Doe', videos: 13, likes: 3, dislikes: 2, points: 32, medal: 'silver', levels: 9 },
    { user: 'Lian Doe', videos: 13, likes: 3, dislikes: 3, points: 30, medal: 'bronze', levels: 8 },
    { user: 'Super Lucky', videos: 12, likes: 4, dislikes: 3, points: 28, levels: 7 },
    { user: 'Laura', videos: 11, likes: 4, dislikes: 4, points: 27, levels: 6 },
    { user: 'Yulia Ignatova', videos: 11, likes: 4, dislikes: 6, points: 25, levels: 5 },
  ];

  return (
    <div className="bg-gray-900 p-6 rounded-lg mt-8">
      <h2 className="text-white text-lg mb-4 flex items-center">
        <span role="img" aria-label="cup">🏆</span> Standings
      </h2>
      <table className="w-full text-white">
        <thead>
          <tr className="border-b border-gray-700">
            <th className="text-left py-2">User</th>
            <th className="text-center py-2">Uploaded Videos</th>
            <th className="text-center py-2">Likes</th>
            <th className="text-center py-2">Dislikes</th>
            <th className="text-center py-2">Points</th>
            <th className="text-center py-2">Levels</th>
          </tr>
        </thead>
        <tbody>
          {standingsData.map((user, index) => (
            <tr 
              key={user.user} 
              className={`border-b border-gray-700 ${
                user.medal === 'gold' ? 'bg-yellow-300' :
                user.medal === 'silver' ? 'bg-gray-300' :
                user.medal === 'bronze' ? 'bg-orange-300' : ''
              }`}
            >
              <td className="py-2">
                <div className="flex items-center">
                  <span
                    className={`w-4 h-4 rounded-full mr-2 ${
                      user.medal === 'gold' ? 'bg-yellow-400' :
                      user.medal === 'silver' ? 'bg-gray-400' :
                      user.medal === 'bronze' ? 'bg-orange-400' : ''
                    }`}
                  ></span>
                  {user.user}
                </div>
              </td>
              <td className="text-center py-2">{user.videos}</td>
              <td className="text-center py-2">{user.likes}</td>
              <td className="text-center py-2">{user.dislikes}</td>
              <td className="text-center py-2">{user.points}</td>
              <td className="text-center py-2">
                {'⚽'.repeat(user.levels)}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      <div className="mt-4 flex justify-end">
        <div className="flex items-center space-x-4">
          <div className="flex items-center">
            <span className="w-4 h-4 rounded-full bg-yellow-400 mr-2"></span> Gold Medal
          </div>
          <div className="flex items-center">
            <span className="w-4 h-4 rounded-full bg-gray-400 mr-2"></span> Silver Medal
          </div>
          <div className="flex items-center">
            <span className="w-4 h-4 rounded-full bg-orange-400 mr-2"></span> Bronze Medal
          </div>
        </div>
      </div>
    </div>
  );
};

export default Standings;
