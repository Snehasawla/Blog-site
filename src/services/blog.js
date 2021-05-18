import { useState, useEffect } from 'react';
import Pagination from '../paging/page';
import './blog.css';


const PostAPI =() => {

    const [blog, setsBlog] = useState([]);

    const getpost = async() => {
        const response = await fetch('https://jsonplaceholder.typicode.com/posts');
        setsBlog(await response.json());
    }

    useEffect(() => {
        getpost();
        }, [])

        return(
            <div className= 'container-fluid'>
                <h2>Post</h2>
                <div className="post">
                    <ul>
                    {
                        blog.map((item) => {
                            return (
                                <div class="card">
                                    <div class="card-body">
                                        <small>{item.id}</small>
                                        <h2 class="card-title">{item.title}</h2>
                                        <p class="card-text">{item.body}</p>
                                        {item.length > 0 ?(
                                          <Pagination data = {item.item}
                                          RenderComponent= {item.item}
                                          title = "Posts"
                                          pageLimit = {5}
                                          dataLimit= {10}/>): (
                                              <h2>No More Post.</h2>
                                          )}
                                    </div>
                                </div>
                            )
                        } )
                    }
                    </ul>
                    
                </div>

            </div>
        )
}

export default PostAPI;