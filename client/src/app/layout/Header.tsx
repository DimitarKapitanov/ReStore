import {
  AccountCircle,
  Brightness4,
  Brightness7,
  ShoppingCart,
} from "@mui/icons-material";
import SearchIcon from "@mui/icons-material/Search";
import {
  AppBar,
  Badge,
  Box,
  IconButton,
  List,
  ListItem,
  Menu,
  MenuItem,
  Switch,
  Toolbar,
  Typography,
} from "@mui/material";
import InputBase from "@mui/material/InputBase";
import { alpha, styled } from "@mui/material/styles";
import { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { useStoreContext } from "../context/StoreContext";
import logoDark from "/logoReStoreDark.png";
import logoWhite from "/logoReStoreWhite.png";

const Search = styled("div")(({ theme }) => ({
  position: "relative",
  borderRadius: theme.shape.borderRadius,
  backgroundColor: alpha(theme.palette.common.white, 0.15),
  "&:hover": {
    backgroundColor: alpha(theme.palette.common.white, 0.25),
  },
  marginLeft: 0,
  width: "100%",
  [theme.breakpoints.up("sm")]: {
    marginLeft: theme.spacing(1),
    width: "70%",
    borderRadius: "20px",
  },
}));

const StyledInputBase = styled(InputBase)(({ theme }) => ({
  color: "inherit",
  width: "100%",
  "& .MuiInputBase-input": {
    padding: theme.spacing(1, 1, 1, 0),
    // vertical padding + font size from searchIcon
    paddingLeft: `calc(1em + ${theme.spacing(4)})`,
    transition: theme.transitions.create("width"),
    [theme.breakpoints.up("sm")]: {
      width: "12ch",
      "&:focus": {
        width: "20ch",
      },
    },
  },
}));
const SearchIconWrapper = styled("div")(({ theme }) => ({
  padding: theme.spacing(0, 2),
  height: "100%",
  position: "absolute",
  pointerEvents: "none",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
}));

const midLinks = [
  { title: "Catalog", path: "/catalog" },
  { title: "About", path: "/about" },
  { title: "Contact", path: "/contact" },
];

const rightLinks = [
  { title: "Login", path: "/login" },
  { title: "Register", path: "/register" },
];

const navStyles = {
  color: "inherit",
  textDecoration: "none",
  typography: "h6",
  letterSpacing: "1px",
  "&:hover": {
    color: "grey.500",
  },
  "&.active": {
    color: "text.secondary",
  },
};

interface Props {
  readonly darkMode: boolean;
  readonly handleThemeChange: () => void;
}

export default function Header({ darkMode, handleThemeChange }: Props) {
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);
  const { basket } = useStoreContext();
  const itemCount = basket?.items.reduce((acc, item) => acc + item.quantity, 0);

  const handleMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <>
      <AppBar position="fixed" sx={{ alignItems: "center" }}>
        <Toolbar
          sx={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            alignContent: "center",
            maxWidth: 1640,
            width: "100%",
          }}
        >
          <Box display="flex" alignItems="center">
            <Typography variant="h6" component={NavLink} to="/" sx={navStyles}>
              <img
                src={darkMode ? logoWhite : logoDark}
                alt="Re-Store Logo"
                style={{ height: 90, marginRight: 10 }}
              />
            </Typography>
            <List sx={{ display: "flex" }}>
              {midLinks.map(({ title, path }) => (
                <ListItem
                  component={NavLink}
                  to={path}
                  key={path}
                  sx={[navStyles, { fontSize: "12px" }]}
                >
                  {title}
                </ListItem>
              ))}
            </List>
          </Box>
          <Box
            sx={{ maxWidth: "600px", width: "100%" }}
            display="flex"
            justifyContent="end"
          >
            <Search sx={{ border: darkMode ? "none" : "1px solid black" }}>
              <SearchIconWrapper>
                <SearchIcon />
              </SearchIconWrapper>
              <StyledInputBase
                placeholder="Search…"
                inputProps={{ "aria-label": "search" }}
              />
            </Search>
          </Box>
          <Box display="flex" alignItems="center">
            <Switch
              checked={darkMode}
              onChange={handleThemeChange}
              icon={
                <Brightness7
                  sx={{
                    color: darkMode ? "white" : "black",
                    transform: "translateY(-2px)",
                  }}
                />
              }
              checkedIcon={
                <Brightness4
                  sx={{
                    color: darkMode ? "white" : "black",
                    transform: "translateY(-2px)",
                  }}
                />
              }
            />
            <IconButton
              component={Link}
              to="/basket"
              size="large"
              edge="start"
              color="inherit"
              sx={{ ml: 2 }}
            >
              <Badge badgeContent={itemCount} color="secondary">
                <ShoppingCart />
              </Badge>
            </IconButton>
            <List sx={{ display: "flex" }}>
              <ListItem>
                <IconButton
                  size="large"
                  edge="end"
                  aria-label="account of current user"
                  aria-controls="menu-appbar"
                  aria-haspopup="true"
                  onClick={handleMenu}
                  color="inherit"
                >
                  <AccountCircle />
                </IconButton>
                <Menu
                  id="menu-appbar"
                  anchorEl={anchorEl}
                  anchorOrigin={{
                    vertical: "bottom",
                    horizontal: "center",
                  }}
                  keepMounted
                  transformOrigin={{
                    vertical: "top",
                    horizontal: "right",
                  }}
                  open={open}
                  onClose={handleClose}
                >
                  {rightLinks.map(({ title, path }) => (
                    <MenuItem
                      component={NavLink}
                      to={path}
                      key={path}
                      sx={[navStyles, { fontSize: "12px" }]}
                      onClick={handleClose}
                    >
                      {title}
                    </MenuItem>
                  ))}
                </Menu>
              </ListItem>
            </List>
          </Box>
        </Toolbar>
      </AppBar>
      <Toolbar />
    </>
  );
}
