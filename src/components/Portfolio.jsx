import React from 'react';
import evelicious from '../assets/portfolio/evelicious.png';
import authentification from '../assets/portfolio/authentification.png';
import purrfect from '../assets/portfolio/purrfect.png';

const Portfolio = () => {
    const portfolios = [
        {
            id: 1,
            src: evelicious,
            demo: 'https://anileve23.github.io/learning-scss/',
            code: 'https://github.com/anileve23/learning-scss'
        },
        {
            id: 2,
            src: authentification,
            demo: 'https://anileve23.github.io/my-authentification/#/login',
            code: 'https://github.com/anileve23/my-authentification'
        },
        {
            id: 3,
            src: purrfect,
            demo: 'https://anileve23.github.io/Purrfect-Adoptions/html/home.html',
            code: 'https://github.com/anileve23/Purrfect-Adoptions'
        },
    ];

    return (
        <div name='portfolio' className='bg-gradient-to-b from-black to-gray-800 w-full text-white p-4'>
            <div className='max-w-screen-lg p-4 mx-auto flex flex-col w-full h-full'>
                <div className='pb-8'>
                    <p className='text-4xl font-bold inline border-b-4 border-gray-500'>Portfolio</p>
                    <p className='py-6 '>Check out some of my work right here</p>
                </div>

                <div className='grid sm:grid-cols-2 md:grid-cols-3 gap-4 px-12 sm:px-0 justify-center'>
                    {portfolios.map(({ id, src, demo, code }) => (
                        <div key={id} className='shadow-md shadow-gray-600 rounded-lg'>
                            <img src={src} alt='' className='rounded-md duration-200 hover:scale-105' />
                            <div className='flex items-center justify-center'>
                                <button onClick={() => window.open(demo, '_blank')} className='w-1/2 px-6 py-3 m-4 duration-200 hover:scale-105'>Demo</button>
                                <button onClick={() => window.open(code, '_blank')} className='w-1/2 px-6 py-3 m-4 duration-200 hover:scale-105'>Code</button>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Portfolio;
