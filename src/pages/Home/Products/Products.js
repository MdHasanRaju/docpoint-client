import React, { useEffect, useState } from "react";
import { experimentalStyled as styled } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Grid";
import Container from "@mui/material/Container";

import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";

const Products = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetch("https://fakestoreapi.com/products/")
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        setProducts(data);
      });
  }, []);

  return (
    <div>
      <Container>
        <Grid container spacing={2}>
          {products.map((product) => (
            <Grid item xs={12} md={4} lg={4}>
              <Card sx={{ maxWidth: 345 }}>
                <CardMedia
                  component="img"
                  height="140"
                  image={product.image}
                  alt="green iguana"
                />
                <CardContent
                  sx={{ textAlign: "left", height:140 }}
                >
                  <Typography gutterBottom variant="h5" component="div">
                    {product.title.slice(0, 20)}
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    {product.description.slice(0, 150)}
                  </Typography>
                </CardContent>
                <CardActions>
                  <Button size="small">Book</Button>
                  <Button size="small">Get More</Button>
                </CardActions>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Container>
    </div>
  );
};

export default Products;
