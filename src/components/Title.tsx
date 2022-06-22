interface TitleProps {
  text: string,
  id: string,
}

function Title({ text, id }: TitleProps) {
  return (
    <h2 id={id} className='text-3xl text-center text-white mt-16 mb-12 lg:mt-36 lg:mb-20'>
      {text}
    </h2>
  )
}

export default Title
