import React, { useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import {
  Button,
  TextField,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  Box,
  Icon,
} from "@mui/material";

export default function AddPost() {
  const { id } = useParams();
  const navigate = useNavigate();
  const [open, setOpen] = useState(false);
  const [title, setTitle] = useState("");
  const [body, setBody] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (title && body) {
      fetch(`https://jsonplaceholder.typicode.com/users/${id}/posts`, {
        method: "POST",
        headers: { "Content-type": "application/json" },
        body: JSON.stringify({ title, body }),
      }).then(() => navigate.push("/"));
    }
  };

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <div>
      <Button
        // size="small"
        // variant="contained"
        type="button"
        onClick={handleClickOpen}
      >
        <Box
          sx={{
            "& > :not(style)": {
              m: 2,
            },
          }}
        >
          <Icon>add_circle</Icon>
        </Box>
      </Button>
      <Dialog open={open} onClose={handleClose}>
        <DialogTitle>Add post</DialogTitle>
        <DialogContent>
          <form onSubmit={handleSubmit}>
            <TextField
              autoFocus
              margin="dense"
              id="title"
              label="Title"
              type="text"
              fullWidth
              variant="standard"
              onChange={(e) => setTitle(e.target.value)}
            />
            <TextField
              multiline
              rows={8}
              maxRows={10}
              autoFocus
              margin="dense"
              id="body"
              label="Body"
              type="text"
              fullWidth
              variant="standard"
              onChange={(e) => setBody(e.target.value)}
            />
          </form>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>Cancel</Button>
          <Button type="submit">Save</Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}
