import React from 'react';
import { render} from 'react-dom';
import { Router, Route, hashHistory} from 'react-router';
import App from './components/app';
import injectTapEventPlugin from 'react-tap-event-plugin';
injectTapEventPlugin();

const Render = (dom) => {
    render((
        <Router history={hashHistory}>
            <Route path="/" component={App}>
            </Route>
        </Router>
    ), dom);
}

const dom = document.createElement('div');
Render(dom);
document.body.appendChild(dom);

document.body.style = 'margin: 0; padding: 0';
document.title = 'XJTU Index';

export default Render;