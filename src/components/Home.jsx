import { useState, useEffect } from 'react'
import React from 'react'
import HeroImage from '../assets/heroImage.svg'
import { MdOutlineKeyboardArrowRight } from 'react-icons/md'
import { Link } from 'react-scroll'

const Home = () => {
  const [loopNum, setLoopNum] = useState(0)
  const [isDeleting, setIsDeleting] = useState(false)
  const [text, setText] = useState('')
  const [delta, setDelta] = useState(300 - Math.random() * 100)
  const [index, setIndex] = useState(1)
  const toRotate = ['Front-End Developer', 'Web Developer', 'UI/UX Designer']
  const period = 2000

  useEffect(() => {
    let ticker = setInterval(() => {
      tick()
    }, delta)

    return () => clearInterval(ticker)
  }, [text])

  const tick = () => {
    let i = loopNum % toRotate.length
    let fullText = toRotate[i]
    let updatedText = isDeleting
      ? fullText.substring(0, text.length - 1)
      : fullText.substring(0, text.length + 1)

    setText(updatedText)

    if (isDeleting) {
      setDelta((prevDelta) => prevDelta / 2)
    }

    if (!isDeleting && updatedText === fullText) {
      setIsDeleting(true)
      setIndex((prevIndex) => prevIndex - 1)
      setDelta(period)
    } else if (isDeleting && updatedText === '') {
      setIsDeleting(false)
      setLoopNum(loopNum + 1)
      setIndex(1)
      setDelta(500)
    } else {
      setIndex((prevIndex) => prevIndex + 1)
    }
  }

  return (
    <div name='home' className='h-screen w-full bg-gradient-to-b from-black via-black to-gray-800 flex items-center justify-center'>
      <div className='max-w-screen-lg mx-auto grid grid-cols-1 md:grid-cols-2 items-center text-justify'>
        <div className='flex flex-col justify-center w-full px-4 mb-20'>
          <div>
            <h2 className='hidden md:block text-4xl sm:text-7xl font-bold text-white whitespace-nowrap text-center md:text-left mb-2'>
              I'm a <span className='txt-rotate'>{text}</span>
            </h2>
            <h2 className='md:hidden text-4xl sm:text-7xl font-bold text-white text-center md:text-left mb-2'>
              I'm a Front-End Developer
            </h2>
            <div className="max-w-md">
            <p className='text-gray-500 py-4 text-justify'>
  I’m a web developer passionate about learning and solving challenges. With experience in HTML, CSS, JavaScript, TypeScript, and frameworks like Tailwind and SCSS, I’ve built several projects to expand my skills. I’m eager to apply my knowledge in real-world applications and continue growing as a developer. I thrive in collaborative environments and enjoy taking on new challenges, always aiming to create user-friendly, efficient web experiences. Currently, I’m looking for opportunities where I can contribute and further develop my front-end development skills.
</p>

            </div>
          </div>
          <div>
            <Link to='portfolio' offset={-80} smooth duration={500} className='group text-white w-fit px-6 py-3 my-2 flex items-center rounded-md bg-gradient-to-r from-cyan-500 to-blue-500 cursor-pointer'>
              Portfolio
              <span className='group-hover:rotate-90 duration-300'>
                <MdOutlineKeyboardArrowRight size={25} className='ml-1' />
              </span>
            </Link>
          </div>
        </div>
        <div className='justify-center w-full hidden md:flex'>
          <img src={HeroImage} alt='My profile picture' className='rounded-2xl w-2/3 md:w-2/3 animate-updown' />
        </div>
      </div>
      <style jsx>{`
        @keyframes updown {
          0% {
            transform: translateY(-20px);
          }
          50% {
            transform: translateY(20px);
          }
          100% {
            transform: translateY(-20px);
          }
        }
        .animate-updown {
          animation: updown 3s linear infinite;
        }
        .txt-rotate > .wrap {
          border-right: 0.08em solid #666;
        }
      `}</style>
    </div>
  )
}

export default Home
