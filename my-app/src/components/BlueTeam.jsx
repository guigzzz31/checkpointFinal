import React from 'react';

function BlueTeam(props) {
    const { players, handleChange } = props;
    return(
      <div className="container-team-blue">
      <p className="title-team-blue">blue Team</p>
      <select onChange={(e) => handleChange(e, "blueTeam", "player1")}>
        {players.map((player, id) => (
          <option key={id} value={player.pseudo}>
            {player.pseudo}
          </option>
        ))}
      </select>
      <select onChange={(e) => handleChange(e, "blueTeam", "player2")}>
        {players.map((player, id) => (
          <option key={id} value={player.pseudo}>
            {player.pseudo}
          </option>
        ))}
      </select>
      <button>Winner</button>
      <button>Looser</button>
    </div>
    )
  }

export default BlueTeam;