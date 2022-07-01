import { useState } from 'react'
import { useForm } from 'react-hook-form'

import Title from '../Title'

interface ContactProps {
  contactRef: React.RefObject<HTMLDivElement>
}

function Contact({ contactRef }: ContactProps) {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm()

  const [sendSuccess, setSendSuccess] = useState(false)
  const [sendError, setSendError] = useState(false)

  const onSubmit = async (data: any) => {
    if (data.name !== '' && data.email !== '' && data.message !== '') {
      try {
        const sendMail = await fetch('/', {
          method: 'POST',
          headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
          body: new URLSearchParams(data).toString(),
        })

        if (sendMail.ok) {
          setSendSuccess(true)
          setSendError(false)
        }
      } catch (error) {
        setSendError(true)
        setSendSuccess(false)
      }
    } else {
      setSendError(true)
      setSendSuccess(false)
    }
  }

  return (
    <article ref={contactRef} className='mt-16 mb-12 lg:mt-36 lg:mb-20'>
      <Title text='Contact' />
      <div>
        <form onSubmit={handleSubmit(onSubmit)} className='mt-16 mx-auto max-w-screen-sm w-full'>

          <input {...register('form-name')} type='hidden' value='contact' />

          <div>
            <label className='block text-gray-300 mb-2' htmlFor='name'>
              Name
            </label>
          </div>
          <input
            id='name'
            type='text'
            {...register('name', { required: true })}
            className='bg-gray-200 appearance-none border-4 border-sky-500 border-opacity-20 rounded w-full p-3 text-gray-700 focus:outline-none focus:border-opacity-100'
          />
          <p
            className={`text-sm text-rose-500 py-2	${
              errors.name ? 'visible' : 'invisible'
            }`}
          >
            You must enter a name
          </p>

          <div>
            <label className='block text-gray-300 mb-2' htmlFor='name'>
              Email
            </label>
          </div>
          <input
            id='email'
            type='email'
            {...register('email', { pattern: /\S+@\S+\.\S+/, required: true })}
            className='bg-gray-200 appearance-none border-4 border-sky-500 border-opacity-20 rounded w-full p-3 text-gray-700 focus:outline-none focus:border-opacity-100'
          />
          <p
            className={`text-sm text-rose-500 py-2	${
              errors.email ? 'visible' : 'invisible'
            }`}
          >
            You must enter a valid email
          </p>

          <div>
            <label className='block text-gray-300 mb-2' htmlFor='name'>
              Message
            </label>
          </div>
          <textarea
            cols={30}
            rows={5}
            id='message'
            {...register('message', { required: true })}
            className='bg-gray-200 appearance-none border-4 border-sky-500 border-opacity-20 rounded w-full p-3 text-gray-700 focus:outline-none focus:border-opacity-100'
          ></textarea>
          <p
            className={`text-sm text-rose-500 pb-4	${
              errors.message ? 'visible' : 'invisible'
            }`}
          >
            You must enter a message
          </p>

          <div className='flex items-center mb-6'>
            <button
              type='submit'
              className='shadow bg-sky-500 hover:bg-sky-400 focus:shadow-outline focus:outline-none text-white font-bold py-4 px-8 rounded'
            >
              Send
            </button>
            {sendError && (
              <div className='flex-1 pl-8 text-rose-500'>
                Error sending message
              </div>
            )}
            {sendSuccess && (
              <div className='flex-1 pl-8 text-emerald-500'>
                Message was successfully sent
              </div>
            )}
          </div>
        </form>
      </div>
    </article>
  )
}

export default Contact
