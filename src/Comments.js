import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
const Comments = () => {
  const { userId } = useParams();
  const [comments, setComments] = useState([]);

  useEffect(() => {
    const fetchComments = async () => {
      const response = await fetch(
        `https://jsonplaceholder.typicode.com/posts/${userId}/comments`
      );
      const comments = await response.json();
      setComments(comments);
    };
    fetchComments();
  }, [userId]);
  console.log(comments);
  return (
    <section className="commentGrid">
      {comments.map((comment) => {
        const { postId, name, email, body } = comment;
        return (
          <div key={postId} className="comment">
            <div className="text">
              <h5>{name}</h5>
              <a href={email}>{email}</a>
            </div>
            <p>{body}</p>
          </div>
        );
      })}
    </section>
  );
};

export default Comments;
