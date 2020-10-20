import React from 'react';
import { Paper, Typography, ButtonBase } from '@material-ui/core';
import withStyles from '@material-ui/core/styles/withStyles';
import Grid from '@material-ui/core/Grid';
import PropTypes from 'prop-types';

const styles = theme => ({
  root: {
    flexGrow: 1,
    marginBottom: 5,
  },
  paper: {
    padding: theme.spacing(2),
    margin: 'auto',
    maxWidth: '100%',
  },
  image: {
    width: '100%',
    height: '100%',
  },
  img: {
    margin: 'auto',
    display: 'block',
    width: '100%',
    height: '100%'
  },
});

const VideoItem = (props) => {
  const {video, classes, handleClickImgVideo} = props;

  return (
    <div className={classes.root}>
      <Paper className={classes.paper}>
        <Grid container spacing={2}>
          <Grid item xs={4} md={5}>
            <ButtonBase className={classes.image}>
              <img className={classes.img} alt="" 
                src={video.snippet.thumbnails.high.url}
                onClick={handleClickImgVideo} />
            </ButtonBase>
          </Grid>
          <Grid item xs={8} md={7} container>
            <Grid item xs container direction="column" spacing={0}>
              <Grid item xs>
                <Typography gutterBottom variant="subtitle1">
                  {video.snippet.title}
                </Typography>
              </Grid>
              <Grid item>
                <Typography variant="body2" style={{ cursor: 'pointer' }}>
                  {video.snippet.channelTitle}
                </Typography>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </Paper>
    </div>
  );
};

export default withStyles(styles)(VideoItem);

VideoItem.propTypes = {
  video: PropTypes.object,
  classes: PropTypes.object,
  handleClickImgVideo: PropTypes.func,
}