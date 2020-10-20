import React, { useState, useEffect, useMemo } from 'react';
import { ThemeProvider, createMuiTheme, responsiveFontSizes } from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseline';
import Grid from '@material-ui/core/Grid';
import NavBarTop from './components/NavBarTop';
import VideoDetails from './components/VideoDetails';
import VideoList from './components/VideoList';
import PropTypes from 'prop-types';

import youtube from './api/youtube';

const App = () => {
  const [videos, setVideos] = useState([]);
  const [prefersDarkMode, setPrefersDarkMode] = useState(false);
  const [selectedVideo, setSelectedVideo] = useState(null);

  let theme = useMemo(
    () => 
      createMuiTheme({
        palette: {
          type: prefersDarkMode ? 'dark' : 'light',
        },
      }),
    [prefersDarkMode]
  );
  theme = responsiveFontSizes(theme);
  
  const getData = async (string) => {
    const res = await youtube.get('search', {
      params: {
        part: 'snippet',
        maxResults: 6,
        key: 'AIzaSyDkdqpVBDnxw7Oqg7x_2H-Jraiyd-93RgE',
        q: string
      }
    });
    console.log(res.data.items);
    setVideos(res.data.items);
    setSelectedVideo(res.data.items[0]);
  };

  useEffect(() => {
    if (videos.length === 0)  {
      getData('Champion League 2019-2020')    }
  })
  const handleSubmitSearch = searchTerm => getData(searchTerm);
  const switchDarkMode = () => setPrefersDarkMode(!prefersDarkMode);
  const handleClickImgVideo = index => {
    return e => setSelectedVideo(videos[index]);
  };

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline>
        <div>
          <Grid container>
            <Grid item xs={12}>
              <NavBarTop
                darkMode={prefersDarkMode} 
                switchDarkMode={switchDarkMode}
                onFormSubmit={handleSubmitSearch}
              />
            </Grid>
            <Grid item xs={12}>
              <Grid container justify="center" spacing={2}>
                <Grid item xs={12} md={6}>
                  <VideoDetails
                    video={selectedVideo}
                  />
                </Grid>
                <Grid item xs={12} md={3}>
                  <VideoList 
                  videos={videos}
                  onImgVideoClick={handleClickImgVideo}
                  />
                </Grid>
              </Grid>
            </Grid>
          </Grid>
        </div>
      </CssBaseline>
    </ThemeProvider>
  );
}

export default App;

App.propTypes = {
  theme: PropTypes.object.isRequired,
}