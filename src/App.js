import * as React from "react";
import {
  AppBar,
  Box,
  Toolbar,
  IconButton,
  Typography,
  Menu,
  Container,
  Avatar,
  Button,
  Tooltip,
  MenuItem,
  Card,
  CardMedia,
  CardActions,
  CardContent,
  Grid,
  Paper,
} from "@mui/material";
import { styled } from "@mui/material/styles";
import MenuIcon from "@mui/icons-material/Menu";
import AdbIcon from "@mui/icons-material/Adb";
import logo from "./initially_logo.png";
import background from "./background.jpg";
import "./App.css";

const pages = ["Home", "Our Work", "Pricing", "Contact Us"];
const settings = ["Profile", "Account", "Logout"];

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: "center",
  color: theme.palette.text.secondary,
}));

function FormRow() {
  const card1 = (
    <React.Fragment>
      <CardContent>
        <Typography variant="h5" component="div">
          Embroidery
        </Typography>
        <Typography variant="body2">
          <br />
          We use our in house <br />
          machinery to embroider: <br />
          gifts, including towels <br />
          and blankets, uniforms for <br />
          private school, scrubs and <br />
          everything else.
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small" id="buttonCard">
          Learn More
        </Button>
      </CardActions>
    </React.Fragment>
  );

  const card2 = (
    <React.Fragment>
      <CardContent>
        <Typography variant="h5" component="div">
          Screen Printing
        </Typography>
        <Typography variant="body2">
          <br />
          We have various items <br />
          that can be screen printed <br />
          such as sweaters, <br />
          shirts and much more.
          <br />
          <br />
          <br />
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small" id="buttonCard">
          Learn More
        </Button>
      </CardActions>
    </React.Fragment>
  );

  const card3 = (
    <React.Fragment>
      <CardContent>
        <Typography variant="h5" component="div">
          Promotional Item
        </Typography>
        <Typography variant="body2">
          <br />
          Whether for a business or
          <br />
          just to have, we have a <br />
          variety of promotional items <br />
          customize just for you.
          <br />
          <br />
          <br />
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small" id="buttonCard">
          Learn More
        </Button>
      </CardActions>
    </React.Fragment>
  );
  return (
    <React.Fragment>
      <Grid item xs={4}>
        <Item>
          <Box>
            <Card variant="outlined">{card1}</Card>
          </Box>{" "}
        </Item>
      </Grid>
      <Grid item xs={4}>
        <Item>
          <Box>
            <Card variant="outlined">{card2}</Card>
          </Box>{" "}
        </Item>
      </Grid>
      <Grid item xs={4}>
        <Item>
          <Box>
            <Card variant="outlined">{card3}</Card>
          </Box>
        </Item>
      </Grid>
    </React.Fragment>
  );
}

function App() {
  const [anchorElNav, setAnchorElNav] = React.useState(null);
  const [anchorElUser, setAnchorElUser] = React.useState(null);

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };
  const handleOpenUserMenu = (event) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };

  return (
    <>
      <AppBar position="static" sx={{ backgroundColor: "#f5f5ef" }}>
        <Container maxWidth="xl">
          <Toolbar disableGutters>
            <Typography
              noWrap
              component="a"
              href="/"
              sx={{
                mr: 2,
                display: { xs: "none", md: "flex" },
                fontFamily: "monospace",
                fontWeight: 700,
                letterSpacing: ".3rem",
                color: "inherit",
                textDecoration: "none",
              }}
            ></Typography>

            <Box sx={{ flexGrow: 1, display: { xs: "flex", md: "none" } }}>
              <IconButton
                size="large"
                aria-label="account of current user"
                aria-controls="menu-appbar"
                aria-haspopup="true"
                onClick={handleOpenNavMenu}
                color="black"
              >
                <MenuIcon />
              </IconButton>
              <Menu
                id="menu-appbar"
                anchorEl={anchorElNav}
                anchorOrigin={{
                  vertical: "bottom",
                  horizontal: "left",
                }}
                keepMounted
                transformOrigin={{
                  vertical: "top",
                  horizontal: "left",
                }}
                open={Boolean(anchorElNav)}
                onClose={handleCloseNavMenu}
                sx={{
                  display: { xs: "block", md: "none" },
                }}
              >
                {pages.map((page) => (
                  <MenuItem key={page} onClick={handleCloseNavMenu}>
                    <Typography textAlign="center">{page}</Typography>
                  </MenuItem>
                ))}
              </Menu>
            </Box>
            <img src={logo} id="logo" />
            <Typography
              noWrap
              component="a"
              href=""
              sx={{
                mr: 2,
                display: { xs: "flex", md: "none" },
                flexGrow: 1,
                fontFamily: "monospace",
                fontWeight: 700,
                letterSpacing: ".3rem",
                color: "inherit",
                textDecoration: "none",
              }}
            ></Typography>
            <Box sx={{ flexGrow: 1, display: { xs: "none", md: "flex" } }}>
              {pages.map((page) => (
                <Button
                  key={page}
                  onClick={handleCloseNavMenu}
                  sx={{ my: 2, color: "gray", display: "block" }}
                >
                  {page}
                </Button>
              ))}
            </Box>

            <Box sx={{ flexGrow: 0 }}>
              <Tooltip title="Open settings">
                <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
                  <Avatar />
                </IconButton>
              </Tooltip>
              <Menu
                sx={{ mt: "45px" }}
                id="menu-appbar"
                anchorEl={anchorElUser}
                anchorOrigin={{
                  vertical: "top",
                  horizontal: "right",
                }}
                keepMounted
                transformOrigin={{
                  vertical: "top",
                  horizontal: "right",
                }}
                open={Boolean(anchorElUser)}
                onClose={handleCloseUserMenu}
              >
                {settings.map((setting) => (
                  <MenuItem key={setting} onClick={handleCloseUserMenu}>
                    <Typography textAlign="center">{setting}</Typography>
                  </MenuItem>
                ))}
              </Menu>
            </Box>
          </Toolbar>
        </Container>
      </AppBar>

      <Card maxWidth="sm">
        <CardMedia
          sx={{ height: 425, opacity: 0.5 }}
          image={background}
          title="background"
        />
      </Card>
      <Grid container spacing={1} id="cards">
        <Grid container item spacing={3}>
          <FormRow />
        </Grid>
      </Grid>
    </>
  );
}

export default App;
