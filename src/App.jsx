import Counter from './features/counter/Counter';

import './App.css';
import PostsList from './features/posts/PostsList';
import AddPostForm from './features/posts/AddPostForm';

function App() {

    return (
        <>
            <h1>Redux Toolkit Tutorial</h1>
            {/* <Counter /> */}
            <AddPostForm />
            <PostsList />
        </>
    );
};

export default App;
