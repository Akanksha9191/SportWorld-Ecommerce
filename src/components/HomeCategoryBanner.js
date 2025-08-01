import React, { useState, useEffect } from 'react';
import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';
import { Link } from 'react-router-dom';
import { Get } from './http.service';
import Box from '@mui/material/Box';
import useMediaQuery from '@mui/material/useMediaQuery';
import { useTheme } from '@mui/material/styles';

const HomeCategoryBanner = () => {
  const [image, setimage] = useState([]);
  const theme = useTheme();
  const isXs = useMediaQuery(theme.breakpoints.down('sm'));
  const isSm = useMediaQuery(theme.breakpoints.between('sm', 'md'));
  const isMdUp = useMediaQuery(theme.breakpoints.up('md'));

  useEffect(() => {
    FetchData();
  }, []);

  const FetchData = () => {
    Get(`http://127.0.0.1:8888/HomeCategoryBanner`)
      .then((res) => {
        setimage(res.data);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const getCols = () => {
    if (isXs) return 1;
    if (isSm) return 2;
    if (isMdUp) return 3;
    return 3;
  };

  return (
    <Box sx={{ width: '100%', height: 'auto', padding: '25px' }}>
      <ImageList variant="masonry" cols={getCols()} gap={8}>
        {image.map((item, index) => (
          <Link key={index} to={item.link}>
            <ImageListItem key={item.image}>
              <img
                srcSet={`${item.image}?w=248&fit=crop&auto=format&dpr=2 2x`}
                src={`${item.image}?w=248&fit=crop&auto=format`}
                alt={item.title}
                loading="lazy"
                style={{ width: '100%', height: 'auto' }}
              />
            </ImageListItem>
          </Link>
        ))}
      </ImageList>
    </Box>
  );
};

export default HomeCategoryBanner;
