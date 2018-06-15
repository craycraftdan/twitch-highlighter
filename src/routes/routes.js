import React from 'react';
import { Switch, Route, withRouter } from 'react-router';
import LandingPage from '../pages/Landing/index';
import PlayListBuilder from '../pages/PlaylistBuilder/index';
import PlayListViewer from '../pages/PlaylistViewer/index';

const FakeComp = () => {
    return <div style={{marginTop: '100px'}}>
        asdfsadf <br />
        asdfsfd <br />
    </div>
}

class Routes extends React.Component{
    render() {
        // const _id = this.props.history.location.pathname.trim()
        return (
            <Switch>
                <Route exact path='/' component={LandingPage}/>
                <Route exact path='/PlayListBuilder' component={PlayListBuilder}/>
                <Route exact path='/PlayListViewer' component={PlayListViewer}/>
                <Route exact path='/PlayListViewer/:_id' component={FakeComp}/>   
            </Switch>
        )
    }
}
    
export default withRouter(Routes)
