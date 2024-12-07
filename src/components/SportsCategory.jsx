import { DotLottieReact } from '@lottiefiles/dotlottie-react';


const SportsCategory = () => {

    return (
        <div>
            <div className='lg:flex md:flex justify-center items-center'>
              <h1 className='lg:text-3xl text-2xl  add text-center font-bold mt-6 text-blue-500'>Our Sports Equipments</h1>
        <div className='flex justify-center items-center'>
<DotLottieReact
className='lg:h-[60px] lg:w-[120px] w-[50px] h-[40px]'
      src="https://lottie.host/d41e40b4-cc5b-413e-a072-a3cb4f26a020/XgyTJ0qhwN.lottie"
      loop
      autoplay
    />
</div>
</div>
<p className="text-lg text-gray-600 text-center my-4">
            Check out our latest sports equipment! Designed to boost your performance and keep you ahead in your game.
          </p>
<section className='lg:w-2/3 mx-auto my-6 grid grid-cols-2 lg:grid-cols-4 md:grid-cols-4 gap-6'>
    <div >
    <button className='btn bg-blue-300 border-2 border-blue-900  rounded-3xl p-4 text-white px-16'>Cricket</button>
    </div>
    <div >
    <button className='btn bg-blue-300 border-2 border-blue-900  rounded-3xl p-4 text-white px-16'>Football</button>
    </div>
    <div >
    <button className='btn bg-blue-300 border-2 border-blue-900  rounded-3xl p-4 text-white px-16'>Tennis</button>
    </div>
    <div >
    <button className='btn bg-blue-300 border-2 border-blue-900  rounded-3xl p-4 text-white px-16'>BasketBall</button>
    </div>
    <div>
    </div>
</section>
 </div>
    );
};

export default SportsCategory;