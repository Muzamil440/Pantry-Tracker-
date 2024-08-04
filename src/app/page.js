'use client';
import React from 'react';
import { Typography, Container, Paper } from '@mui/material';
import PantryList from './components/PantryList';

const HomePage = () => {
  return (
    <Container>
      <Paper elevation={3} sx={{ padding: 2, marginTop: 2 }}>
        <Typography variant="h1" component="h1" gutterBottom>
          Pantry Tracker
        </Typography>
        <PantryList />
      </Paper>
    </Container>
  );
};

export default HomePage;
