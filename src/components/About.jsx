import React from 'react'

const About = () => {
  return (
    <div name='about' className='bg-gradient-to-b from-gray-800 to-black w-full text-white p-4'>
      <div className='max-w-screen-lg p-4 mx-auto flex flex-col w-full h-full'>
          <div className='pb-8'>
            <p className='text-4xl font-bold inline border-b-4 border-gray-500'>
                About
            </p>
            <p className='text-xl mt-10 text-justify'>
                I come from a family of programmers, so you could say coding runs in my blood! However, my real inspiration comes from my passion for learning—exploring new technologies and solving challenges excites me. Once I started programming, I knew it was something I wanted to pursue.
            </p>
            <p className='text-xl mt-4 text-justify'>
                Right now, I’m focused on becoming a web developer. I have experience with HTML, CSS, JavaScript, TypeScript, and frameworks like Tailwind and SCSS. While I’ve built projects for my own learning, I’m eager to apply my skills to real-world applications. In just two weeks, I created three websites, constantly pushing myself to grow and improve.
            </p>
            <p className='text-xl mt-4 text-justify'>
                One of my biggest strengths is adaptability. I’m always willing to learn and take on new challenges, whether independently or as part of a team. I thrive in friendly, positive environments where mentorship and collaboration drive growth. At the same time, I enjoy taking initiative and helping teammates when I can.
            </p>
            <p className='text-xl mt-4 text-justify'>
                Beyond coding, I enjoy reading (mostly romance novels) and playing logic-based games like chess, Sudoku, and Tetris. I’m also fascinated by AI and hope to explore how it can improve people’s everyday lives. My ultimate goal is to create technology that makes life easier and more efficient for others.
            </p>
            <p className='text-xl mt-4 text-justify'>
                Let’s build something amazing together! 🚀
            </p>
          </div>
      </div>
    </div>
  )
}

export default About
