
const Comments = (props) => {
    const comment=props.comment
    
    return (
        <div>
          
            <p><strong>Comments</strong>: {comment.body}</p>
            
        </div>
    );
};

export default Comments;