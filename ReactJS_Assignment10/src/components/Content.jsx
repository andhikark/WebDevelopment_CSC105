import { Box } from "@mui/material";
import React from "react";
import { Typography } from "@mui/material";
import { Grid, Card } from "@mui/material";
import { CardMedia, CardContent } from "@mui/material";
const Content = () => {
  return (
    <Grid
      container
      direction="column"
      justifyContent="flex-start"
      alignItems="center"
      pt={2}
    >
      <Grid item xs={6}>
        <Box>
          <Typography variant="h4" sx={{ mb: 2 }}>
            Welcome to My Website
          </Typography>
          <Typography variant="body1" sx={{ mb: 2 }}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus
            porta euismod ex, sit amet accumsan elit volutpat et. Donec
            tincidunt justo velit, eu tincidunt lorem consequat in. Nulla
            commodo semper felis, eu ullamcorper nisl lacinia vel.
          </Typography>
          <Typography variant="body1" sx={{ mb: 2 }}>
            Sed rhoncus ipsum dolor, id pharetra velit aliquam nec. Morbi
            commodo eleifend mauris eget bibendum. Aenean et purus eget quam
            consequat vehicula non non tellus. Fusce commodo tortor ut erat
            blandit, vel tincidunt libero malesuada.
          </Typography>
        </Box>
      </Grid>
      <Grid item xs={6}>
        <Grid container spacing={2}>
          <Grid item  sm={12} md={6}>
            <Card>
              <CardMedia
                component="img"
                height="140"
                image="https://picsum.photos/seed/picsum/200/300"
                alt="Random image"
              />
              <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                  Card Title
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis
                  et felis vel nisi tristique tristique in quis est. Ut vel
                  suscipit ante. Donec eu bibendum velit. Integer semper
                  malesuada lorem, eu gravida elit convallis vel.
                </Typography>
              </CardContent>
            </Card>
          </Grid>
          <Grid item sm={6} md={6}>
            <Card>
              <CardMedia
                component="img"
                height="140"
                image="https://picsum.photos/seed/picsum/200/300"
                alt="Random image"
              />
              <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                  Card Title
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis
                  et felis vel nisi tristique tristique in quis est. Ut vel
                  suscipit ante. Donec eu bibendum velit. Integer semper
                  malesuada lorem, eu gravida elit convallis vel.
                </Typography>
              </CardContent>
            </Card>
          </Grid>
          <Grid item sm={6} md={6}>
            <Card>
              <CardMedia
                component="img"
                height="140"
                image="https://picsum.photos/seed/picsum/200/300"
                alt="Random image"
              />
              <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                  Card Title
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis
                  et felis vel nisi tristique tristique in quis est. Ut vel
                  suscipit ante. Donec eu bibendum velit. Integer semper
                  malesuada lorem, eu gravida elit convallis vel.
                </Typography>
              </CardContent>
            </Card>
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  );
};

export default Content;