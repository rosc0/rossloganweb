interface AboutHighlightInterface {
  text: string
}

const AboutHighlight = ({ text }: AboutHighlightInterface) => {
  return <span className='text-sky-500'>{text}</span>
}

export default AboutHighlight
