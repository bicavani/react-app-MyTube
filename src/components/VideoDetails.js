import React from 'react';
import Typography from '@material-ui/core/Typography';
import Paper from '@material-ui/core/Paper';
import Divider from '@material-ui/core/Divider';
import withStyles from '@material-ui/core/styles/withStyles';
import Button from '@material-ui/core/Button';
import Avatar from '@material-ui/core/Avatar';
import PropTypes from 'prop-types';


const styles = theme => ({
  paper: {
    marginTop: 10,
  },
  video: {
    width: '100%',
    height: '315px',
  },
  videoTitle: {
    marginTop: 10,
    paddingBottom: 10,
  },
  channel: {
    display: 'flex',
    marginTop: 10
  },
  channelAvatar: {
    width: '15%',
    display: 'flex',
    alignItems: 'flex-start'
  },
  channelInfo: {
    flexGrow: 1,
  },
  channelTitle: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'flex-start',
    flexGrow: 1,
    marginBottom: 10,
  },

});


const VideoDetails = (props) => {
  const {video, classes} = props;

  if (!video) return <div>Loading....</div>

  const videoSrc = `https://www.youtube.com/embed/${video.id.videoId}`;
  return (
    <div>
      <Paper className={classes.paper}>
        <div className={classes.video}>
          <iframe 
            width="100%" height="100%" 
            src={videoSrc} 
            frameborder="0"
            title={video.snippet.title} 
            allowfullscreen>
          </iframe>
        </div> 
        <div className={classes.videoTitle}>
          <Typography variant="h6">
            {video.snippet.title}
          </Typography>
        </div>
        <Divider light />
        <div className={classes.channel}>
          <div className={classes.channelAvatar}>
            <Avatar className={classes.avatar} variant="square">
              M
            </Avatar>
          </div>
          <div className={classes.channelInfo}>
            <div className={classes.channelTitle}>
              <Typography variant="subtitle1">
                {video.snippet.channelTitle}
              </Typography>
              <Button size="small" variant="contained" color="secondary">
                Subcribe
              </Button>
            </div>
            <Typography variant="subtitle2">
              {video.snippet.description}
            </Typography>
          </div>
        </div>
      </Paper>
    </div>
  );
};

export default withStyles(styles)(VideoDetails);

VideoDetails.propTypes = {
  video: PropTypes.object,
  classes: PropTypes.object,
}