'use client';
import React, { useEffect, useState } from 'react';
import { db } from '../firebaseConfig';
import { collection, getDocs } from 'firebase/firestore';
import PantryForm from '../components/PantryForm';
import Search from './Search';
import {
  Box,
  List,
  ListItem,
  ListItemText,
  Paper,
  Typography,
} from '@mui/material';

const PantryList = () => {
  const [items, setItems] = useState([]);
  const [searchQuery, setSearchQuery] = useState('');

  const fetchItems = async () => {
    const querySnapshot = await getDocs(collection(db, 'pantry'));
    setItems(querySnapshot.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
  };

  useEffect(() => {
    fetchItems();
  }, []);

  const filteredItems = items.filter((item) =>
    item.name.toLowerCase().includes(searchQuery.toLowerCase()),
  );

  return (
    <Box sx={{ marginTop: 2 }}>
      <Search searchQuery={searchQuery} setSearchQuery={setSearchQuery} />
      <PantryForm refreshItems={fetchItems} />
      <Paper elevation={3} sx={{ padding: 2, marginTop: 2 }}>
        <Typography variant="h6" gutterBottom>
          Pantry Items
        </Typography>
        <List>
          {filteredItems.map((item) => (
            <ListItem key={item.id} sx={{ borderBottom: '1px solid #ddd' }}>
              <ListItemText
                primary={item.name}
                secondary={`Quantity: ${item.quantity}`}
              />
              <PantryForm item={item} refreshItems={fetchItems} />
            </ListItem>
          ))}
        </List>
      </Paper>
    </Box>
  );
};

export default PantryList;
