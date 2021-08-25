import {
  HashRouter as Router,
  Switch,
  Route,
} from "react-router-dom";

import Home from '@PLanding/Home'

function App() {
  return (
    <div className="App" >
      <Router>
        <Switch>
          <Route component={Home} path="/" />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
