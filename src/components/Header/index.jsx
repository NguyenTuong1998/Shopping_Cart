import { Badge, Box, IconButton, Menu, MenuItem } from "@material-ui/core";
import AppBar from "@material-ui/core/AppBar";
import Button from "@material-ui/core/Button";
import Dialog from "@material-ui/core/Dialog";
import DialogContent from "@material-ui/core/DialogContent";
import { makeStyles } from "@material-ui/core/styles";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import { AccountCircle, Close, ShoppingCart } from "@material-ui/icons";
import StorefrontIcon from "@material-ui/icons/Storefront";
import Login from "feature/Auth/components/login";
import Register from "feature/Auth/components/register";
import { logout } from "feature/Auth/useSlice";
import { cartItemCountSelector } from "feature/Cart/Selectors";
import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, NavLink, useHistory } from "react-router-dom";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
  },
  link: {
    color: "#fff",
    textDecoration: "none",
  },
  closeButton: {
    position: "absolute",
    top: theme.spacing(1),
    right: theme.spacing(1),
    color: theme.palette.grey[500],
    zIndex: 1,
  },
}));
const Mode = {
  LOGIN: "login",
  REGISTER: "register",
};
export default function Header() {
  const loggedInUser = useSelector((state) => state.user.current);
  const isLogin = !!loggedInUser.id;
  const dispatch = useDispatch();
  const history = useHistory();
  const cartItemCount = useSelector(cartItemCountSelector);

  const [open, setOpen] = useState(false);
  const [mode, setMode] = useState(Mode.LOGIN);
  const [anchorEl, setAnchorEl] = useState(null);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleUserClick = (e) => {
    setAnchorEl(e.currentTarget);
  };

  const handleCloseMenu = () => {
    setAnchorEl(null);
  };

  const handleLogOut = () => {
    const action = logout();
    dispatch(action);
  };

  const handleCartClick = () => {
    history.push("/cart");
  };

  const classes = useStyles();
  return (
    <div className={classes.root}>
      <AppBar position="static">
        <Toolbar>
          <StorefrontIcon className={classes.menuButton} />
          <Typography variant="h6" className={classes.title}>
            <Link to="/" className={classes.link}>
              EZ SHOP
            </Link>
          </Typography>
          <IconButton
            aria-label="show 4 new mails"
            color="inherit"
            onClick={handleCartClick}
          >
            <Badge badgeContent={cartItemCount} color="secondary">
              <ShoppingCart />
            </Badge>
          </IconButton>
          <NavLink to="/todos" className={classes.link}>
            <Button color="inherit">To Do</Button>
          </NavLink>

          {!isLogin && (
            <Button color="inherit" onClick={handleClickOpen}>
              LOGIN
            </Button>
          )}
          {isLogin && (
            <IconButton color="inherit" onClick={handleUserClick}>
              <AccountCircle />
            </IconButton>
          )}
        </Toolbar>
      </AppBar>
      <Menu
        anchorEl={anchorEl}
        keepMounted
        open={Boolean(anchorEl)}
        onClose={handleCloseMenu}
      >
        <MenuItem onClick={handleCloseMenu}>My account</MenuItem>
        <MenuItem onClick={handleLogOut}>Logout</MenuItem>
      </Menu>
      <Dialog
        open={open}
        onClose={handleClose}
        aria-labelledby="form-dialog-title"
        disableBackdropClick
        disableEscapeKeyDown
      >
        <IconButton className={classes.closeButton} onClick={handleClose}>
          <Close />
        </IconButton>
        <DialogContent>
          {mode === Mode.REGISTER && (
            <>
              <Register closeDialog={handleClose} />
              <Box textAlign="center">
                <Button
                  color="primary"
                  onClick={() => {
                    setMode(Mode.LOGIN);
                  }}
                >
                  Already have an account. Login here.
                </Button>
              </Box>
            </>
          )}
          {mode === Mode.LOGIN && (
            <>
              <Login closeDialog={handleClose} />
              <Box textAlign="center">
                <Button
                  color="primary"
                  onClick={() => {
                    setMode(Mode.REGISTER);
                  }}
                >
                  Dont have account. Register here.
                </Button>
              </Box>
            </>
          )}
        </DialogContent>
      </Dialog>
    </div>
  );
}
