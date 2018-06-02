import React from 'react';

import HeartIconFilled from '../HeartFilled/index';

import  {
    LeftBar,
    HeartBox,
    StreamerBox,
    // StreamerAvatarPlaceHolder
} from './styles';


const LeftNav = (props) => {
    return(
        <LeftBar>
            <HeartBox>
                <HeartIconFilled style={{width: '28px', height: '28px', opacity: '0.7'}} />
            </HeartBox>
            <StreamerBox>
                {/* {
                    props.favs.length > 0
                        ?
                            props.favs.map( (streamer, i) => {
                                return (
                                    <StreamerAvatar 
                                        src={streamer.avatar} 
                                        key={i} 
                                        onClick={() => props.search(streamer.streamer)}
                                        />
                                )
                            })
                        :   <div>
                                <StreamerAvatarPlaceHolder/>
                                <StreamerAvatarPlaceHolder/>
                                <StreamerAvatarPlaceHolder/>
                                <StreamerAvatarPlaceHolder/>
                            </div>
                } */}
            </StreamerBox>
        </LeftBar>
    )
}

export default LeftNav