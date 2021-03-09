import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import Comments from '../Comments/Comments';

const PostDetails = () => {
    const {id}=useParams()
   const [postDetail,setPostDetail] =useState({})
   const url =`https://jsonplaceholder.typicode.com/posts/${id}`
    useEffect(() =>{
        fetch(url)
        .then(res=>res.json())
        .then(data=>setPostDetail(data))
    },[id])
    const [comment,setComment]= useState([])
    const url2 = `https://jsonplaceholder.typicode.com/posts/${id}/comments`
    useEffect(() => {
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
                comment.map(comment =><Comments comment={comment}></Comments>)
            }
            
        </div>
    );
};

export default PostDetails;