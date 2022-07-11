import React from "react";
import { Grid } from "@material-ui/core";
import { useDispatch, useSelector } from "react-redux";

import Post from "./Post";
import {
  getPostRequest,
  selectPosts,
  selectStatus,
} from "../../app/slices/postsSlice";

export default function PostList() {
  const dispatch = useDispatch();
  const posts = useSelector(selectPosts);
  const loading = useSelector(selectStatus);

  React.useEffect(() => {
    dispatch(getPostRequest());
  }, [dispatch]);
  console.log(posts);
  return (
    <Grid container spacing={2} alignItems="stretch">
      {loading === "loading"
        ? "Loading"
        : posts.map((post: any) => (
            <Grid key={post._id} item xs={12} sm={6}>
              <Post post={post} />
            </Grid>
          ))}
    </Grid>
  );
}
