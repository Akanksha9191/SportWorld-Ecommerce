import * as React from 'react';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import ListSubheader from '@mui/material/ListSubheader';

const data = [
  {
    src: 'https://images.unsplash.com/photo-1502657877623-f66bf489d236',
    title: 'Night view',
    description: '4.21M views',
  },
  {
    src: 'https://images.unsplash.com/photo-1527549993586-dff825b37782',
    title: 'Lake view',
    description: '4.74M views',
  },
  {
    src: 'https://images.unsplash.com/photo-1532614338840-ab30cf10ed36',
    title: 'Mountain view',
    description: '3.98M views',
  },
];

export default function ShopByCategoryCarousel() {
  return (
    <Box sx={{ paddingTop: "80px", width: '100%' }}>
      <ListSubheader component="div" sx={{ fontSize: '1.5rem', mb: 1, px: 5 }}>
        Shop by Categories
      </ListSubheader>

      <Box
        sx={{
          display: 'flex',
          gap: 2,
          px: 5,
          overflowX: 'auto',
          width: '100%',
          scrollSnapType: 'x mandatory',
          '& > *': {
            scrollSnapAlign: 'center',
            flexShrink: 0,
          },
          '::-webkit-scrollbar': { display: 'none' },
        }}
      >
        {data.map((item) => (
          <Card
            key={item.title}
            sx={{
              position: 'relative',
              width: 250,
              height: 160,
              flexShrink: 0,
              borderRadius: 2,
              overflow: 'hidden',
              boxShadow: 2,
            }}
          >
            <CardMedia
              component="img"
              image={`${item.src}?h=200&fit=crop&auto=format`}
              alt={item.title}
              sx={{ width: '100%', height: '100%', objectFit: 'cover' }}
            />
            <Box
              sx={{
                position: 'absolute',
                bottom: 0,
                width: '100%',
                bgcolor: 'rgba(0, 0, 0, 0.5)',
                color: '#fff',
                px: 1,
                py: 0.5,
              }}
            >
              <Typography variant="subtitle1" sx={{ fontWeight: 'bold', fontSize: '1rem' }}>
                {item.title}
              </Typography>
              <Typography variant="body2">{item.description}</Typography>
            </Box>
          </Card>
        ))}
      </Box>
    </Box>
  );
}
