import React from 'react'
import ImageSlide from './ImageSlide'

const Testimonial = () => {
  return (
    <div id='testimonial' className='flex flex-col md:flex-row items-center justify-between p-10 md:p-8 gap-10 ml-20'>
      {/* Text Section */}
      <div className='text-center md:text-left md:w-1/2'>
        <h1 className='text-3xl font-bold mb-24'>Testimonial</h1> {/* Adjusted vertical gap */}
        <p className='mt-4'> {/* Gap between h1 and p */}
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Quam 
          ab necessitatibus aut sunt beatae atque porro, exercitationem eligendi 
          esse debitis eius commodi tempore odit nihil quis error blanditiis in dolores. 
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Non cum nihil ex, 
          ipsa ea adipisci totam quae rem dignissimos perferendis fuga aspernatur 
          cum necessitatibus aut et labore vitae laboriosam commodi quo nemo odit quaerat at, 
          tempora inventore assumenda magni? Beatae, expedita repellendus.
        </p>
      </div>

      {/* Image Slider Section */}
      <div className='md:w-1/2 p-6 ml-10'>
        <ImageSlide />
      </div>
    </div>
  )
}

export default Testimonial