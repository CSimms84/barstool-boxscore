import React from 'react';
import './styles.css'; // Assuming your styles are in a file called styles.css

const BoxscoreHeader = () => {
  return (
    <div className="boxscore__team boxscore__team--header">
      {/* Other elements go here */}
      <label></label>
      <div className="boxscore__team__units">
        {/* ... */}
      </div>
      <div className="boxscore__team__results">
        {/* ... */}
      </div>
    </div>
  );
};


const BoxscoreTeam = ({ team, units, results, isHeader, children }) => {
  const teamClass = isHeader ? 'boxscore__team--header' : `boxscore__team--${team}`;
  return (
    <div className={`boxscore__team ${teamClass}`}>
      <label>{team}</label>
      <div className="boxscore__team__units">
        {units.map((unit, index) => (
          <span key={index}>{unit}</span>
        ))}
      </div>
      <div className="boxscore__team__results">
        {results.map((result, index) => (
          <span key={index}>{result}</span>
        ))}
      </div>
      {children}
    </div>
  );
};

const Boxscore = () => {
  // Example data, replace with your own data source
  const teams = [
    {
      team: 'CHC',
      units: [1, 0, 2, 0, 0, 0, 0, 1, 1],
      results: [5, 12, 0]
    },
    // Add more teams as necessary
  ];

  return (
    <div className="boxscore">
      <BoxscoreHeader />
      {teams.map((teamData, index) => (
        <BoxscoreTeam key={index} {...teamData} />
      ))}
      {/* Add additional JSX for details and any other parts of your UI */}
    </div>
  );
};

const App = () => {
  return (
    <div>
      <Boxscore />
      {/* Add more components as needed */}
    </div>
  );
};

export default App;
