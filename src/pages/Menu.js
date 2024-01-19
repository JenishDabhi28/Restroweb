import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Cart from './Cart';
import { MenuList, getInitialCartState } from '../data/data';
import Layout from './../components/Layout/Layout';
import {
  Box,
  Card,
  CardActionArea,
  CardContent,
  CardMedia,
  Typography,
  Button,
} from '@mui/material';

const Menu = ({ addToCartFromMenu }) => {
  const [cart, setCart] = useState(getInitialCartState());

  const addToCart = (menuItem) => {
    setCart((prevCart) => {
      const existingCartItemIndex = prevCart.findIndex((item) => item.menuId === menuItem.id);

      if (existingCartItemIndex !== -1) {
        prevCart[existingCartItemIndex].quantity += 1;
        return [...prevCart];
      } else {
        return [...prevCart, { menuId: menuItem.id, cardNumber: menuItem.cardNumber, quantity: 1 }];
      }
    });
    addToCartFromMenu(menuItem); // Call the function from props to update Cart component
  };

  return (
    <Layout>
      <Box sx={{ display: 'flex', justifyContent: 'flex-end', margin: '70px' }}>
        <Link
          to={{
            pathname: "/cart",
            state: { cartData: cart, addToCartFromMenu: addToCart },
          }}
          style={{ textDecoration: 'none' }}
        >
          <Button variant="outlined" color="primary">
            View Cart
          </Button>
        </Link>
      </Box>
      <Box sx={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center' }}>
        {MenuList.map((menuItem) => (
          <Card
            key={menuItem.id}
            sx={{
              maxWidth: '390px',
              display: 'flex',
              m: 2,
              marginTop: '20px',
              cursor: 'pointer',
            }}
          >
            <CardActionArea>
              <CardMedia
                sx={{ minHeight: '350px' }}
                component="img"
                src={menuItem.image}
                alt={menuItem.name}
              />
              <CardContent>
                <Typography variant="h5" gutterBottom component="div">
                  {menuItem.name}
                </Typography>
                <Typography variant="body2">{menuItem.description}</Typography>
                <Typography variant="body2">Card Number: {menuItem.cardNumber}</Typography>
                <Typography variant="body2">Menu ID: {menuItem.id}</Typography>
                <Typography variant="body2">Quantity: 1</Typography>
              </CardContent>
            </CardActionArea>
            <Box sx={{ padding: '3px' }}>
              <Button
                variant="contained"
                color="primary"
                onClick={() => addToCart(menuItem)}
                key={`add-to-cart-${menuItem.id}`}
              >
                Add to Cart
              </Button>
            </Box>
          </Card>
        ))}
      </Box>
    </Layout>
  );
};

export default Menu;
