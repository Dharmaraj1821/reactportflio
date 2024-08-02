import React from 'react'
import todolistImg from '../assets/todolistImg.png';
import workouttrackerImg from'../assets/workouttrackerImg.png';
import blogImg from '../assets/blogImg.png';


export const Project = () => {
  return (
    <section className='py-5 pg-secondary' id="project">
        <div className='relative z-40'>
            <div className='absolute inset-0 flex items-center'>
            <div className='border border-y-purple-300 w-9/12 mx-auto'></div>
            </div>
            <div className='flex justify-center relative'>
            <div className='font-cinzel text-primary text-2xl bg-white px-5 font-bold rounded-full border  border-y-purple-300 '>Projects</div>
            </div>
        </div>
        <div className='w-5/6 px-10 py-5 mx-auto grid md:grid-cols-3 gap-10 z-0'>
            <div className='project-list'><img className='' src={todolistImg}/><span className='text-center p-3'>To do list Software </span></div>
            <div className='project-list'><img src={workouttrackerImg}/><span className='text-center p-3'>work out tracker Software</span></div>
            <div className='project-list'><img src={blogImg}/><span className='text-center p-3'>blog project Software</span></div>
           </div>
    </section>
  )
}
