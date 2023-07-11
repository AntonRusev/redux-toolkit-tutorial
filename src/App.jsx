import { Routes, Route, Navigate } from 'react-router-dom';

// import Counter from './features/counter/Counter';
import PostsList from './features/posts/PostsList';
import AddPostForm from './features/posts/AddPostForm';
import SinglePostPage from './features/posts/SinglePostPage';
import EditPostForm from './features/posts/EditPostForm';
import Layout from './components/Layout';
import UsersList from './features/users/UsersList';
import UserPage from './features/users/UserPage';

import './App.css';

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

                    <Route path="user">
                        <Route index element={<UsersList />} />
                        <Route path=":userId" element={<UserPage />} />
                    </Route>

                    <Route path='*' element={<Navigate to="/" replace />} />

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
