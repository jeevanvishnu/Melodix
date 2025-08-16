import React from 'react'
import grilHeadphone from "../assets/girl-headphone.jpg"
import LogoText from '../components/LogoText'
import { CiSearch } from "react-icons/ci";
import Section from "../components/Section"
const Home = () => {
  return (
    <div className='min-h-screen bg-gray-700'>
        <div className="bg-gray-900 min-h-screen text-white">
  {/* Navbar */}
  <header className="absolute top-0 left-0 w-full z-20 flex items-center justify-between px-10 py-6">
    <LogoText/>

    <nav className="flex items-center space-x-8">
      {/* Search box */}
      <div className="relative">
        <CiSearch className="absolute top-3 left-3 text-gray-400" />
        <input
          type="text"
          placeholder="Search For Music, Artists, ..."
          className="pl-10 pr-4 py-2 w-72 rounded-md bg-gray-800 text-gray-300 outline-none"
        />
      </div>

      {/* Nav links */}
      <a href="#" className="hover:text-pink-500">About Us</a>
      <a href="#" className="hover:text-pink-500">Contact</a>
      <a href="#" className="hover:text-pink-500">Wish</a>

      {/* Buttons */}
      <button className="px-4 py-2 border border-pink-500 rounded hover:bg-pink-500 hover:text-white">
        Login
      </button>
      
    </nav>
  </header>

  {/* Hero Section */}
  <section
    style={{ backgroundImage: `url(${grilHeadphone})` }}
    className="relative bg-cover bg-center h-screen flex items-center"
  >
    {/* Overlay for dark effect */}
    <div className="absolute inset-0 bg-black/60"></div>

    <div className="relative z-10 container mx-auto flex items-center justify-between px-10">
      {/* Left Text */}
      <div className="max-w-xl">
        <h1 className="text-5xl font-extrabold leading-tight mb-6">
          All the <span className="text-pink-500">Best Songs</span><br /> in One Place
        </h1>
        <p className="text-gray-300 mb-8">
          On our website, you can access an amazing collection of popular and new songs. 
          Stream your favorite tracks in high quality and enjoy without interruptions. 
          Whatever your taste in music, we have it all for you!
        </p>
        <div className="flex space-x-4">
          <button className="px-6 py-3 bg-pink-600 rounded-lg font-semibold hover:bg-pink-700">
            Discover Now
          </button>
          <button className="px-6 py-3 border border-blue-500 text-blue-500 rounded-lg font-semibold hover:bg-blue-600 hover:text-white">
            Create Playlist
          </button>
        </div>
      </div>
    </div>
  </section>
</div>
    <Section/>
    <Section/>
    </div>
  )
}

export default Home
