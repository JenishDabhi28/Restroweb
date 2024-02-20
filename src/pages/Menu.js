import React, { useState, useEffect } from 'react';
import { Typography, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper, Button, CardMedia, Grid } from '@mui/material';
import Layout from './../components/Layout/Layout';
import { MenuList } from '../data/data';

const Menu = () => {
  const [selectedItems, setSelectedItems] = useState([]);
  const [orderedItems, setOrderedItems] = useState([]);
  const [isOrderPlaced, setIsOrderPlaced] = useState(false);

  useEffect(() => {
    const storedData = JSON.parse(localStorage.getItem('menuData'));
    if (storedData) {
      setSelectedItems(storedData.selectedItems || []);
      setOrderedItems(storedData.orderedItems || []);
      setIsOrderPlaced(storedData.isOrderPlaced || false);
    }
  }, []);

  useEffect(() => {
    localStorage.setItem('menuData', JSON.stringify({ selectedItems, orderedItems, isOrderPlaced }));
  }, [selectedItems, orderedItems, isOrderPlaced]);

  const toggleSelection = (item) => {
    const updatedItems = selectedItems.some(selectedItem => selectedItem.id === item.id)
      ? selectedItems.filter(selectedItem => selectedItem.id !== item.id)
      : [...selectedItems, item];
    setSelectedItems(updatedItems);
  };

  const placeOrder = () => {
    const isConfirmed = window.confirm("Are you sure you want to place the order for selected items?");
    if (isConfirmed) {
      setOrderedItems([...orderedItems, ...selectedItems]);
      setSelectedItems([]);
      setIsOrderPlaced(true);
    }
  };

  return (
    <Layout>
      <div style={{ padding: '20px', backgroundColor: '#f0f0f0' }}>
      <Typography variant="h4" style={{ marginBottom: '20px', marginTop: '25px', textAlign: 'center', paddingTop: '20px', boxShadow: '0px 2px 4px rgba(0, 0, 0, 0.1)', fontSize: '32px', fontWeight: 'bold', fontStyle: 'italic' }}>Menu</Typography>

        <Grid container spacing={3}>
          {MenuList.map((item) => (
            <Grid item key={item.id} xs={12} sm={6} md={4}>
              <Paper elevation={3} style={{ padding: '20px', height: '100%' }}>
                <CardMedia component="img" image={item.image} alt={item.name} style={{ width: '100%', marginBottom: '10px' }} />
                <Typography variant="h6" style={{ marginBottom: '10px', textAlign: 'center' }}>{item.name}</Typography>
                <Typography variant="body1" style={{ marginBottom: '10px', textAlign: 'center' }}>Price: {item.price}</Typography>
                <Typography variant="body2" style={{ marginBottom: '10px', textAlign: 'center' }}>{item.description}</Typography>
                <Button onClick={() => toggleSelection(item)} variant={selectedItems.some(selectedItem => selectedItem.id === item.id) ? "outlined" : "contained"} color={selectedItems.some(selectedItem => selectedItem.id === item.id) ? "secondary" : "primary"} fullWidth>
                  {selectedItems.some(selectedItem => selectedItem.id === item.id) ? "Deselect" : "Select"}
                </Button>
              </Paper>
            </Grid>
          ))}
        </Grid>

        {selectedItems.length > 0 && (
          <div style={{ marginTop: '30px', textAlign: 'center' }}>
            <Typography variant="h5" style={{ marginBottom: '10px' }}>Selected Items</Typography>
            <TableContainer component={Paper}>
              <Table>
                <TableHead>
                  <TableRow>
                    <TableCell>No.</TableCell>
                    <TableCell>Item Name</TableCell>
                    <TableCell>Description</TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  {selectedItems.map((item, index) => (
                    <TableRow key={item.id}>
                      <TableCell>{index + 1}</TableCell>
                      <TableCell>{item.name}</TableCell>
                      <TableCell>{item.description}</TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </TableContainer>
            <Button onClick={placeOrder} variant="contained" color="primary" style={{ marginTop: '20px' }} fullWidth>Place Order</Button>
          </div>
        )}

        {isOrderPlaced && (
          <div style={{ marginTop: '30px', textAlign: 'center' }}>
            <Typography variant="h5" style={{ marginBottom: '10px' }}>Ordered Items</Typography>
            <TableContainer component={Paper}>
              <Table>
                <TableHead>
                  <TableRow>
                    <TableCell>No.</TableCell>
                    <TableCell>Item Name</TableCell>
                    <TableCell>Description</TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  {orderedItems.map((item, index) => (
                    <TableRow key={item.id}>
                      <TableCell>{index + 1}</TableCell>
                      <TableCell>{item.name}</TableCell>
                      <TableCell>{item.description}</TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </TableContainer>
          </div>
        )}
      </div>
    </Layout>
  );
};

export default Menu;
