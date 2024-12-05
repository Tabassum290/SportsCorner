import React from 'react';

const ExtraSection = () => {
    const imageUrl = "https://i.ibb.co.com/NNJGzY2/sports-equip-2.jpg";
    const image2 = "https://i.ibb.co.com/jVF5GGN/sports-equipment-1.jpg" ;
    const image3 = "https://i.ibb.co.com/Fm1d9HJ/sports-equip-3.jpg";
    return (
        <div className='my-8'>
           <section>
            <div className='text-center mb-4'>
                <h1 className='text-4xl font-bold text-blue-600 mb-4'> Seasonal Offers and Discounts</h1>
                <p>Gear up for the winter season with our exclusive Winter Sports Gear Sale! Whether you're hitting the slopes, hitting the trails, or gearing up for your next adventure, we've got everything you need to stay at the top of your game</p>
            </div>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6'>
           <div className="w-96 h-[400px] shadow-xl"  style={{ backgroundImage: `url(${imageUrl})`, backgroundSize: 'cover', backgroundPosition: 'center'}}>
  <div className="card-body flex justify-center items-center mt-20">
  <div className="badge badge-secondary">sale</div>
    <h2 className="card-title text-2xl text-center text-white font-bold">
    🔥 Winter Sports Gear Sale – Save Up to 50% 🔥
    </h2>
<p className='text-white'>Don't miss the sale!!!</p>
  </div>
</div>
           <div className="w-96 h-[400px] shadow-xl"  style={{ backgroundImage: `url(${image2})`, backgroundSize: 'cover', backgroundPosition: 'center'}}>
  <div className="card-body flex justify-center items-center mt-12">
  <div className="badge badge-secondary">sale</div>
    <h2 className="card-title text-center text-2xl text-blue-700 font-bold">
    🔥 Hurry! Offer Ends in [00:12:05] Hours!🔥
    </h2>
<p className='text-blue-700'>30% Off All Ski and Snowboard Equipment</p>
  </div>
</div>
           <div className="w-96 h-[400px] shadow-xl bg-orange-700">
    
  <div className="card-body flex justify-center items-center">
  <img className='h-[160px]' src="https://i.ibb.co.com/Fm1d9HJ/sports-equip-3.jpg" alt="" />
  <div className="badge badge-secondary">sale</div>
    <h2 className="card-title text-2xl text-center text-blue-900 font-bold">
    🔥 Free Shipping on Orders Over $75 with Code: FREESHIP🔥
    </h2>
<p className='text-blue-900'>Today's Flash Offer: Get 40% Off on All Snow Gear – Shop Now!</p>
  </div>
</div>
</div>
</section>
<section className='my-8 bg-blue-700 rounded-lg p-12 text-white'>
    <div className='text-center mb-4'>
<h1 className='text-4xl text-white font-bold'>🔥Updated Sporting News and Updates🔥</h1>
 </div>
 <div className='grid grid-cols-1 lg:grid-cols-2 gap-6'>
  <div>
  <h1 className='text-xl font-bold'>Exciting Updates at Our Store!</h1>
  <p>We're thrilled to announce the latest updates and additions to our sports equipment store! Whether you're an avid athlete or just getting started, we've got something for everyone.</p>
  </div>
  <div>
  <h1 className='text-xl font-bold'>New Product Arrivals:</h1>
  <p>We’ve also added some fan-favorite items to our store! These best-sellers have been carefully curated based on customer feedback, so you can trust that they’re some of the most sought-after products in the sports world. Explore our trending gear section to find out what other athletes are raving about!</p>
  </div>
  <div>
  <h1 className='text-xl font-bold'>Stay Tuned for More:</h1>
  <p>Our updates don’t stop here! We're constantly bringing in new products, exclusive collaborations, and exciting updates to keep you at the top of your game. Stay connected with us for more news and follow us on social media for updates on upcoming promotions and product launches.</p>
  </div>
  <div>
  <h1 className='text-xl font-bold'>Why Shop With Us?!</h1>
  <p>At our store, we pride ourselves on providing top-tier customer service, fast shipping, and an expansive selection of sports equipment. Whether you're buying gear for a new sport or upgrading your current setup, we're here to help you every step of the way.</p>
  </div>
 </div>
</section>
</div>
    );
};

export default ExtraSection;