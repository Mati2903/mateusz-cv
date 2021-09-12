import React from "react";
import {Container} from "react-bootstrap";

import { makeStyles } from '@material-ui/core/styles';
import Timeline from '@material-ui/lab/Timeline';
import TimelineItem from '@material-ui/lab/TimelineItem';
import TimelineSeparator from '@material-ui/lab/TimelineSeparator';
import TimelineConnector from '@material-ui/lab/TimelineConnector';
import TimelineContent from '@material-ui/lab/TimelineContent';
import TimelineOppositeContent from '@material-ui/lab/TimelineOppositeContent';
import TimelineDot from '@material-ui/lab/TimelineDot';

import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles((theme) => ({
    paper: {
      padding: '6px 16px',
    },
    secondaryTail: {
      backgroundColor: theme.palette.secondary.main,
    },
  }));


function Experience() {
    const classes = useStyles();
    return (
      <div style={{position: "relative"}}>
        <Container fluid id="experience" style={{minHeight: "100vh", position: "center"}}>
          <h1 className="text-light display-4 font-weight-bold" style={{textAlign: "center", paddingTop: "13vh"}}>Doświadczenie</h1>
           
            <Timeline  align="left" style={{ padding: "7% 13% 5% 5%"}}>

              <TimelineItem >
                <TimelineOppositeContent>
                  <Typography color="textPrimary" className="timeline">05.2020 - teraz</Typography>
                </TimelineOppositeContent>
                <TimelineSeparator>
                  <TimelineDot></TimelineDot>
                  <TimelineConnector />
                </TimelineSeparator>
                <TimelineContent>
                  <Paper elevation={3} style={{backgroundColor: "rgb(52, 58, 64)", color: "white"}} className={classes.paper}>
                    <Typography variant="h4" component="h1" className="timeline">MMC Electronics</Typography>
                    <Typography className="timeline">Inżynier serwisu urządzeń medycznych oraz laptopów</Typography>
                  </Paper>
                </TimelineContent>
              </TimelineItem>

              <TimelineItem>
                <TimelineOppositeContent>
                  <Typography color="textPrimary" className="timeline">07.2019 - 04.2020</Typography>
                </TimelineOppositeContent>
                <TimelineSeparator>
                  <TimelineDot></TimelineDot>
                  <TimelineConnector />
                </TimelineSeparator>
                <TimelineContent>
                  <Paper elevation={3} style={{backgroundColor: "rgb(52, 58, 64)", color: "white", minWidth: "190px"}} className={classes.paper}>
                    <Typography variant="h4" component="h1" className="timeline">Renault Nazaruk Service</Typography>
                    <Typography className="timeline">Elektromechanik i diagnosta samochodowy</Typography>
                  </Paper>
                </TimelineContent>
              </TimelineItem>

            </Timeline>
          </Container>
          
          <hr style={{position: "absolute", top: "100%", bottom: "0", width: "100%", height: "1px", backgroundImage: "linear-gradient(to right, rgba(0, 0, 0, 0), rgba(0, 0, 0, 0.75), rgba(0, 0, 0, 0))" }}/>
        
        </div>
    );
}


export default Experience;