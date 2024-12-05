import React, { useEffect } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css'; 
import AOS from 'aos'; 
import 'aos/dist/aos.css';
const Banner = () => {
    const imageUrl = "https://i.ibb.co.com/NNJGzY2/sports-equip-2.jpg"; 
    useEffect(() => {
        AOS.init({
            duration: 1500, // Animation duration
            once: true,     // Only animate once
        });
    }, []);

    return (
        <div className="banner">
            <Swiper
                spaceBetween={30} // Space between slides
                slidesPerView={1} // Show one slide at a time
                loop={true}       // Enable infinite loop
                autoplay={{
                    delay: 3000,  // Slide delay in ms
                    disableOnInteraction: false, // Keep autoplay running after interaction
                }}
                className="mySwiper"
            >
                {/* Slide 1 */}
                <SwiperSlide>
                    <div data-aos="fade-up" className="flex flex-col items-center justify-center h-64  text-white p-8 rounded-lg"  style={{ backgroundImage: `url(${imageUrl})`, backgroundSize: 'cover', backgroundPosition: 'center' }}>
                        <h2 className="text-3xl font-bold text-blue-900">Welcome to Our Website</h2>
                        <p className="mt-4">Discover amazing content and connect with the community.</p>
                    </div>
                </SwiperSlide>

                {/* Slide 2 */}
                <SwiperSlide>
                    <div data-aos="fade-up" className="flex justify-between h-64 bg-green-500 text-white p-8 rounded-lg">
                    <div className='flex flex-col justify-center'>
                    <h2 className="text-3xl font-bold">Join Our Platform</h2>
                    <p className="mt-4">Sign up today and start your journey with us.</p>
                    </div>
                        <img className='lg:w-[600px] w-1/3 object-cover' src="https://i.ibb.co.com/jVF5GGN/sports-equipment-1.jpg" alt="" />
                    </div>
                </SwiperSlide>

                {/* Slide 3 */}
                <SwiperSlide>
                    <div data-aos="fade-up" className="flex justify-between h-64 bg-red-500 text-white p-8 rounded-lg">
                    <div className='flex flex-col justify-center'>
                    <h2 className="text-3xl font-bold">Stay Connected</h2>
                    <p className="mt-4">Follow us on social media for the latest updates.</p>
                    </div>
                      <img className='lg:w-[600px] w-1/3' src="https://i.ibb.co.com/Fm1d9HJ/sports-equip-3.jpg" alt="" />
                    </div>
                </SwiperSlide>
            </Swiper>
  
        </div>
    );
};

export default Banner;     