import React, { useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import { Stack, Button } from "@mui/material";
import Comments from "./Comments";
import AddComment from "./modal/AddComment";
const PostDetails = () => {
  const { userId } = useParams();
  const [singlePost, setSinglePost] = useState([]);
  const [showComment, setShowComment] = useState(false);
  useEffect(() => {
    fetch(`https://jsonplaceholder.typicode.com/posts/${userId}`)
      .then((response) => response.json())
      .then((json) => setSinglePost(json));
  }, [userId]);
  const { id, title, body } = singlePost;
  return (
    <article>
      <Stack
        direction="row"
        justifyContent="left"
        alignItems="left"
        padding={1}
      >
        <Link to={`/`}>
          <Button size="small" variant="contained" type="button">
            Back
          </Button>
        </Link>
      </Stack>
      <div key={id} className="post">
        <h3>{title}</h3>
        <p>{body}</p>
        <p>
          {showComment && <Comments />}
          <Stack
            direction="row"
            justifyContent="space-between"
            alignItems="center"
            padding={5}
          >
            <Button
              size="small"
              variant="outlined"
              type="button"
              onClick={() => setShowComment(!showComment)}
            >
              {showComment ? "Hide Comments" : "Show Comments"}
            </Button>
            <AddComment />
          </Stack>
        </p>
      </div>
    </article>
  );
};

export default PostDetails;
