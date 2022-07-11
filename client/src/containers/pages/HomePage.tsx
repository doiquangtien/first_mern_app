import React from "react";
import { Container, Fab } from "@material-ui/core";
import AddIcon from "@material-ui/icons/Add";
import { useDispatch, useSelector } from "react-redux";

import useStyles from "./styles";
import { Header, PostList } from "../../components";
import CreatePostModal from "../../components/CreatePostModal";
import { showModal } from "../../app/slices/modalSlice";
import { selectStatus } from "../../app/slices/postsSlice";

export default function HomePage() {
  const classes = useStyles();
  const dispatch = useDispatch();
  const openCreatePostModal = React.useCallback(() => {
    dispatch(showModal());
  }, [dispatch]);

  return (
    <Container maxWidth="lg">
      <Header />
      <PostList />
      <CreatePostModal />
      <Fab
        color="primary"
        className={classes.fab}
        onClick={openCreatePostModal}
      >
        <AddIcon />
      </Fab>
    </Container>
  );
}
