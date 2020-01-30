import React from 'react';
import logo from './logo.svg';
import './App.css';
import FormPlayer from './components/FormPlayer';
import Party from './components/Party';
import ListPlayers from './components/ListPlayers';

function App() {
  return (
    <div className="App">
      {/* <FormPlayer /> */}
      <ListPlayers />
      {/* <Party /> */}
    </div>
  );
}

export default App;
