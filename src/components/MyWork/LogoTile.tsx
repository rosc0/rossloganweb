interface LogoTileInterface {
  imageUrl: any
  title: string
  description: string
  link?: string
  linkText?: string
}

const LogoTile = ({
  imageUrl,
  title,
  description,
  link,
  linkText,
}: LogoTileInterface) => {
  return (
    <div className='h-64'>
      <div className='w-full h-full flex items-center justify-center text-center px-4 bg-charcoal-light text-gray-300'>
        <div>
          <img src={imageUrl} alt={title} className='w-24 h-24 mx-auto' />
          <h3 className='mt-4 text-xl'>{title}</h3>
          <p className='mt-2 text-sm'>{description}</p>
          { link && linkText && (
            <p className='mt-2 text-sm'>
              <a href={link} target='_blank' rel='noreferrer' className='text-sky-300'>{linkText}</a>
            </p>
          )}
        </div>
      </div>
    </div>
  )
}

export default LogoTile