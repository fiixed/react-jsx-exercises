import Comment from '../comments-full/src/components/Comment';
import comments from '../comments-full/src/comments';

let Comments = () => {
    return <div>
    {
        comments.map((comment) => (
            <Comment
                pic={comment.pic}
                body={comment.body}
                />
        ))};

    </div>
}

ReactDOM.render(<Comments />, document.getElementById('root'))