interface TitleProps {
  text: string
}

function Title({ text }: TitleProps) {
  return (
    <h2 className='text-3xl text-center text-white mb-12 lg:mb-20'>{text}</h2>
  )
}

export default Title
