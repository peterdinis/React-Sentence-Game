import React from 'react';
import {Route, Switch} from 'react-router-dom';
import Navbar from './components/Navbar';
import CreateSentence from './components/CreateSentence';

function App() {
  return (
    <div className="App">
        <Navbar />
        <Switch>
          <Route exact path='/' component={CreateSentence} />
        </Switch>
    </div>
  );
}

export default App;
