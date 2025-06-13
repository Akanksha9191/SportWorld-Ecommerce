import { useState } from 'react';
import Carousel from 'react-bootstrap/Carousel';
import ImageComp from './ImageComp';
import Image from 'react-bootstrap/Image';
const HomeCarouselsComp = ()=>{
    const [index, setIndex] = useState(0);

  const handleSelect = (selectedIndex) => {
    setIndex(selectedIndex);
  };
    return(
        <div className='' style={{marginTop:'170px'}}>
            <Carousel activeIndex={index} onSelect={handleSelect} style={{width:"100%"}}>
      <Carousel.Item>
        <Image src={ImageComp.CarouselImg2} height={"450px"} width={'100%'}/>
      </Carousel.Item>
      <Carousel.Item>
       <Image src={ImageComp.CarouselImg1} height={"450px"} width={'100%'}/>
      </Carousel.Item>
      <Carousel.Item>
      <Image src={ImageComp.CarouselImg3} height={"450px"} width={'100%'}/>
      </Carousel.Item>
    </Carousel>
        </div>
    )
}
export default HomeCarouselsComp;