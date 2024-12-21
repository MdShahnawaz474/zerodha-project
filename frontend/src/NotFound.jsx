import React from 'react';
import { Box, Button, Container, Grid2, Typography } from '@mui/material';
import Grid from '@mui/material/Grid';
import { Link } from 'react-router-dom';

export default function NotFound() {
  return (
    <Box
      sx={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        minHeight: '80vh'
      }}
    >
      <Container className='mt-2' maxWidth="md">
        <Grid container spacing={1}>
          <Grid2 xs={6}>
            <Typography variant="h1">
              404
            </Typography>
            <Typography variant="h6" >
              The page you’re looking for doesn’t exist.
            </Typography>
            <Link to="/">
            <Button className='mt-3' variant="contained">Back Home</Button>
            </Link>
          </Grid2>
          <Grid xs={6}>
            <img
              src="https://cdn.pixabay.com/photo/2017/03/09/12/31/error-2129569__340.jpg"
              alt=""
              width={500} height={250}
            />
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
}