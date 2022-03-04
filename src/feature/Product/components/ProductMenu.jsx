import { Box, Link, makeStyles } from "@material-ui/core";
import React from "react";
import { useRouteMatch } from "react-router-dom";
import { NavLink } from "react-router-dom";

const useStyle = makeStyles((theme) => ({
  root: {
    display: "flex",
    flexflow: "row nowrap",
    justifyContent: "center",
    alignItems: "center",
    listStyleType: "none",
    padding: 0,

    "& > li": {
      padding: theme.spacing(2, 4),
    },
    "& > li > a": {
      color: theme.palette.grey[700],
    },
    "& > li > a.active": {
      color: theme.palette.primary.main,
      textDecoraition: "underline",
    },
  },
}));
const ProductMenu = () => {
  const classes = useStyle();
  const { url } = useRouteMatch();
  return (
    <Box component="ul" className={classes.root}>
      <li>
        <Link component={NavLink} to={url}>
          Description
        </Link>
      </li>
      <li>
        <Link component={NavLink} to={`${url}/additional`}>
          Additional Infomation
        </Link>
      </li>
      <li>
        <Link component={NavLink} to={`${url}/reviews`}>
          Reviews
        </Link>
      </li>
    </Box>
  );
};

export default ProductMenu;
