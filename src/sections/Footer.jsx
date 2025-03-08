import React from 'react'
import { BaseFooterLinks, SecondaryPages, socialMedia } from '../constants'
import { Link } from 'react-router-dom'
import { banner } from '../assets/icons'

export const Footer = () => {
  return (
    <section className='bg-green-dark lg:h-[90vh]  flex flex-col justify-around overflow-hidden'>
      <section className="padding padding-x lg:px-0 justify-between flex flex-wrap max-container gap-24">
        <div className=''>
        <h1 className=" w-fit relative text-3xl  before:h-2 before:w-full before:absolute before:-bottom-0 before:bg-gradient-to-r before:from-green-secondary before:to-shiny-green text-white-smoke lg:text-3xl lg:before:-bottom-2">
          Pages de base.
        </h1>
        <ul className='flex flex-col py-8 gap-2'>
        {BaseFooterLinks.map((link) => (
          <Link to={link.ref} className='hover:underline text-gray-300' key={link.label}> {link.label} </Link>
        ))}
        </ul>
        </div>

        <div className="">
        <h1 className=" w-fit relative text-3xl  before:h-2 before:w-full before:absolute before:-bottom-0 before:bg-gradient-to-r before:from-green-secondary before:to-shiny-green text-white-smoke lg:text-3xl lg:before:-bottom-2">
          Autre pages.
        </h1>
          <ul className='flex flex-col py-8 gap-2'>
            {SecondaryPages.map((link) => (
              <Link to={link.ref} className='hover:underline text-gray-300' key={link.label}>{link.label}</Link>
            ))}
          </ul>
        </div>
        <div className='flex flex-col gap-4'>
          <div className='w-[350px] h-[170px]'>
          <img src={banner} loading="lazy" className='w-full h-full object-cover' alt="banner logo" />

          </div>
          <div className="flex gap-4">
            {socialMedia.map((icon) => ( 
              <a href={icon.href} key={icon.href}><img src={icon.icon} width={40}/> </a>
            ))}
          </div>
        </div>
      </section>
      <div className='text-center py-4'>
        <h2 className=' lg:text-xl font-light text-white'>All content © 2024 Maroc Dentaire. All rights reserved. </h2>
        <p className='text-gray-300  text-sm '>Web design by <a href={'https://www.instagram.com/hamzaxbella/'} target='_blank' className='text-primary hover:underline'>zyllux digital </a></p>
      </div>
    </section>
  )
}
