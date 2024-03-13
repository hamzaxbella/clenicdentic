import React from 'react'

export const Map = () => {
  return (
    <section className='max-container padding-x lg:px-0 padding'>
      <iframe className='w-full rounded-2xl h-[500px] outline-none' src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d47517.630080651295!2d-87.71854124736804!3d41.89604247723448!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x880fd2efe4c6adab%3A0xf5eddc23d8820b8b!2sAmerican%20Dental!5e0!3m2!1sen!2sma!4v1709727122364!5m2!1sen!2sma" width="600" height="450" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
    </section>
  )
}
