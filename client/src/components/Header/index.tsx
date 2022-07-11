import { Typography } from "@material-ui/core";
import React from "react";
import useStyles from "./style";
type Props = {};

const Header = (props: Props) => {
  const classes = useStyles();
  return (
    <Typography variant="h4" align="center" className={classes.container}>
      Blog
    </Typography>
  );
};

export default Header;
