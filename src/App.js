import {
  HashRouter as Router,
  Switch,
  Route,

} from "react-router-dom";

import Home from '@PLanding/Home'
import Dashboard from '@PDashboard/Dashboard'
import DocumentProduction from '@PDashboard/DocumentProduction'
import Contragents from '@PDashboard/Contragents'
import LegalForm from '@PDashboard/LegalForm'
import Groups from '@PDashboard/Groups'
import Bank from "@PDashboard/Bank";
import Registry from "@PDashboard/Registry";

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
          <Route path="/dashboard/settings/legalform">
            <LegalForm />
          </Route>
          <Route path="/dashboard/settings/bank">
            <Bank />
          </Route>
          <Route path="/dashboard/settings/users/registry">
            <Registry />
          </Route>
          <Route path="/dashboard/settings/users/groups">
            <Groups />
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
