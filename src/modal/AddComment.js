import React, { useState } from "react";
import {
  Button,
  TextField,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
} from "@mui/material";

export default function AddComent() {
  const [open, setOpen] = useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <div>
      <Button
        size="small"
        variant="outlined"
        type="button"
        onClick={handleClickOpen}
      >
        Add Comment
      </Button>
      <Dialog open={open} onClose={handleClose}>
        <DialogTitle>Add comment</DialogTitle>
        <DialogContent>
          <TextField
            autoFocus
            margin="dense"
            id="name"
            label="Name"
            type="text"
            fullWidth
            variant="standard"
          />
          <TextField
            autoFocus
            margin="dense"
            id="name"
            label="Email"
            type="email"
            fullWidth
            variant="standard"
          />
          <TextField
            multiline
            rows={8}
            maxRows={10}
            autoFocus
            margin="dense"
            id="name"
            label="Body"
            type="text"
            fullWidth
            variant="standard"
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>Cancel</Button>
          <Button type="submit">Save</Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}
