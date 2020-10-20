import React from 'react';
import VideoItem from './VideoItem';
import withStyles from '@material-ui/core/styles/withStyles';
import PropTypes from 'prop-types';

const styles = theme => ({
  listVideo: {
    width: '100%',
    marginTop: 10,
  },
});

const VideoList = (props) => {
  const {videos, classes, onImgVideoClick} = props;
  const listOfVideo = videos.slice(1).map((video, index) => {
    return (
      <VideoItem 
        key={index} 
        video={video}
        handleClickImgVideo={onImgVideoClick(index + 1)}/>
    );    
  })
  return (
    <div className={classes.listVideo}>
      {listOfVideo}
    </div>
  );
}

export default withStyles(styles)(VideoList);

VideoList.propTypes = {
  videos: PropTypes.array,
  classes: PropTypes.object,
  onImgVideoClick: PropTypes.func,
};