import logo from './logo.svg';
import './App.css';
import Posts from './components/Posts';
import PostForm from './components/PostForm';
import FetchedPosts from './components/FetchedPosts';

function App() {
  return (
    <div className="container pt-3">
      <div classNam="row">
        <div className="col">
          <PostForm />
        </div>
      </div>
      <div className="row">
        <div className="col">
          <h2>Синхронные посты</h2>
          <Posts posts={[1, 2, 3]} />
        </div>
        <div className="col">
          <h2>Асинхронные посты</h2>
          <FetchedPosts posts={[]} />
        </div>
      </div>
    </div>
  );
}

export default App;
