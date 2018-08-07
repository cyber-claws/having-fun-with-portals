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
    constructor(props) {
        super(props);
        this.state = {
            time: new Date().getSeconds()// State variable of parent that is passed to portal child
        }
    }

    componentDidMount() {
        this.startTime();
    }

    startTime = () => {
        /**
         * This is a simple function that get's the current time(seconds only)
         * then updates the state variable time.
         */
        let now = new Date();
        let seconds = now.getSeconds();
        this.setState({
            time: seconds
        });
        var t = setTimeout(this.startTime, 500);
    }

    render() {
        return (
            <div>
                <MusicPlayer parentState={this.state.time}/>
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
