import github from '../assets/github.png';
import linkedin from '../assets/linkedin.png';

function Footer() {
  return (
    <footer className='w-full bg-charcoal-light'>
      <div className='container text-center mx-auto px-6 py-16 text-gray-400'>
        <div className='text-md'>
          Designed &amp; created by myself using XD, React, Typescript and
          Tailwind
          <br />
        </div>
        <div className='mt-8 text-xs'>
          Check out my linkedin and github profiles to learn more about me
        </div>
        <div className='flex items-center justify-center space-x-6 mt-8'>
          <a
            href='https://www.linkedin.com/in/ross-logan-nz/'
            rel='noreferrer'
            target='_blank'
            className='opacity-50 hover:opacity-100'
          >
            <img src={linkedin} alt='LinkedIn' className='h-12 ' />
          </a>
          <a
            href='https://github.com/rosc0'
            rel='noreferrer'
            target='_blank'
            className='opacity-50 hover:opacity-100'
          >
            <img src={github} alt='GitHub' className='h-10 ' />
          </a>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
