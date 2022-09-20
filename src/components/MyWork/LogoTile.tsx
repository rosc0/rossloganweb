import { FC } from 'react';

type LogoTileProps = {
  imageUrl: string;
  title: string;
  description: string;
  builtWithText: string;
  link?: string;
  linkText?: string;
};

const LogoTile: FC<LogoTileProps> = ({
  imageUrl,
  title,
  description,
  builtWithText,
  link,
  linkText,
}) => {
  return (
    <div className='pb-8'>
      <div className='w-full h-full bg-charcoal-light text-gray-300'>
        <div className='sm:flex'>
          <img src={imageUrl} alt={title} className='w-auto h-36 m-auto sm:m-0' />
          <div className='pl-0 text-center sm:text-left sm:pl-8'>
            <h3 className='text-xl mt-4 sm:mt-0'>{title}</h3>
            <p className='mt-2 text-sm'>{description}</p>
            <p className='mt-2 text-sm text-gray-400'>Built with: {builtWithText}</p>
            {link && linkText && (
              <p className='mt-2 text-sm'>
                <a
                  href={link}
                  target='_blank'
                  rel='noreferrer'
                  className='text-sky-300'
                >
                  {linkText}
                </a>
              </p>
            )}
          </div>          
        </div>
      </div>
    </div>
  );
};

export default LogoTile;
