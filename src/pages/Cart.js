import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Button, Typography, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper } from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';

const Cart = ({ addToCartFromMenu }) => {
  const [cart, setCart] = useState([]);

  useEffect(() => {
    // You can use addToCartFromMenu to update the cart from Menu.js
  }, [addToCartFromMenu]);

  const addToCart = (menuItem) => {
    setCart((prevCart) => {
      const existingCartItemIndex = prevCart.findIndex((item) => item.menuId === menuItem.menuId);

      if (existingCartItemIndex !== -1) {
        // If the item already exists in the cart, update the quantity
        return prevCart.map((item) =>
          item.menuId === menuItem.menuId
            ? { ...item, quantity: item.quantity + 1 }
            : item
        );
      } else {
        // If the item doesn't exist, add it to the cart
        return [...prevCart, { menuId: menuItem.menuId, cardNumber: menuItem.cardNumber, quantity: 1 }];
      }
    });
  };

  const removeFromCart = (menuId) => {
    setCart((prevCart) => {
      const updatedCart = prevCart.filter((item) => item.menuId !== menuId);
      return updatedCart;
    });
  };

  const handleCloseCart = () => {
    console.log('Closing the cart:', cart);
  };

  return (
    <div style={cartContainerStyle}>
      <Typography variant="h4">Your Cart</Typography>

      <TableContainer component={Paper} style={{ margin: '20px 0' }}>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>Card Number</TableCell>
              <TableCell>Menu ID</TableCell>
              <TableCell>Quantity</TableCell>
              <TableCell>Actions</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {cart.map((item) => (
              <TableRow key={item.menuId}>
                <TableCell>{item.cardNumber}</TableCell>
                <TableCell>{item.menuId}</TableCell>
                <TableCell>{item.quantity}</TableCell>
                <TableCell>
                  <Button onClick={() => removeFromCart(item.menuId)}>-</Button>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>

      <Link to="/menu" style={{ textDecoration: 'none' }}>
        <Button
          variant="contained"
          color="primary"
          startIcon={<CloseIcon />}
          onClick={handleCloseCart}
          style={closeButtonStyle}
        >
          Close Cart
        </Button>
      </Link>
    </div>
  );
};

// CSS styles
const cartContainerStyle = {
  textAlign: 'center',
  padding: '20px',
  border: '2px solid #ccc',
  borderRadius: '8px',
  maxWidth: '600px',
  margin: 'auto',
  marginTop: '50px',
};

const closeButtonStyle = {
  marginTop: '20px',
};

export default Cart;
