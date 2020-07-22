import React from 'react';
import { Router, Route, Switch } from "react-router-dom";
import history from "./history";
import AboutMe from './AboutMe';
import Home from './Home';
import Projects from './Projects';
import Now from './Now';
import NotFoundPage from './NotFoundPage';

const App: React.FC = () => {
    return (
        <Router history={history}>
            <Switch>
                <Route path="/" exact component={Home} />
                <Route path="/about-me" component={AboutMe}/>
                <Route path="/projects" component={Projects}/>
                <Route path="/now" component={Now}/>
                <Route component={NotFoundPage}/> 
            </Switch>
        </Router>
    )
}

export default App;
