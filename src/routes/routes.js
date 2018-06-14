import React from 'react';
import { Switch, Route, withRouter } from 'react-router';
import LandingPage from '../pages/Landing/index';
import PlayListBuilder from '../pages/PlaylistBuilder/index';
import PlayListViewer from '../pages/PlaylistViewer/index';

class Routes extends React.Component{
    render() {
        return (
            <Switch>
                <Route exact path='/' component={LandingPage}/>
                <Route exact path='/PlayListBuilder' component={PlayListBuilder}/>
                <Route exact path='/PlayListViewer' component={PlayListViewer}/>
                <Route exact path='/PlayListViewer:id' component={PlayListViewer}/>
            </Switch>
        )
    }
}
    
export default withRouter(Routes)
