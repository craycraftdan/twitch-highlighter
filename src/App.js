import React, { Component } from 'react';
import './index.css';
import styled from 'styled-components';
import { connect } from 'react-redux';

import { getTopGamesInfo } from './actions/index';

import TopNav from './components/TopNav/index';
import LeftNav from './components/LeftSideMenu/index';
import RightNav from './components/RightSideMenu/index';
import PlayListBuilder from './pages/PlaylistBuilder/index';
import LandingPage from './pages/Landing/index';


const FlexThree = styled.div`
  display: felx;
  justify-content: space-between;
  width: 100%;
`

class App extends Component {

  componentDidMount() {
    this.props.getTop();
  }

  render() {
    console.log(this.props.activeStreamer)
    return (
      <div>
        <TopNav />

          <FlexThree>

            <LeftNav />
            {
              this.props.activeStreamer.streamer
                ? <PlayListBuilder />
                : <LandingPage />
            }
            <RightNav />

          </FlexThree>

      </div>

    );
  }
}

const mapDispatchTopProps = (dispatch) => ({
  getTop: (streamer) => dispatch(getTopGamesInfo())
});

const mapStateToProps = (state) => ({
  activeStreamer: state.activeStreamer
});

export default connect(mapStateToProps, mapDispatchTopProps)(App);