interface TitleInterface {
  text: string
}

function Title({ text }: TitleInterface) {
  return (
    <h2 className='text-4xl text-center text-white mb-12 lg:mb-20'>{text}</h2>
  )
}

export default Title
