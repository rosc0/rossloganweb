import { useState } from 'react'

import Title from '../Title'

interface ContactProps {
  contactRef: React.RefObject<HTMLDivElement>
}

function Contact({ contactRef }: ContactProps) {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  })
  const { name, email, message } = formData

  const [sendError, setSendError] = useState(false)

  const handleChange = (
    e:
      | React.ChangeEvent<HTMLInputElement>
      | React.ChangeEvent<HTMLTextAreaElement>
  ) => {
    setFormData((prevState) => ({
      ...prevState,
      [e.target.id]: e.target.value,
    }))
  }

  const isFormValid = () => {

    // check if all fields are filled

    // check email is valid

    return true
  }

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()

    setSendError(false)

    const formValid =  isFormValid()

    if (formValid) {
      fetch('/', {
        method: 'POST',
        headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
        body: new URLSearchParams(formData).toString(),
      })
      .then(() => {
  
      })
      .catch((error) => {
        setSendError(true)
      })
    }
    
  }

  return (
    <article ref={contactRef} className='mt-16 mb-12 lg:mt-36 lg:mb-20'>
      <Title text='Contact' />
      <div className='text-white'>
        <p className='text-center'>
          Let me know how I can help you by filling in the form below. I will
          get back to you as soon as possible.
        </p>

        <form
          name='contact'
          data-netlify='true'
          onSubmit={(e) => handleSubmit(e)}
          className='mt-16 mx-auto max-w-screen-sm w-full'
        >
          <div className='mb-6'>
            <div>
              <label className='block text-gray-300 mb-2' htmlFor='name'>
                Name
              </label>
            </div>
            <div>
              <input
                type='text'
                id='name'
                value={name}
                onChange={handleChange}
                className='bg-gray-200 appearance-none border-4 border-sky-500 border-opacity-20 rounded w-full p-3 text-gray-700 focus:outline-none focus:border-opacity-100'
              />
            </div>
          </div>

          <div className='mb-6'>
            <div>
              <label className='block text-gray-300 mb-2' htmlFor='name'>
                Email
              </label>
            </div>
            <div>
              <input
                type='email'
                id='email'
                value={email}
                onChange={handleChange}
                className='bg-gray-200 appearance-none border-4 border-sky-500 border-opacity-20 rounded w-full p-3 text-gray-700 focus:outline-none focus:border-opacity-100'
              />
            </div>
          </div>

          <div className='mb-6'>
            <div>
              <label className='block text-gray-300 mb-2' htmlFor='name'>
                Message
              </label>
            </div>
            <div>
              <textarea
                cols={30}
                rows={5}
                name='message'
                id='message'
                value={message}
                onChange={handleChange}
                className='bg-gray-200 appearance-none border-4 border-sky-500 border-opacity-20 rounded w-full p-3 text-gray-700 focus:outline-none focus:border-opacity-100'
              ></textarea>
            </div>
          </div>

          <div className='flex items-center mb-6'>
            <button
              type='submit'
              className='shadow bg-sky-500 hover:bg-sky-400 focus:shadow-outline focus:outline-none text-white font-bold py-4 px-8 rounded'
            >
              Send
            </button>
            {sendError && <div className='flex-1 pl-8'>Sorry, Cannot send message.</div>}
          </div>
        </form>
      </div>
    </article>
  )
}

export default Contact
