import React, { useEffect } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css'; 
import AOS from 'aos'; 
import 'aos/dist/aos.css';
import { AiOutlineArrowRight } from 'react-icons/ai';
const Banner = () => {
    useEffect(() => {
        AOS.init({
            duration: 1500,
            once: true, 
        });
    }, []);

    return (
        <div className="banner">
            <Swiper
                spaceBetween={30}
                slidesPerView={1}
                loop={true}  
                autoplay={{
                    delay: 3000,
                    disableOnInteraction: false,
                }}
                className="mySwiper"
            >
                <SwiperSlide>
                    <div id="slide-1" data-aos="fade-up" className="flex justify-around h-64 bg-blue-700 text-white p-8 rounded-lg ">
                       <img className='lg:w-[500px] w-1/3 object-cover rounded-lg' src="https://i.ibb.co.com/NNJGzY2/sports-equip-2.jpg" alt="" />
                       <div className='flex flex-col items-center justify-center'>
                       <h2 className="text-3xl font-bold text-white">Welcome to Our Website</h2>
                       <p className="mt-4">Discover amazing content and connect with the community.</p>
                       </div>
                       <div className='flex justify-center items-center my-20'>
                        <a className='text-2xl slide' href="#slide-2"><AiOutlineArrowRight/></a>
                     </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div id="slide-2" data-aos="fade-up" className="flex justify-around h-64 bg-blue-700 text-white p-8 rounded-lg ">
                        <img className='lg:w-[400px] w-1/3 object-cover rounded-lg' src="https://i.ibb.co.com/jVF5GGN/sports-equipment-1.jpg" alt="" />
                        <div className='flex flex-col justify-center'>
                    <h2 className="text-3xl font-bold">Join Our Platform</h2>
                    <p className="mt-4">Sign up today and start your journey with us.</p>
                    </div>
                  <div className='flex justify-center items-center my-20'>
                        <a className='text-2xl slide' href="#slide-3"><AiOutlineArrowRight/></a>
                     </div>
                     </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div id="slide-3" data-aos="fade-up" className="flex justify-around h-64 bg-blue-700 text-white p-8 rounded-lg">
                      <img className='lg:w-[400px] w-1/3 rounded-lg' src="https://i.ibb.co.com/Fm1d9HJ/sports-equip-3.jpg" alt="" />
                      <div className='flex flex-col justify-center'>
                    <h2 className="text-3xl font-bold">Stay Connected</h2>
                    <p className="mt-4">Follow us on social media for the latest updates.</p>
                    </div>
                      <div>
                        <div className='flex justify-center items-center my-20'>
                        <a className='text-2xl slide' href="#slide-1"><AiOutlineArrowRight/></a>
                        </div>
                    
                    </div>
                    </div>
                    
                    
                </SwiperSlide>
            </Swiper>
  
        </div>
    );
};

export default Banner;     