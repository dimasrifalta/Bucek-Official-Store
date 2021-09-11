import React from 'react';
import { Container, Typography, Button, Grid } from '@material-ui/core';
import useStyle from './styles';

const Cart = () => {
  const classes = useStyle();
  const isEmpty = true;

  const EmptyCart = () => (
    <Typography variant='h3'>
      Your have no items in the cart, start addding now!
    </Typography>
  );

  const FilledCart = () => (
    <>
      <Grid></Grid>
    </>
  );

  return (
    <Container>
      <div className={classes.toolbar} />
      <Typography className={classes.title} variant='h3'>
        Your Shopping Cart
      </Typography>
      {isEmpty ? <EmptyCart /> : <FilledCart />}
    </Container>
  );
};

export default Cart;
