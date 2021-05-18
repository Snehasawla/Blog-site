//import { useState, useEffect } from 'react';
import './App.css';
//import Pagination from './paging/page';
import PostAPI from './services/blog';
//import { getpost} from '../src/services/blog'

function App() {


  return (
    <div className="Wrapper">
      <h1>Blogs</h1>
      <ul>
        <PostAPI />
        
      </ul>
      
    </div>
  );
}

export default App;
