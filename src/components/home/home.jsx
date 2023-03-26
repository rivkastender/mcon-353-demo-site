import * as React from "react";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import {
  Card,
  CardMedia,
  CardActions,
  CardContent,
  Grid,
  Paper,
} from "@mui/material";
import { styled } from "@mui/material/styles";
import background from "./../../background.jpg";
import "./home.css";

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
          </Box>
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

export const Home = () => {
  return (
    <>
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
};
