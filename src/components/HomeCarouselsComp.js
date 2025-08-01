import { useEffect, useState } from 'react';
import Carousel from 'react-bootstrap/Carousel';
import Image from 'react-bootstrap/Image';
import { Get } from './http.service';

const HomeCarouselsComp = () => {
  const [index, setIndex] = useState(0);
  const [image, setimage]= useState([])

  const handleSelect = (selectedIndex) => {
    setIndex(selectedIndex);
  };
  useEffect(()=>{
    FetchData()
  },[])

  const FetchData= ()=>{
    Get(`http://localhost:8888/homecarousels`)
    .then((res)=>{
        setimage(res.data)
    })
    .catch((error)=>{
      console.log(error)
    })
  }

  return (
    <div className="pt-5" style={{marginTop:"95px"}}>
      <Carousel
        activeIndex={index}
        onSelect={handleSelect}
        className="w-100"
        interval={3000}
        fade
      >
        {image.map((img, index)=>
        (        <Carousel.Item>
          <Image
            src={img.image}
            alt="Slide 1"
            fluid
            className="d-block w-100"
            style={{ height: '450px'}}
          />
        </Carousel.Item>)
        )}
      </Carousel>
    </div>
  );
};

export default HomeCarouselsComp;
