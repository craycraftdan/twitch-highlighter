import React, { Component } from 'react';

import { 
    RightNavContainer, 
    Title,
    InputBox,
    Label,
    InputName
 } from './styles';

class RightNav extends Component {
    render() {
        return(
            <RightNavContainer>
                <Title>Create A Playlist!</Title>
                <InputBox>
                    <InputName required />
                    <Label>Name</Label>
                </InputBox>
            </RightNavContainer>
        )
    }
} 

export default RightNav