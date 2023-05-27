import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { Link } from 'react-router-dom';
import { useLocation } from 'react-router-dom';

const IMAGE_URL = 'http://localhost:3001/'; // write to .env

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
