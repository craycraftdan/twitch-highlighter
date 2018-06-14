import React, { Component } from 'react';
import './index.css';
import styled from 'styled-components';
import { connect } from 'react-redux';
import { getTopGamesInfo } from './actions/index';
import TopNav from './components/TopNav/index';
import LeftNav from './components/LeftSideMenu/index';
import RightNav from './components/RightSideMenu/index';
import Routes from './routes/routes'


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
    return (
      <div>
        <TopNav />
        <FlexThree>
          <LeftNav />
          <Routes />
          <RightNav />
        </FlexThree>
      </div>
    );
  }
};

const mapDispatchTopProps = (dispatch) => ({
  getTop: (streamer) => dispatch(getTopGamesInfo())
});

const mapStateToProps = (state) => ({
  activeStreamer: state.activeStreamer
});

export default connect(mapStateToProps, mapDispatchTopProps)(App);