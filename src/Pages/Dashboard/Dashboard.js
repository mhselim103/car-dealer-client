import React, { useEffect, useState } from "react";
import PropTypes from "prop-types";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import CssBaseline from "@mui/material/CssBaseline";
import Divider from "@mui/material/Divider";
import Drawer from "@mui/material/Drawer";
import IconButton from "@mui/material/IconButton";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import MenuIcon from "@mui/icons-material/Menu";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import useAuth from "../../Hooks/useAuth";
import { Link, Outlet, useNavigate } from "react-router-dom";
import "./Dashboard.css";

const drawerWidth = 240;

function Dashboard(props) {
  const [menu, setMenu] = useState("home");
  const { user, admin, logOut } = useAuth();
  const { window } = props;
  const [mobileOpen, setMobileOpen] = useState(false);
  const navigate = useNavigate();
  const handleLogOut = () => {
    logOut();
    navigate("/");
  };

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };
  const handleMenu = (text) => {
    setMenu(text);
  };

  const drawer = (
    <div>
      <Toolbar />
      <Divider />

      <List>
        <ListItem className="d-flex flex-column ">
          <Link className="dashboard-link" to="/">
            Home
          </Link>
          <Link
            onClick={() => handleMenu("myorders")}
            className="dashboard-link"
            to="myorders"
          >
            My Orders
          </Link>
          <Link
            onClick={() => handleMenu("pay")}
            className="dashboard-link"
            to="pay"
          >
            Pay
          </Link>
          <Link
            onClick={() => handleMenu("review")}
            className="dashboard-link"
            to="review"
          >
            Review
          </Link>
        </ListItem>
      </List>
      <Divider />
      {admin && (
        <List>
          <ListItem className="d-flex flex-column  ">
            <Link
              onClick={() => handleMenu("orders")}
              className="dashboard-link"
              to="orders"
            >
              Manage All Orders
            </Link>
            <Link
              onClick={() => handleMenu("newcar")}
              className="dashboard-link"
              to="newcar"
            >
              Add New Car
            </Link>
            <Link
              onClick={() => handleMenu("admin")}
              className="dashboard-link"
              to="admin"
            >
              Make Admin
            </Link>
          </ListItem>
        </List>
      )}
      <Divider />
      <List>
        <ListItem className="d-flex  justify-content-center">
          <button className="dashboard-link border-0" onClick={handleLogOut}>
            Log Out
          </button>
        </ListItem>
      </List>
    </div>
  );

  const container =
    window !== undefined ? () => window().document.body : undefined;

  return (
    <Box sx={{ display: "flex" }} className="my-5">
      <CssBaseline />
      <AppBar
        position="fixed"
        sx={{
          width: { sm: `calc(100% - ${drawerWidth}px)` },
          ml: { sm: `${drawerWidth}px` },
        }}
      >
        <Toolbar>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            edge="start"
            onClick={handleDrawerToggle}
            sx={{ mr: 2, display: { sm: "none" } }}
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" noWrap component="div">
            Dashboard
          </Typography>
        </Toolbar>
      </AppBar>
      <Box
        component="nav"
        sx={{ width: { sm: drawerWidth }, flexShrink: { sm: 0 } }}
        aria-label="mailbox folders"
      >
        {/* The implementation can be swapped with js to avoid SEO duplication of links. */}
        <Drawer
          container={container}
          variant="temporary"
          open={mobileOpen}
          onClose={handleDrawerToggle}
          ModalProps={{
            keepMounted: true, // Better open performance on mobile.
          }}
          sx={{
            display: { xs: "block", sm: "none" },
            "& .MuiDrawer-paper": {
              boxSizing: "border-box",
              width: drawerWidth,
            },
          }}
        >
          {drawer}
        </Drawer>
        <Drawer
          variant="permanent"
          sx={{
            display: { xs: "none", sm: "block" },
            "& .MuiDrawer-paper": {
              boxSizing: "border-box",
              width: drawerWidth,
            },
          }}
          open
        >
          {drawer}
        </Drawer>
      </Box>
      <Box
        component="main"
        sx={{
          flexGrow: 1,
          p: 3,
          width: { sm: `calc(100% - ${drawerWidth}px)` },
        }}
      >
        <Toolbar />
        <Typography paragraph>
          {menu === "home" && <h1>Check Your Dashboard Here</h1>}
          <Outlet />
        </Typography>
      </Box>
    </Box>
  );
}

Dashboard.propTypes = {
  /**
   * Injected by the documentation to work in an iframe.
   * You won't need it on your project.
   */
  window: PropTypes.func,
};

export default Dashboard;
