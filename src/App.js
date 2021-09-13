import {
  BrowserRouter as Router,
  Switch,
  Route,

} from "react-router-dom";

import Home from '@PLanding/Home'
import Dashboard from '@PDashboard/Dashboard'
import DocumentProduction from '@PDashboard/DocumentProduction'
import Contragents from '@PDashboard/Contragents'

function App() {
  return (
    <div className="App" >
      <Router>
        <Switch>
        <Route path="/dashboard/document">
            <DocumentProduction />
          </Route>
          <Route path="/dashboard/contragents">
            <Contragents />
          </Route>
          <Route path="/dashboard">
            <Dashboard />
          </Route>

          <Route component={Home} exact  path="/" />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
