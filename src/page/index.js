import React, { useEffect, useState } from 'react'
import axios from 'axios';
import Post from '../components/post';
import Paginations from '../components/pagination';

const Pagination = () => {
    const [post , setPost] = useState([]);
    const [loading, setLoading] = useState(false);
    const [currentPage, setCurrentPage] = useState(1);
    const [postPerPage, setPostPerPage] = useState(10);
    
    useEffect(() => {
        const fetchPosts = async () => {
            setLoading(true);
            const res = await axios.get ('https://jsonplaceholder.typicode.com/posts');
            setPost(res.data);
            setLoading(false);
        }

        fetchPosts();
    }, []);
    
    //! Get current post
    const indexOfLastPost =currentPage * postPerPage;
    const indexOfFirstPost = indexOfLastPost - postPerPage;
    const currentPost = post.slice(indexOfFirstPost, indexOfLastPost)

  return (
    <div className='container'>
        <h2>Pagination</h2>
        <Post post={currentPost} loading={loading} />
        <Paginations postPerPage={postPerPage} totalPost={post.length}/>
    </div>
  )
}

export default Pagination