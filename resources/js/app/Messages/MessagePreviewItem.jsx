import React from 'react';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import ListItemAvatar from '@material-ui/core/ListItemAvatar';
import Avatar from '@material-ui/core/Avatar';
import Typography from '@material-ui/core/Typography';
import ListItemSecondaryAction from '@material-ui/core/ListItemSecondaryAction';
import DeleteIcon from '@material-ui/icons/Delete';
import IconButton from '@material-ui/core/IconButton';
import Grid from '@material-ui/core/Grid';
import Divider from '@material-ui/core/Divider';
import Box from '@material-ui/core/Box';
import Moment from 'react-moment';

function MessagePreviewItem({thread}) {

    const loadDivider = true;

    return (
          <div>
            <Grid item xs={12}>
              <ListItem secondaryaction="true" >          
                  <ListItemAvatar p={2}>
                    <Avatar alt="Remy Sharp" src="/static/images/avatar/1.jpg" />
                 </ListItemAvatar>
                
                <ListItemText
                primary=
                {<Typography
                    component="span"
                    variant="body2"
                    color="textPrimary"
                    align="center">
                    
                    {thread.post.name}
                    
                    </Typography>
                    }

                // {Object.keys(thread).map(function(post) {
                //     return <div>Key: {name}, Value: {post[name]}</div>;
                //   })}

                secondary={
                <React.Fragment>
                    <Typography
                        component="span"
                        variant="body2"
                        color="primary"
                    >
                        {thread.messages[0].user.name}
                    </Typography>
                    {" — "} {thread.messages[thread.messages.length-1].body}
                     </React.Fragment>
                }
                />
                <Box p={2}>
                <ListItemText 
                primary={<Typography
                component="span"
                variant="body2"
                color="textPrimary"
                align="center">
                
                <Moment fromNow>{thread.created_at}</Moment>
                
                </Typography>
                }
                />
                </Box>

                <ListItemSecondaryAction>
                  <IconButton edge="end" aria-label="delete" p={2}>
                   <DeleteIcon />
                  </IconButton>
                </ListItemSecondaryAction>

            </ListItem>    

      
       { loadDivider ? <Divider variant="middle" /> 
                     : <React.Fragment></React.Fragment>
                     }
             
          </Grid>
          </div>     
    )    
      }

export default MessagePreviewItem
