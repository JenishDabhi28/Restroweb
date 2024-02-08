import React, { useState, useEffect } from 'react';
import { Typography, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper, Button, CardMedia } from '@mui/material';
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

  const updateLocalStorage = () => {
    localStorage.setItem('menuData', JSON.stringify({ selectedItems, orderedItems, isOrderPlaced }));
  };

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
      <div style={{ textAlign: 'center', padding: '20px', backgroundColor: '#f0f0f0' }}>
        <Typography variant="h4" style={{ marginBottom: '20px', marginTop: '25px' }}>Menu</Typography>
        <TableContainer component={Paper}>
          <Table>
            <TableHead>
              <TableRow>
                <TableCell>No.</TableCell>
                <TableCell>Item Name</TableCell>
                <TableCell>Price</TableCell>
                <TableCell>Description</TableCell>
                <TableCell>Image</TableCell>
                <TableCell>Actions</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {MenuList.map((item) => (
                <TableRow key={item.id}>
                  <TableCell>{item.id}</TableCell>
                  <TableCell>{item.name}</TableCell>
                  <TableCell>{item.price}</TableCell>
                  <TableCell>{item.description}</TableCell>
                  <TableCell>
                    <CardMedia component="img" image={item.image} alt={item.name} style={{ width: 100 }} />
                  </TableCell>
                  <TableCell>
                    <Button onClick={() => toggleSelection(item)} variant={selectedItems.some(selectedItem => selectedItem.id === item.id) ? "outlined" : "contained"} color={selectedItems.some(selectedItem => selectedItem.id === item.id) ? "secondary" : "primary"}>
                      {selectedItems.some(selectedItem => selectedItem.id === item.id) ? "Deselect" : "Select"}
                    </Button>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>

        {selectedItems.length > 0 && (
          <div style={{ marginTop: '30px' }}>
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
            <Button onClick={placeOrder} variant="contained" color="primary" style={{ marginTop: '20px' }}>Place Order</Button>
          </div>
        )}

        {isOrderPlaced && (
          <div style={{ marginTop: '30px' }}>
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
