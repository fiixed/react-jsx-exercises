import './App.css';
import Comment from './components/Comment';
import comments from './comments';

function App() {
  return <div>
    {
        comments.map((comment) => (
            <Comment
                key={comment.key}
                pic={comment.pic}
                body={comment.body}
                />
        ))};

    </div>
}

export default App;
