import { useState, FC, RefObject } from 'react';
import { useForm } from 'react-hook-form';

import Title from '../Title';

type ContactProps = {
  contactRef: RefObject<HTMLDivElement>;
};

const Contact: FC<ContactProps> = ({ contactRef }) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm();

  const [sendSuccess, setSendSuccess] = useState(false);
  const [sendError, setSendError] = useState(false);

  const onSubmit = async (data: any): Promise<void> => {
    if (data.name !== '' && data.email !== '' && data.message !== '') {
      try {
        const sendMail = await fetch('/', {
          method: 'POST',
          headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
          body: new URLSearchParams(data).toString(),
        });
        if (sendMail.ok) {
          setSendSuccess(true);
          setSendError(false);
          reset();
          setTimeout(() => {
            setSendSuccess(false);
          }, 3500);
        }
      } catch (error) {
        setSendError(true);
        setSendSuccess(false);
      }
    }
  };

  return (
    <article ref={contactRef} className='mt-16 mb-12 lg:mt-36 lg:mb-20'>
      <Title text='Contact' />
      <div>
        <form
          onSubmit={handleSubmit(onSubmit)}
          className='mt-16 mx-auto max-w-screen-md w-full'
        >
          <input {...register('form-name')} type='hidden' value='contact' />

          <input
            type='text'
            {...register('name', { required: true })}
            placeholder='Name'
            className='bg-charcoal-light autofill:bg-yellow-200 appearance-none border-b-4 border-sky-500 border-opacity-20 w-full p-4 text-gray-200 focus:outline-none focus:border-opacity-100'
          />
          <p
            className={`text-sm text-rose-500 py-2	${
              errors.name ? 'visible' : 'invisible'
            }`}
          >
            You must enter a name
          </p>

          <input
            type='email'
            placeholder='Email'
            {...register('email', { pattern: /\S+@\S+\.\S+/, required: true })}
            className='bg-charcoal-light appearance-none border-b-4 border-sky-500 border-opacity-20 w-full p-4 text-gray-200 focus:outline-none focus:border-opacity-100'
          />
          <p
            className={`text-sm text-rose-500 py-2	${
              errors.email ? 'visible' : 'invisible'
            }`}
          >
            You must enter a valid email
          </p>

          <textarea
            cols={30}
            rows={5}
            placeholder='Message'
            {...register('message', { required: true })}
            className='bg-charcoal-light resize-none appearance-none border-b-4 border-sky-500 border-opacity-20 w-full p-4 text-gray-200 focus:outline-none focus:border-opacity-100'
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
              className='shadow bg-sky-700 hover:bg-sky-500 focus:shadow-outline focus:outline-none text-white font-bold py-4 px-24'
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
  );
};

export default Contact;
