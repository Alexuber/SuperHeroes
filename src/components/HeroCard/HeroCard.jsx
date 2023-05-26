import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { Link } from 'react-router-dom';
import { useLocation } from 'react-router-dom';

export default function HeroCrad({
  title = 'Superman',
  id = '12345',
  poster = '',
}) {
  const location = useLocation();

  return (
    <Card sx={{ maxWidth: 345 }}>
      <CardMedia
        component="img"
        alt="hero photo"
        height="320"
        image={require('assets/img/superman.jpg')}
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {title}
        </Typography>
      </CardContent>
      <Link key={id} to={`/hero/${id}`} state={{ from: location }}>
        <Button size="small">Learn More</Button>
      </Link>
    </Card>
  );
}
