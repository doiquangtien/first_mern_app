import React from "react";
import {
  Avatar,
  Card,
  CardActions,
  CardContent,
  CardHeader,
  CardMedia,
  IconButton,
  Typography,
} from "@material-ui/core";
import FavoriteIcon from "@material-ui/icons/Favorite";
import moment from "moment";
import useStyles from "./styles";
import { useDispatch } from "react-redux";
import {
  deletePostRequest,
  updatePostRequest,
} from "../../../app/slices/postsSlice";

export default function Post({ post }: any) {
  const classes = useStyles();
  const dispatch = useDispatch();

  const onLikeBtnClick = React.useCallback(() => {
    dispatch(updatePostRequest({ ...post, likeCount: post.likeCount + 1 }));
  }, [post, dispatch]);
  return (
    <Card>
      <CardHeader
        avatar={<Avatar>A</Avatar>}
        title={post.author}
        subheader={moment(post.updatedAt).format("HH:MM MMM DD,YYYY")}
        action={
          <IconButton>
            <div
              onClick={() => {
                dispatch(deletePostRequest(post._id));
              }}
            >
              Delete
            </div>
          </IconButton>
        }
      />
      <CardMedia
        image={post.attachment || ""}
        title="Title"
        className={classes.media}
      />
      <CardContent>
        <Typography variant="h5" color="textPrimary">
          {post.title}
        </Typography>
        <Typography variant="body2" component="p" color="textSecondary">
          {post.content}
        </Typography>
      </CardContent>
      <CardActions>
        <IconButton onClick={onLikeBtnClick}>
          <FavoriteIcon />
          <Typography component="span" color="textSecondary">
            {`${post.likeCount} likes`}
          </Typography>
        </IconButton>
      </CardActions>
    </Card>
  );
}
