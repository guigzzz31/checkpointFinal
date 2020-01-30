import React from 'react';
import axios from 'axios';

class ListPlayers extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      players: [],
      playerSelected: {}
    }
  }

  componentDidMount() {
    axios
      .get('beloteparty/formulaire/listplayer')
      .then(res => res.data)
      .then(results =>
        this.setState({
          players: results
        })
      );
  }

  render() {
    const { players } = this.state;
    return (
      <div className="listPlayer-container">
        <select>
          {players.map((player, id) => (
            <option key={id} value={player.pseudo}>
              {player.pseudo}
            </option>
          ))}
        </select>
      </div>
    )
  }
}

export default ListPlayers;