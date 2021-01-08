import React from 'react';

function ProfilePic(props) {
    return <div> 
        <img src={props.pic} width="500" height="600" alt="profile pic"/>
    </div>
}

export default ProfilePic;