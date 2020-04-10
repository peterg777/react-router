import React from 'react'
import { BrowserRouter } from 'react-router-dom'
import NavBar from './components/Navbar'
import Home from './views/Home';
import Films from './views/Films';
import People from './views/People';
import Filmlist from './views/Filmlist';
import Peoplelist from './views/Peoplelist';


const App = () => {
    return (
        <BrowserRouter>
        <NavBar />
            <Switch>
            <Route exact path="/" component={Home} />
					<Route exact path="/films" component={Films} />
					<Route exact path="/people" component={People} />
					<Route exact path="/films/:id" component={Filmlist} />
					<Route exact path="/people/:id" component={Peoplelist} />

            </Switch>
        </BrowserRouter>
    );
};

export default App;