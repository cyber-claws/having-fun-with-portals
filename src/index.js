import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import registerServiceWorker from './registerServiceWorker';
import { BrowserRouter, Switch, Route } from 'react-router-dom'

/**
 * Import our main pages
 */
import PageOne from './PageOne';
import PageTwo from './PageTwo';
import PageThree from './PageThree';

/**
 * Importing the mock Music component that will go onto our portal
 */
import MusicPlayer from './MusicPlayer';

/**
 * Import out default styles
 */
import './index.css';


/**
 * Render to main root div
 */

class Main extends Component {
    render() {
        return (
            <div>
                <MusicPlayer/>
                <BrowserRouter>
                    <Switch>
                        <Route exact path='/' component={PageOne}/>
                        <Route path='/pg2' component={PageTwo}/>
                        <Route path='/pg3' component={PageThree}/>
                    </Switch>
                </BrowserRouter>
            </div>
        );
    }
}
ReactDOM.render(
    <Main/>,
    document.getElementById('root')
);


registerServiceWorker();
