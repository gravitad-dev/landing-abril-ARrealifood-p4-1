import data from '../../data.json';

// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';

// import required modules
import { Autoplay, Pagination } from 'swiper/modules';

const Hero = () => {
  const { text, desc, img } = data['section-one'];

  return (
    <section id='home' className='bg-custom-silver pt-[150px] h-screen'>
      <div className='flex  flex-col gap-[40px] md:flex-row md:items-center md:justify-around '>
        {/* text */}
        <div className='flex flex-col gap-4 text-center lg:text-left '>
          <h1 className='title text-balance max-w-[600px]'>
            {text.black} <span className='text-custom-green'>{text.green}</span>
          </h1>
          <p className='text-[14px] md:text-[16px] text-custom-grey max-w-[700px]'>
            {desc}
          </p>
        </div>
        {/* img */}
        <img
          src={img.url}
          alt={img.alt}
          className='object-contain max-w-[600px] aspect-square'
        />
      </div>
    </section>
  );
};
export default Hero;
