import './App.css';
import Header from './header/header';
import PostAPI from './services/blog';

function App() {


  return (
    <div className="Container-fluid">
      <Header />
      <PostAPI />
      
    </div>
  );
}

export default App;
