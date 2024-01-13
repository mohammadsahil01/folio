
import Slider from 'react-slick';

import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

export type Item = {
  Img: string,
  Name: string,
  Code_link: string,
  Demo_link: string
};

type Data = {
  data: Item[]
};

const Carousel = ({ data }: Data) => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 300,
    slidesToShow: 1,
    slidesToScroll: 1,
    
  };

  return (
  <div className='mt-20' id='projects'>
    <div className="flex items-center justify-center">
        <h1 className="pb-7 text-4xl text-white lg:text-6xl">
          My <span className="text-[#6fc1ce]">Projects</span>
        </h1>
      </div>
    <div className='mx-10 mt-10 lg:mx-60 bg-gray-700 rounded-xl'>
    <Slider {...settings}>
      {data.map((item: Item, index: number) => (
        <div key={index} className='text-white'>
          <h2 className='flex items-center justify-center text-2xl py-5 text-[#6fc1ce]'>{item.Name}</h2>
          <img className='px-8 md:px-15 lg:px-20 rounded-lg' src={item.Img} alt={item.Name} />
          <div className='flex items-end justify-between px-10 md:px-25 lg:px-36 py-3 text-2xl '>
                <a href={item.Code_link} className="button-link hover:text-gray-400">
                    <button onClick={() => console.log('Code Button Clicked')}>Code</button>
                </a>
                <a href={item.Demo_link} className="button-link hover:text-gray-400">
                    <button onClick={() => console.log('Code Button Clicked')}>Demo</button>
                    </a>
          </div>
        </div>
      ))}
    </Slider>
  </div>
  </div>
  
    
  );
};

export default Carousel;
