import React from 'react'
import './experience.css'

export default function Experience() {
  return (
    <div className='Experience font-nunito'>
      <h2 className=' text-[30px] lg:mt-20 md:text-[35px]'> We Offer a wide range of experience across the world</h2>
      <hr className=' bg-orange-600 p-[2px] w-80 md:ml-[670px] ' />
      <div className='experience-grid'>
        <div className='experience-card bg-[url(/public/frame-17@3x.png)] bg-cover bg-no-repeat bg-[top]'><span className='text-end'>Trekking</span></div>
        <div className='experience-card bg-[url(/public/frame-16@3x.png)] bg-cover bg-no-repeat bg-[top]'><span>SkyDiving</span></div>
        <div className='experience-card bg-[url(/public/frame-18@3x.png)] bg-cover bg-no-repeat bg-[top]'><span>paragliding</span></div>
        <div className='experience-card bg-[url(/public/frame-20@3x.png)] bg-cover bg-no-repeat bg-[top]'><span>Rainforest Tours</span></div>
        <div className='experience-card bg-[url(/public/frame-19@3x.png)] bg-cover bg-no-repeat bg-[top]'><span>Tree Ziplining</span></div>
        <div className='experience-card bg-[url(/public/frame-21@3x.png)] bg-cover bg-no-repeat bg-[top]'><span>SkyDiving</span></div>
      </div>
    </div>
  )
}
