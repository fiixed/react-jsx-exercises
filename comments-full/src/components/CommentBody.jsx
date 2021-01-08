import React from 'react';

function CommentBody(props) {
    return <div> 
        <h4>username</h4>
        <p>{props.body}</p>
    </div>
}

export default CommentBody;