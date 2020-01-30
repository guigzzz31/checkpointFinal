import React from 'react';
import axios from 'axios';
import './party.css'
import BlueTeam from './BlueTeam';
import RedTeam from './RedTeam';

class Party extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      players: [],
      blueTeam: {
        player1: '',
        player2: ''
      },
      redTeam: {
        player3: '',
        player4: ''
      }
    }
    this.handleChange = this.handleChange.bind(this);
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

  handleChange({target}, team, player) {   
    const { value } = target
    this.setState((prevState) => ({
      [team]: {
        ...prevState[team],
        [player]: value
      }
    }))
  }

  render() {
    const { players } = this.state;
    return (
      <div className="container-party">
        <p className="title">let's play yo</p>
        <BlueTeam players={players} handleChange={this.handleChange}/>
        <p className="versus">VS</p>
        <RedTeam players={players} handleChange={this.handleChange} />
      </div>
    )
  }
}

export default Party;