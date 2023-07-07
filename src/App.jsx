import Counter from './features/counter/Counter';

import './App.css';

import PostsList from './features/posts/PostsList';
import AddPostForm from './features/posts/AddPostForm';
import SinglePostPage from './features/posts/SinglePostPage';
import EditPostForm from './features/posts/EditPostForm';

import Layout from './components/Layout';
import { Routes, Route } from 'react-router-dom';

function App() {

    return (
        <>
            <Routes>
                <Route patch="/" element={<Layout />}>

                    <Route index element={<PostsList />} />

                    <Route path="post">
                        <Route index element={<AddPostForm />} />
                        <Route path=":postId" element={<SinglePostPage />} />
                        <Route path="edit/:postId" element={<EditPostForm />} />
                    </Route>

                </Route>
            </Routes>

            {/* <h1>Redux Toolkit Tutorial</h1>
            <Counter />
            <AddPostForm />
            <PostsList /> */}
        </>
    );
};

export default App;
