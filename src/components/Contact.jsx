import React from 'react';

const ContactPage = () => {
  return (
    <div className='container mx-auto p-8 w-[30rem]'>
      <h1 className='text-3xl font-bold mb-6 text-center'>Contact Us</h1>
      <form className='space-y-6 w-full'>
        {/* Name field */}
        <div className='w-full'>
          <label className='block text-gray-700 font-bold' htmlFor='name'>
            Name
          </label>
          <input
            type='text'
            id='name'
            name='name'
            className='border rounded-lg w-full p-3'
          />
        </div>

        {/* Email field */}
        <div className='w-full'>
          <label className='block text-gray-700 font-bold' htmlFor='email'>
            Email
          </label>
          <input
            type='email'
            id='email'
            name='email'
            className='border rounded-lg w-full p-3'
          />
        </div>

        {/* Subject field */}
        <div className='w-full'>
          <label className='block text-gray-700 font-bold' htmlFor='subject'>
            Subject
          </label>
          <input
            type='text'
            id='subject'
            name='subject'
            className='border rounded-lg w-full p-3'
          />
        </div>

        {/* Message field */}
        <div className='w-full'>
          <label className='block text-gray-700 font-bold' htmlFor='message'>
            Message
          </label>
          <textarea
            id='message'
            name='message'
            rows='4'
            className='border rounded-lg w-full p-3'
          ></textarea>
        </div>

        {/* Submit button */}
        <button
          type='submit'
          className='bg-blue-500 text-white font-bold py-2 px-4 rounded-lg hover:bg-blue-600 w-full md:w-auto'
        >
          Send
        </button>
      </form>
    </div>
  );
};

export default ContactPage;
