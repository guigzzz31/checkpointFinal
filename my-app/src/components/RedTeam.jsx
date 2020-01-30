import React from 'react';

function RedTeam(props) {
  const { players, handleChange } = props;
    return(
      <div className="container-team-red">
      <p className="title-team-red">red Team</p>
      <select onChange={(e) => handleChange(e, "redTeam", "player3")}>
        {players.map((player, id) => (
          <option key={id} value={player.pseudo}>
            {player.pseudo}
          </option>
        ))}
      </select>
      <select onChange={(e) => handleChange(e, "redTeam", "player4")}>
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

export default RedTeam;