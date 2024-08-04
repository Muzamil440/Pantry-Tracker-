'use client';
import React from 'react';
import { TextField, Box } from '@mui/material';

const Search = ({ searchQuery, setSearchQuery }) => (
  <Box sx={{ marginBottom: 2 }}>
    <TextField
      label="Search Items"
      value={searchQuery}
      onChange={(e) => setSearchQuery(e.target.value)}
      variant="outlined"
      fullWidth
    />
  </Box>
);

export default Search;
