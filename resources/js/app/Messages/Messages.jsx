import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Container from '@material-ui/core/Container';
// import createBreakpoints from '@material-ui/core/styles/createBreakpoints';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import List from '@material-ui/core/List';
import MessagePreviewItem from './MessagePreviewItem';
import React, { useState, useEffect } from 'react';


const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    padding: theme.spacing(2),
    textAlign: 'center',
    color: theme.palette.text.secondary,

    },

 
}));


export default function Messages() {
  const classes = useStyles();

  const [threads, setThreads] = useState([]);
  const [loading, setLoading] = React.useState(true);
  
  const loadThreads = async () => {
      setLoading(true);
      const response = await fetch("/api/threads/");
      const data = await response.json();
      data && setThreads(data);
      setLoading(false);
  }
  
  useEffect(() => {
      loadThreads();
  }, [])
  
  let threadContent = "";
  
  if (loading) {
      threadContent = (
          <div className="logo--pulsating">
              <img src="/heart_plantera_inversed.png"/>
          </div>
      );
  } else {
      if (threads.length) {
          threadContent = (
              <>
              {threads.map((thread, index) => (
                <div key={index}>
                  <MessagePreviewItem thread={thread} />
                </div>
              ))}
              </>
        );
      } else {
          
          threadContent = "No threads found.";
      }
    }

  return (
    <div>
    <Container>
      <Grid  container 
             direction="column"
             alignItems="center"
             >

          <Grid item xs={12}>
            <Box mx="auto" p={5}>                                
                <Typography variant="h3" 
                            color="primary"
                            align='center'
                            >                      
                    Messages
                </Typography>               
            </Box>
          </Grid>

         
        <Grid item xs={12} lg={6}> 
          <Box className="boxshadow">                             
             <List>

               { threadContent }

              </List>
              </Box> 
              </Grid>
                          
            
         </Grid>
    </Container>
  </div>
  )
}