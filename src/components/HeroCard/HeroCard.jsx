import * as React from 'react';
import { Link } from 'react-router-dom';
import { useLocation } from 'react-router-dom';
import {
  Card,
  CardContent,
  CardMedia,
  Button,
  Typography,
} from '@mui/material/';

const IMAGE_URL = 'https://super-hero-ihdu.onrender.com/';

export default function HeroCrad({ hero = {} }) {
  const location = useLocation();

  const { nickname, images, _id } = hero;
  return (
    <Card sx={{ maxWidth: 345 }}>
      <CardMedia
        component="img"
        alt="hero photo"
        height="320"
        image={`${IMAGE_URL}${images[0]}`}
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {nickname}
        </Typography>
      </CardContent>
      <Link to={`/hero/${_id}`} state={{ from: location }}>
        <Button size="small">Learn More</Button>
      </Link>
    </Card>
  );
}
