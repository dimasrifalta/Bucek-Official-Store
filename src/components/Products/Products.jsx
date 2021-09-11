import React from 'react';
import { Grid } from '@material-ui/core';
import Product from './Product/Product';

import useStyle from './styles.js';

const products = [
  {
    id: 1,
    name: 'Shoes',
    description: 'Running shoes',
    price: '$10',
    image:
      'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQZK2q0ZafIn_rhdt_nXyFRuQyCU999qkXjTA&usqp=CAU',
  },
  {
    id: 2,
    name: 'Macbook',
    description: 'Apple macbook',
    price: '$10',
    image:
      'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQZK2q0ZafIn_rhdt_nXyFRuQyCU999qkXjTA&usqp=CAU',
  },
];

const Products = ({ products, onAddToCart }) => {
  const classes = useStyle();
  return (
    <main className={classes.content}>
      <div className={classes.toolbar} />
      <Grid container justify='center' spacing={4}>
        {products.map((product) => (
          <Grid item key={product.id} xs={12} sm={6} md={4} lg={3}>
            <Product product={product} onAddToCart={onAddToCart} />
          </Grid>
        ))}
      </Grid>
    </main>
  );
};

export default Products;
