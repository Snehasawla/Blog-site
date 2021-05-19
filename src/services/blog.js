import { useState, useEffect } from 'react';
import Pagination from '../paging/page';
import './blog.css';
import Post from './Post';


const PostAPI =() => {

    const [posts, setsBlog] = useState([]);

    const getpost = async() => {
        const response = await fetch('https://jsonplaceholder.typicode.com/posts');
        setsBlog(await response.json());
    }

    useEffect(() => {
        getpost();
        }, [])

        return(
            <div className= 'container-fluid postApi'>
                           
                    {posts.length > 0 ?(
                    <Pagination 
                    data = {posts}
                    RenderComponent= {Post}
                    title = "Posts"
                    pageLimit = {5}
                    dataLimit= {10}/>): (
                        <h2>No More Post.</h2>
                    )}                

            </div>
        )
}

export default PostAPI;