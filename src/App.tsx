import React from 'react';
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Home from './Home';

const App: React.FC = () => {
    return (
        <BrowserRouter>
            <Switch>
                <Route path="/" component={Home} exact={true} />
                {/* <Route path="/about-me" component={AboutMe}/> */}
                {/* <Route path="/projects" component={Projects}/> */}
                {/* <Route component={NotFoundPage}/>  */}
            </Switch>
        </BrowserRouter>
    )
}

export default App;
