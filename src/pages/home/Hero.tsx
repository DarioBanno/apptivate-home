import { useEffect, useState } from "react"

import image from "@/assets/apps-preview.png"


const Hero = () => {
  const [index, setIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false)
  const [text, setText] = useState('')
  const typingWords = [
    'restaurant',
    'grocery store',
    'pharmacy',
    'flower shop',
    'electronic store',
    'hair salon',
    'home services',
    'laundry shop',
    'catering',
    'local market'
  ]

  function handleGetStartedPressed() {
    window.location.href = "https://www.apptizer.app"
  }

  useEffect(() => {
    const word = typingWords[index % typingWords.length]
    const timeout = setTimeout(() => {
      setText(prev => {
        if (isDeleting) {
          return prev.slice(0, -1);
        } else {
          return word?.slice(0, prev.length + 1) ?? ''
        }
      })

      if (!isDeleting && text === word) {
        setTimeout(() => setIsDeleting(true), 1500);
      } else if (isDeleting && text === '') {
        setIsDeleting(false);
        setIndex(prev => prev + 1)
      }
    }, isDeleting ? 50 : 100)

    return () => clearTimeout(timeout)
  }, [text, isDeleting, index])


  return (
    <section
      id="hero"
      className="flex flex-col items-center bg-neutral-100 py-12"
    >
      {/* <div className="px-6 sm:px-12 lg:px-16 max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 items-center"> */}
      <div className="px-6 sm:px-12 lg:px-16 max-w-7xl mx-auto items-center">

        {/* <div className="mt-12 lg:order-1 lg:col-span-8 text-center"> */}
        <div className="text-center">
          <h1 className="text-4xl sm:text-5xl lg:text-6xl tracking-wide leading-tight">
            Branded apps
            <br />
            for your
            <br />
            <span className="bg-gradient-to-r from-primary-400 to-primary-600 text-transparent bg-clip-text">
              {" "}
              {text}|
            </span>
          </h1>

          <p className="mt-10 text-lg text-neutral-500 max-w-4xl">
            Your own mobile and web ordering apps for delivery, loyalty, bookings and much more.
          </p>

          <div className="py-12">
            <button
              type="submit"
              className="bg-primary text-white px-8 py-4 font-bold rounded-full hover:bg-primary-400 transition cursor-pointer"
              onClick={handleGetStartedPressed}
            >
              Get Started
            </button>
          </div>

          <img src={image} className="md:max-w-3xl" />
        </div>
        {/* 
        <div className="lg:order-2 lg:col-span-4">
          <img
            src={image}
            alt="Restaurant Preview"
            className="lg:h-160"
          />
        </div>
*/}

        {/*       
      <div className="flex justify-center my-10">
        <a
          href="#"
          className="bg-gradient-to-r from-primary-400 to-primary-600 py-3 px-4 mx-3 rounded-md text-white"
        >
          Start for free
        </a>
        <a href="#" className="py-3 px-4 mx-3 rounded-md border">
          Book demo
        </a>
      </div>
*/}

        {/* 
      <div className="flex mt-10 justify-center">
        <video
          autoPlay
          loop
          muted
          className="rounded-lg w-1/2 border border-primary-700 shadow-sm shadow-primary-400 mx-2 my-4"
        >
          <source src={video1} type="video/mp4" />
          Your browser does not support the video tag.
        </video>
        <video
          autoPlay
          loop
          muted
          className="rounded-lg w-1/2 border border-primary-700 shadow-sm shadow-primary-400 mx-2 my-4"
        >
          <source src={video2} type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      </div>
*/}
      </div>

    </section>
  )
}

export default Hero
