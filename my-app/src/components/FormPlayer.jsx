import React from 'react';
import axios from 'axios';
import TextField from '@material-ui/core/TextField';
import Icon from '@material-ui/core/Icon';
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';

class FormPlayer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      pseudo: '',
      birthday: '',
      punchline: ''
    }
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange = (e) => {
    this.setState({ [e.target.name]: e.target.value })
  }

  handleSubmitPlayer = (e) => {
    const { pseudo, birthday, punchline } = this.state;

    e.preventDefault();
    axios.post('/beloteparty/formulaire', {
        pseudo,
        birthday,
        punchline
    })
  }

  render() {
    const { pseudo, birthday, punchline } = this.state;
    return (
      <form className="form-container"  onSubmit={this.handleSubmitPlayer} >
        <TextField type="text" id="standard-basic" label="Player" name="pseudo" value={pseudo} onChange={this.handleChange} />
        <TextField
          type="date"
          id="date"
          label="Birthday"
          name="birthday"
          defaultValue="2017-05-24"
          InputLabelProps={{
            shrink: true,
          }}
          value={birthday}
          onChange={this.handleChange}
        />
        <TextField id="standard-basic" type="text" label="Punchline" name="punchline" value={punchline} onChange={this.handleChange} />
        {/* <TextField id="standard-basic" label="Punchline" type="file" /> */}
        <Button
          variant="contained"
          color="primary"
          type="submit"
        >
          Send
      </Button>
      </form>
    )
  }
}

export default FormPlayer;