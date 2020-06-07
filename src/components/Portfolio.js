import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import {
  Box,
  Grid,
  Card,
  CardActionArea,
  CardActions,
  CardContent,
  CardMedia,
  Button,
  Typography,
} from "@material-ui/core";
import Navbar from "./Navbar";
import project1 from "../images/social-fixer.png";
import project2 from "../images/money-inside-a-wallet-3943735.jpg";
import project3 from "../images/javascript-fullstack.jpg";
import project4 from "../images/M+.png";
import project5 from "../images/codi-logo.png";
import project6 from "../images/gogabby.png";

const useStyles = makeStyles({
    mainContainer:{
        background:"#233",
        height: "100%"
    },
    cardContainer:{
        maxWidth:345,
        margin: "5rem auto"
    }
})

const Portfolio = () => {
    const classes= useStyles();
  return (
    <Box component="div" className={classes.mainContainer}>
      <Navbar />
      <Grid container justify="center">
        {/* Project 1 */}
        <Grid item xs={12} sm={8} md={6}>
          <Card className={classes.cardContainer}>
            <CardActionArea onClick={()=> window.open("https://github.com/Facebook-Filter/Final-Social-Fixer-Project")}>
              <CardMedia
                component="img"
                alt="project-1"
                height="140"
                image={project1}
              />
              <CardContent>
                <Typography gutterBottom variant="h5">
                FACEBOOK FILTER
                </Typography>
                <Typography
                  gutterBottom
                  variant="body2"
                  color="textSecondary"
                  component="p"
                  style={{height:"15vh"}}
                >
                  I created a website for a client who is making an extension that customizes and enhances Facebook! The extension improves facebook website by filtering and hiding features that the user picks.
                </Typography>
              </CardContent>
              </CardActionArea>
              <CardActions>
                  <Button size="small" color="primary">
                      Share
                  </Button>
                  <Button size="small" color="primary">
                      Live Demo
                  </Button>
              </CardActions>
          </Card>
        </Grid>
                {/* Project 2 */}
                <Grid item xs={12} sm={8} md={6}>
          <Card className={classes.cardContainer}>
            <CardActionArea onClick={()=> window.open("https://github.com/AbdulkaderFreij/New-Financial-Tracker")}>
              <CardMedia
                component="img"
                alt="project-2"
                height="140"
                image={project2}
              />
              <CardContent>
                <Typography gutterBottom variant="h5">
                FINANCIAL TRACKER
                </Typography>
                <Typography
                style={{height:"15vh"}}
                  gutterBottom
                  variant="body2"
                  color="textSecondary"
                  component="p"
                >
                  I build a web app that manage your finances in one place. Its very useful for personal purposes. Technologies used are react and laravel with MySQL.
                </Typography>
              </CardContent>
              </CardActionArea>
              <CardActions>
                  <Button size="small" color="primary">
                      Share
                  </Button>
                  <Button size="small" color="primary">
                      Live Demo
                  </Button>
              </CardActions>
          </Card>
        </Grid>
                {/* Project 3 */}
                <Grid item xs={12} sm={8} md={6}>
          <Card className={classes.cardContainer}>
            <CardActionArea onClick={()=> window.open("https://github.com/AbdulkaderFreij/Chat-App")}>
              <CardMedia
                component="img"
                alt="project-3"
                height="140"
                image={project3}
              />
              <CardContent>
                <Typography gutterBottom variant="h5">
                CHATAPP
                </Typography>
                <Typography
                style={{height:"15vh"}}
                  gutterBottom
                  variant="body2"
                  color="textSecondary"
                  component="p"
                >
                  I created a chat app using socket.io and react. This was a challenge to be done at Codi.
                </Typography>
              </CardContent>
              </CardActionArea>
              <CardActions>
                  <Button size="small" color="primary">
                      Share
                  </Button>
                  <Button size="small" color="primary">
                      Live Demo
                  </Button>
              </CardActions>
          </Card>
        </Grid>
                {/* Project 4 */}
                <Grid item xs={12} sm={8} md={6}>
          <Card className={classes.cardContainer}>
            <CardActionArea onClick={()=> window.open("muna.codib05-wp.tk/")}>
              <CardMedia
                component="img"
                alt="project-4"
                height="140"
                image={project4}
              />
              <CardContent>
                <Typography gutterBottom variant="h5">
                M+ ORGANIC SKINCARE
                </Typography>
                <Typography
                style={{height:"15vh"}}
                  gutterBottom
                  variant="body2"
                  color="textSecondary"
                  component="p"
                >
                  M+ is a company that sells organic skincare products. I build for them an e-commerce website using wordpress.
                </Typography>
              </CardContent>
              </CardActionArea>
              <CardActions>
                  <Button size="small" color="primary">
                      Share
                  </Button>
                  <Button size="small" color="primary">
                      Live Demo
                  </Button>
              </CardActions>
          </Card>
        </Grid>
                {/* Project 5 */}
                <Grid item xs={12} sm={8} md={6}>
          <Card className={classes.cardContainer}>
            <CardActionArea onClick={()=> window.open("https://github.com/AbdulkaderFreij/codigram")}>
              <CardMedia
                component="img"
                alt="project-5"
                height="140"
                image={project5}
              />
              <CardContent>
                <Typography gutterBottom variant="h5">
                CODIGRAM
                </Typography>
                <Typography
                style={{height:"15vh"}}
                  gutterBottom
                  variant="body2"
                  color="textSecondary"
                  component="p"
                >
                  Inspired by instagram. I build a webapp for Codi where all developers can share their posts and connect and have fun with each others.
                </Typography>
              </CardContent>
              </CardActionArea>
              <CardActions>
                  <Button size="small" color="primary">
                      Share
                  </Button>
                  <Button size="small" color="primary">
                      Live Demo
                  </Button>
              </CardActions>
          </Card>
        </Grid>
                        {/* Project 6 */}
                        <Grid item xs={12} sm={8} md={6}>
          <Card className={classes.cardContainer}>
            <CardActionArea onClick={()=> window.open("https://gitlab.com/coditech/cohortb05/woocrack-gaby")}>
              <CardMedia
                component="img"
                alt="project-5"
                height="140"
                image={project6}
              />
              <CardContent>
                <Typography gutterBottom variant="h5">
                Woocrack Website
                </Typography>
                <Typography
                style={{height:"15vh"}}
                  gutterBottom
                  variant="body2"
                  color="textSecondary"
                  component="p"
                >
                  Inspired by Woocrack. I build a webapp for wordpress developers to have free plugins and themes.
                </Typography>
              </CardContent>
              </CardActionArea>
              <CardActions>
                  <Button size="small" color="primary">
                      Share
                  </Button>
                  <Button size="small" color="primary">
                      Live Demo
                  </Button>
              </CardActions>
          </Card>
        </Grid>
      </Grid>
    </Box>
  );
};

export default Portfolio;
