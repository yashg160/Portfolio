import React from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import Home from '../screens/Home';
import About from '../screens/About';
import Contact from '../screens/Contact';
import Skills from '../screens/Skills';

export default class MainComponent extends React.Component {
    render() {
        return (
            <Switch>
                <Route exact path="/home" component={Home}/>
                <Route exact path="/about" component={About}/>
                <Route exact path="/skills" component={Skills}/>
                <Route exact path="/contact" component={Contact} />
                <Route path="/" component={Home} />
                <Redirect to="/home"/>
            </Switch>
        )
    }
}