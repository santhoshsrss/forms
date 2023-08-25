import React from 'react'

const Post = ({post, loading}) => {
    if(loading) {
        return<h2>Loading...</h2>
    }
    return(
        <ul>
            {post.map(pos => (
                <li key={pos.id} className='listGroup'><span className="title">Title: </span>{pos.title}
                <li><span className="title">Paragraph:</span> {pos.body}</li>
                </li>
                
            ))}
        </ul>
  )
}

export default Post