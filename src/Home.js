import React, { useState, useEffect } from "react";
import "./App.css";
import Stack from "@mui/material/Stack";
import Button from "@mui/material/Button";
import { Link, Outlet } from "react-router-dom";

function Home() {
  const [users, setUsers] = useState([]);
  // const [posts, setPosts] = useState([]);
  useEffect(() => {
    const fetchUsers = async () => {
      const response = await fetch(
        "https://jsonplaceholder.typicode.com/users"
      );
      const users = await response.json();
      setUsers(users);
    };
    fetchUsers();
    // const fetchData = () => {
    //   const usersUrl = "https://jsonplaceholder.typicode.com/users";
    //   const postsUrl = "https://jsonplaceholder.typicode.com/posts";
    //   const getUsers = axios.get(usersUrl);
    //   const getPosts = axios.get(postsUrl);

    //   axios.all([getUsers, getPosts]).then(
    //     axios.spread((...allData) => {
    //       const allUsersData = allData[0].data;
    //       const allPostsData = allData[1].data;
    //       setUsers(allUsersData);
    //       setPosts(allPostsData);
    //     })
    //   );
    // };
    // fetchData();
  }, []);
  console.log(users);
  // console.log(posts);
  return (
    <article className="App">
      <div className="container">
        {users.map((user) => {
          const { id, name, phone, email, website, company } = user;
          return (
            <div key={id} className="user">
              <div>
                <h4>{name}</h4>
                <a className="link" href={email}>
                  {email}
                </a>
                <a className="link" href={phone}>
                  {phone}
                </a>
                <a className="link" href={website}>
                  {website}
                </a>
                <br />
                {Object.keys(company).map((info) => {
                  return <div className="company">{company[info]}</div>;
                })}
                <Link to={`/users/${id}/posts`}>
                  <Stack
                    direction="row"
                    justifyContent="center"
                    alignItems="center"
                    spacing={2}
                    padding={1}
                  >
                    <Button size="small" variant="contained" type="button">
                      Details
                    </Button>
                  </Stack>
                </Link>
                <Outlet />
              </div>
            </div>
          );
        })}
      </div>
      {/* <Details posts={posts.id} {...posts} /> */}
    </article>
  );
}

export default Home;
