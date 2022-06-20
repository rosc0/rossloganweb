interface TitleProps {
  text: string
}

function Title({ text }: TitleProps) {
  return (
    <h2 className='text-3xl text-center text-white mt-16 mb-12 lg:mt-36 lg:mb-20'>
      {text}
    </h2>
  )
}

export default Title
