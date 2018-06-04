import React, { Component } from 'react';
import './index.css';
import styled from 'styled-components';

import TopNav from './components/TopNav/index';
import LeftNav from './components/LeftSideMenu/index';
import RightNav from './components/RightSideMenu/index';
import PlayListBuilder from './pages/PlaylistBuilder/index';


const FlexThree = styled.div`
  display: felx;
  justify-content: space-between;
  width: 100%;
`

class App extends Component {
  render() {
    return (
      <div>
        <TopNav />

          <FlexThree>

            <LeftNav />

            <PlayListBuilder />

            <RightNav />

          </FlexThree>

      </div>

    );
  }
}

export default App;