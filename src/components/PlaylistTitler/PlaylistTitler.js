import React, { Component } from 'react';
import { connect } from 'react-redux';
import { ADD_TITLE_PLAYLIST } from '../../actions/constants';
import { 
    Title,
    InputBox,
    Label,
    InputName,
    SubmitBox,
    Icon
 } from './styles';
const Create = require('./button-add.svg');

class PlaylistTitler extends Component {
    constructor(props) {
        super(props);
        this.state = {
            title: ""
        }
        this.updateTitle = this.updateTitle.bind(this);
        this.handleEnter = this.handleEnter.bind(this);
        this.saveTitle = this.saveTitle.bind(this);
    }

    updateTitle = (e) => {
        const { value } = e.target;
        this.setState({title: value});
    }

    handleEnter = (e) => {
        e.keyCode === 13 && this.saveTitle()
    }

    saveTitle = () => {
        const title = this.state;
        this.props.saveTitle(title);
        this.setState({title: ""});
    }

    render() {
        return(
            <div>
                <Title>Create A Playlist!</Title>
                <InputBox>
                    <InputName 
                        required 
                        value={this.state.title}
                        onChange={this.updateTitle}
                        onKeyDown={this.handleEnter}
                        />
                    <Label>Name</Label>
                </InputBox>
                <SubmitBox onClick={this.saveTitle}>
                    Create  
                    <Icon src={Create} />
                </SubmitBox>
            </div>
        )
    }
} 

const mapDispatchToProps = (dispatch) => ({
    saveTitle: ({title}) => dispatch({type: ADD_TITLE_PLAYLIST, payload: title})
});

export default connect(null, mapDispatchToProps)(PlaylistTitler);


