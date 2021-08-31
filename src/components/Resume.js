import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Typography, Box } from "@material-ui/core";
import Navbar from "./Navbar";

const useStyles = makeStyles((theme) => ({
  mainContainer: {
    background: "#233",
  },
  timeline: {
    position: "relative",
    padding: "1rem",
    margin: "0 auto",
    "&:before": {
      content: "''",
      position: "absolute",
      height: "100%",
      border: "1px solid tan",
      right: "40px",
      top: 0,
    },
    "&:after": {
      content: "''",
      display: "table",
      clear: "both",
    },
    [theme.breakpoints.up("md")]: {
      padding: "2rem",
      "&:before": {
        left: "calc(50% - 1px)",
        right: "auto",
      },
    },
  },
  timeLineItem: {
    padding: "1rem",
    borderBottom: "2px solid tan",
    position: "relative",
    margin: "1rem 3rem 1rem 1rem",
    clear: "both",
    "&:after": {
      content: "''",
      position: "absolute",
    },
    "&:before": {
      content: "''",
      position: "absolute",
      right: "0.625rem",
      top: "calc(50% -5px)",
      borderStyle: "solid",
      borderColor: "tomato tomato transparent transparent",
      borderWidth: "0.625rem",
      transform: "rotate(45deg)",
    },
    [theme.breakpoints.up("md")]: {
      width: "44%",
      margin: "1rem",
      "&:nth-of-type(2n)": {
        float: "right",
        margin: "1rem",
        borderColor: "tan",
      },
      "&:nth-of-type(2n):before": {
        right: "auto",
        left: "-0.625rem",
        borderColor: "transparent transparent tomato tomato",
      },
    },
  },
  timeLineYear: {
    textAlign: "center",
    maxWidth: "7em",
    margin: "0 3rem 0 auto",
    fontSize: "1.8rem",
    background: "tomato",
    color: "white",
    lineHeight: 1,
    padding: "0.5rem 0 1rem",
    "&:before": {
      display: "none",
    },
    [theme.breakpoints.up("md")]: {
      textAlign: "center",
      margin: "0 auto",
      "&:nth-of-type(2n)": {
        float: "none",
        margin: "0 auto",
      },
      "&:nth-of-type(2n):before": {
        display: "none",
      },
    },
  },
  heading: {
    color: "tomato",
    padding: "3rem 0",
    textTransform: "uppercase",
  },
  subHeading: {
    color: "white",
    padding: "0",
    textTransform: "uppercase",
  },
}));

const Resume = () => {
  const classes = useStyles();
  return (
    <>
      <Navbar />
      <Box component="header" className={classes.mainContainer}>
        <Typography variant="h4" align="center" className={classes.heading}>
          working experience
        </Typography>
        <Box component="div" className={classes.timeline}>
          <Typography
              variant="h2"
              className={`${classes.timeLineYear} ${classes.timeLineItem}`}
            >
              2020 - Present
            </Typography>
            <Box component="div" className={classes.timeLineItem}>
              <Typography
                variant="h5"
                align="center"
                className={classes.subHeading}
              >
                Junior Full Stack Web Developer
              </Typography>
              <Typography
                variant="body1"
                align="center"
                style={{ color: "tomato" }}
              >
                Toothpick & Markit | Beirut, Lebanon
              </Typography>
              <ul style={{ color: "tan" }}>
              Responsibilities:
                <li>Involved in two products (markit & toothpick)</li>
                <li>Daily interacting and working closely with other members in the team.</li>
                <li>Developing front end and backend functionalities of these two products.</li>
                <li>Write reusable and maintainable code.</li>
              </ul>
              <ul style={{ color: "tan" }}>
                Technologies used:
                <li>Front-end: Vuejs, Vuetify, Blade</li>
                <li>Back-end: Laravel, Lumen</li>
                <li>Server Management (LAMP Stack, Linux)</li>
                <li>Project Management (AGILE Methodology)</li>
              </ul>
            </Box>
          <Typography
            variant="h2"
            className={`${classes.timeLineYear} ${classes.timeLineItem}`}
          >
            2019 - 2020
          </Typography>
          <Box component="div" className={classes.timeLineItem}>
            <Typography
              variant="h5"
              align="center"
              className={classes.subHeading}
            >
              FULL STACK WEB DEVELOPMENT PROGRAM
            </Typography>
            <Typography
              variant="body1"
              align="center"
              style={{ color: "tomato" }}
            >
              Codi Tech | Beirut, Lebanon
            </Typography>
            <ul style={{ color: "tan" }}>
            Responsibilities:
              <li>Designing appealing websites</li>
              <li>Daily interacting and working closely with other members in the team.</li>
              <li>Developing front end and backend functionalities of sites.</li>
            </ul>
            <ul style={{ color: "tan" }}>
              Technologies used:
              <li>Front-end: HTML, CSS, JavaScript, React, Bootstrap</li>
              <li>Back-end: NodeJS, PHP, SQL, Express, Laravel</li>
              <li>Server Management (LAMP Stack, Linux)</li>
              <li>Project Management (AGILE Methodology)</li>
              <li>Content Management System (WordPress)</li>
            </ul>
          </Box>
          <Typography
            variant="h2"
            className={`${classes.timeLineYear} ${classes.timeLineItem}`}
          >
            2019
          </Typography>
          <Box component="div" className={classes.timeLineItem}>
            <Typography
              variant="h5"
              align="center"
              className={classes.subHeading}
            >
              Junior short-term expert
            </Typography>
            <Typography
              variant="body1"
              align="center"
              style={{ color: "tomato" }}
            >
              ProVTE | Dekwane, Lebanon
            </Typography>
            <ul style={{ color: "tan" }}>
              Responsibilities
              <li>
                Development of 3 selected modules in Renewable Energy & Energy
                Saving (Solar Water Heating).
              </li>
              <li>
                Development of 4 occupational and qualification standards for
                training modules in the area of climatization.
              </li>
            </ul>
          </Box>
          <Typography
            variant="h2"
            className={`${classes.timeLineYear} ${classes.timeLineItem}`}
          >
            2017 - 2019
          </Typography>
          <Box component="div" className={classes.timeLineItem}>
            <Typography
              variant="h5"
              align="center"
              className={classes.subHeading}
            >
              FABRICATION ENGINEER
            </Typography>
            <Typography
              variant="body1"
              align="center"
              style={{ color: "tomato" }}
            >
              Zeenni Steel | Bchamoun, Lebanon
            </Typography>
            <ul style={{ color: "tan" }}>
              Responsibilities
              <li>Calculating client quotations.</li>
              <li>
                Providing pre-sales technical assistance and product education.
              </li>
              <li>
                Supervising production activities and providing technical inputs
                for methodologies of production.
              </li>
            </ul>
          </Box>
          <Typography
            variant="h2"
            className={`${classes.timeLineYear} ${classes.timeLineItem}`}
          >
            2015 - 2017
          </Typography>
          <Box component="div" className={classes.timeLineItem}>
            <Typography
              variant="h5"
              align="center"
              className={classes.subHeading}
            >
              Design Engineer
            </Typography>
            <Typography
              variant="body1"
              align="center"
              style={{ color: "tomato" }}
            >
              Empower Air Technologies | KSA, Jeddah
            </Typography>
            <ul style={{ color: "tan" }}>
              Responsibilities
              <li>
                Follow up and prepare submittals and samples to contractors
                under the direction of the technical manager.
              </li>
              <li>
                Analyse drawings, specs, and submittals and distribute them to
                concerned parties.
              </li>
              <li>Identify and select materials needed for production.</li>
              <li>Design, model, and test prototypes for products.</li>
            </ul>
          </Box>
          <Typography
            variant="h2"
            className={`${classes.timeLineYear} ${classes.timeLineItem}`}
          >
            2014 - 2015
          </Typography>
          <Box component="div" className={classes.timeLineItem}>
            <Typography
              variant="h5"
              align="center"
              className={classes.subHeading}
            >
              Sales Engineer
            </Typography>
            <Typography
              variant="body1"
              align="center"
              style={{ color: "tomato" }}
            >
              International Group Co. | Beirut, Lebanon
            </Typography>
            <ul style={{ color: "tan" }}>
              Responsibilities
              <li>Calculating client quotations.</li>
              <li>
                Providing pre-sales technical assistance and product education,
                and after-sales support services.
              </li>
              <li>Analysing costs and sales.</li>
              <li>Preparing reports for head office.</li>
            </ul>
          </Box>
        </Box>
      </Box>
    </>
  );
};

export default Resume;
