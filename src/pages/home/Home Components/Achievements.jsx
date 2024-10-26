import React from 'react';
import Campus from '../../../assets/cvru_campus.jpg'
    const Achievements = () => {
    return (
        <div className='flex justify-center'> 
        <section className="bg-white border rounded-xl shadow-md mt-4 w-[98%] py-10 px-6">
            <h2 className="text-3xl sm:text-4xl font-semibold text-gray-950 text-center mb-3 ">Achievements</h2>
            <p className='text-base text-gray-700 sm:ml-6 mt-4 sm:mt-0 text-center mb-8'>Renowned for academic excellence, innovative research, and a vibrant campus life, fostering holistic development and producing industry-ready professionals.</p>
            <div className='flex justify-center'>
            <div className="bg-gray-800 sm:w-[99%] w-full text-white flex justify-center rounded-lg shadow-lg sm:p-6 p-3 transition-transform transform">
                <img 
                    src={Campus} 
                    alt="Best School Image" 
                    className="w-full h-auto object-scale-down rounded-none rounded-l-lg" 
                />
            </div>
            </div>
            <div className="text-center mt-8">
                <button className="bg-gray-900 text-white py-3 px-10 text-lg rounded-full hover:bg-gray-700 transition">
                    View Achievements
                </button>
            </div>
        </section>
        </div>
  )
}
export default Achievements;