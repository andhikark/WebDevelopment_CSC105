import {
    Box,
    ImageList,
    ImageListItem,
  
    Typography,
  } from "@mui/material";
  import { Grid } from "@mui/material";
  import React from "react";
  
  const itemData = [
    {
      img: "https://picsum.photos/200/300?grayscale",
      title: "Breakfast",
    },
    {
      img: "https://images.unsplash.com/photo-1551782450-a2132b4ba21d",
      title: "Burger",
    },
    {
      img: "https://picsum.photos/200/300?grayscale",
      title: "Camera",
    },
    {
      img: "https://images.unsplash.com/photo-1444418776041-9c7e33cc5a9c",
      title: "Coffee",
    },
  ];
  
  const Rightbar = () => {
    return (
      <Box sx={{ display: { xs: "none", md: "block" } }}>
        <Box display={"flex"} flexDirection={"column"} mt={2} mb={2}>
          <Typography variant="h6" fontWeight={100}>
            Latest Photos
          </Typography>
          <ImageList sx={{ width: 250 }} cols={2}>
            {itemData.map((item) => (
              <ImageListItem key={item.img}>
                <img
                  src={`${item.img}?w=164&h=164&fit=crop&auto=format`}
                  srcSet={`${item.img}?w=164&h=164&fit=crop&auto=format&dpr=2 2x`}
                  alt={item.title}
                  loading="lazy"
                />
              </ImageListItem>
            ))}
          </ImageList>
        </Box>
      </Box>
    );
  };
  
  export default Rightbar;