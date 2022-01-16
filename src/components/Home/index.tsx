import React from 'react';
import { ThemeProvider } from '@mui/material/styles';
import { Box } from '@mui/system';
import { MainTheme } from 'assets/styling';
import { CardMedia } from '@mui/material';
import profileImage from 'assets/images/home.png';

function Home() {
  return (
    <ThemeProvider theme={MainTheme}>
      <Box sx={{
        width: '100%',
        display: 'flex',
        justifyContent: 'center',
        backgroundColor: '#2b2e33',
      }}
      >
        <CardMedia
          component="img"
          src={profileImage}
          style={{
            width: 600,
            height: 600,
          }}
          title="Profile picture"
        />
      </Box>

    </ThemeProvider>
  );
}

export default Home;
