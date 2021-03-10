import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import Comments from '../Comments/Comments';

const PostDetails = () => {
    const {id}=useParams()
   const [postDetail,setPostDetail] =useState({})
  
    useEffect(() =>{
        const url =`https://jsonplaceholder.typicode.com/posts/${id}`
        fetch(url)
        .then(res=>res.json())
        .then(data=>setPostDetail(data))
    },[id])
    const [comment,setComment]= useState([])
    
    useEffect(() => {
        const url2 = `https://jsonplaceholder.typicode.com/posts/${id}/comments`
        fetch(url2)
        .then(res =>res.json())
        .then(data => setComment(data))

    },[id])
    // const {title,body,id}=postDetail
   return (
        <div>
            <h2>{postDetail.id}</h2>
            <h2>{postDetail.title}</h2>
            <p>{postDetail.body}</p>
            {
                comment.map(comment =><Comments comment={comment} key={comment.id}></Comments>)
            }
            
        </div>
    );
};

export default PostDetails;