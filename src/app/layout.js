'use client';
import React from 'react';
import { Container, Box } from '@mui/material';

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/favicon.ico" />
      </head>
      <body>
        <Container>
          <Box sx={{ padding: 2 }}>{children}</Box>
        </Container>
      </body>
    </html>
  );
}
