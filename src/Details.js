import React, { useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import { Stack, Button, IconButton } from "@mui/material";
import DeleteIcon from "@mui/icons-material/Delete";
import AddPost from "./modal/AddPost";
const Details = () => {
  const { id } = useParams();
  const [posts, setPosts] = useState([]);
  useEffect(() => {
    const fetchPosts = async () => {
      const response = await fetch(
        `https://jsonplaceholder.typicode.com/users/${id}/posts`
      );
      const posts = await response.json();
      setPosts(posts);
    };
    fetchPosts();
  }, [id]);
  console.log(posts);
  return (
    <section>
      <Stack
        direction="row"
        justifyContent="space-between"
        alignItems="flex-start"
        padding={1}
      >
        <Link to={`/`}>
          <Button size="small" variant="contained" type="button">
            Back
          </Button>
        </Link>
        <AddPost />
      </Stack>
      <div className="section">
        {posts.map((post) => {
          const { userId, id, title } = post;
          return (
            <div key={userId} className="title">
              <Link style={{ textDecoration: "none" }} to={`/posts/${id}`}>
                <div
                  style={{
                    display: "flex",
                    alignItems: "center",
                  }}
                >
                  <Stack direction="row" alignItems="left" spacing={1}>
                    <IconButton aria-label="delete">
                      <DeleteIcon />
                    </IconButton>
                  </Stack>
                  <h2>{title}</h2>
                </div>
              </Link>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default Details;
