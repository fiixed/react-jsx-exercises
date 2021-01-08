import React from 'react';
import ProfilePic from './ProfilePic';
import CommentBody from './CommentBody';


function Comment(props) {
return <div>
    <ProfilePic pic={props.pic}/>
    <CommentBody body={props.body}/>
</div>
}

export default Comment;