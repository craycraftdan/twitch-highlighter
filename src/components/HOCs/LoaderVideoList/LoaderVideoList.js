import React, { Component } from 'react';
import { Loader } from './styles.js';

const LoaderVideoList = (WrappedComponent) => {
    return class LoaderHOC extends Component {
        isEmpty(prop) {
            return(
                prop === null ||
                prop === undefined
            )
        }
        
        render() {
            return this.isEmpty(this.props.videos) 
            ? <Loader />
            : <WrappedComponent {...this.props} />   
        }
    }
}

LoaderVideoList.defaultProps = {
    videos: []
}

export default LoaderVideoList