import React from 'react';
import { useHistory } from 'react-router';

const Post = (props) => {
    const {body,title,id} = props.post;
    const historyId=useHistory()

    const showDetails=id=>{
        historyId.push(`/post/${id}`)
    }
    return (
        <div>
            <h2>{id}. {title}</h2>
            <button onClick={()=>showDetails(id)}>Show details</button>
        </div>
    );
};

export default Post;