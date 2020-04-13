import React from 'react';
import { BrowserRouter as Router, Switch, Route, } from 'react-router-dom';
import NavBar from './components/Navbar';
import Home from './views/Home';
import Films from './views/Films';
import People from './views/People';
import Filmlist from './views/Filmlist';
import Peoplelist from './views/Peoplelist';


const App = () => {
    return (
        <Router>
        <NavBar />
            <Switch>
            <Route exact path="/" component={Home} />
					<Route exact path="/Films" component={Films} />
					<Route exact path="/People" component={People} />
					<Route exact path="/Films/:name" component={Filmlist} />
					<Route exact path="/People/:name" component={Peoplelist} />

            </Switch>
        </Router>
    );
}

export default App;