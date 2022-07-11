import { Button, Modal, TextareaAutosize, TextField } from "@material-ui/core";
import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { hiddenModal, selectIsShowModal } from "../../app/slices/modalSlice";
import { createPostRequest } from "../../app/slices/postsSlice";
import useStyles from "./styles";
export default function CreatePostModal() {
  const [data, setData] = React.useState({
    title: "",
    content: "",
  });
  const dispatch = useDispatch();
  const isShow = useSelector(selectIsShowModal);
  const classes = useStyles();

  const onClose = React.useCallback(() => {
    dispatch(hiddenModal());
    setData({
      title: "",
      content: "",
    });
  }, [dispatch]);

  const onSubmit = React.useCallback(() => {
    dispatch(createPostRequest(data));
    onClose();
  }, [data, dispatch, onClose]);

  const body = (
    <div className={classes.paper} id="simple-modal-title">
      <h2>Create New Post</h2>
      <form noValidate autoComplete="off" className={classes.form}>
        <TextField
          className={classes.title}
          required
          label="Title"
          value={data.title}
          onChange={(e) => setData({ ...data, title: e.target.value })}
        />
        <TextareaAutosize
          className={classes.textarea}
          rowsMin={10}
          rowsMax={15}
          placeholder="Content..."
          value={data.content}
          onChange={(e) => setData({ ...data, content: e.target.value })}
        />

        <div className={classes.footer}>
          <Button
            variant="contained"
            color="primary"
            component="span"
            fullWidth
            onClick={onSubmit}
          >
            Create
          </Button>
        </div>
      </form>
    </div>
  );

  return (
    <div>
      <Modal open={isShow} onClose={onClose}>
        {body}
      </Modal>
    </div>
  );
}
