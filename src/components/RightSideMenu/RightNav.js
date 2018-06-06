import React, { Component } from 'react';

import { 
    RightNavContainer, 
    Title,
    InputBox,
    Label,
    InputName,
    SubmitBox,
    Icon
 } from './styles';

 const Create = require('./button-add.svg');

class RightNav extends Component {
    render() {
        return(
            <RightNavContainer>
                <Title>Create A Playlist!</Title>
                <InputBox>
                    <InputName required />
                    <Label>Name</Label>
                </InputBox>
                <SubmitBox>
                    Create  
                    <Icon src={Create} />
                </SubmitBox>
            </RightNavContainer>
        )
    }
} 

export default RightNav