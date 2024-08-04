'use client';
import React, { useState } from 'react';
import { TextField, Button, Box, Typography, Paper } from '@mui/material';
import { db } from '../firebaseConfig';
import {
  collection,
  addDoc,
  updateDoc,
  deleteDoc,
  doc,
} from 'firebase/firestore';

const PantryForm = ({ item, refreshItems }) => {
  const [name, setName] = useState(item ? item.name : '');
  const [quantity, setQuantity] = useState(item ? item.quantity : '');

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (item) {
      const docRef = doc(db, 'pantry', item.id);
      await updateDoc(docRef, { name, quantity });
    } else {
      await addDoc(collection(db, 'pantry'), { name, quantity });
    }
    refreshItems();
  };

  const handleDelete = async () => {
    const docRef = doc(db, 'pantry', item.id);
    await deleteDoc(docRef);
    refreshItems();
  };

  return (
    <Paper elevation={3} sx={{ padding: 2, marginBottom: 2 }}>
      <Typography variant="h6" gutterBottom>
        {item ? 'Update Item' : 'Add New Item'}
      </Typography>
      <form onSubmit={handleSubmit}>
        <Box sx={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
          <TextField
            label="Item Name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
            variant="outlined"
          />
          <TextField
            label="Quantity"
            value={quantity}
            onChange={(e) => setQuantity(e.target.value)}
            required
            variant="outlined"
          />
          <Box sx={{ display: 'flex', gap: 2 }}>
            <Button type="submit" variant="contained" color="primary">
              {item ? 'Update' : 'Add'} Item
            </Button>
            {item && (
              <Button
                onClick={handleDelete}
                variant="outlined"
                color="secondary"
              >
                Delete Item
              </Button>
            )}
          </Box>
        </Box>
      </form>
    </Paper>
  );
};

export default PantryForm;
