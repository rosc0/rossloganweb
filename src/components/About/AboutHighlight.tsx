interface AboutHighlightProps {
  text: string
}

const AboutHighlight = ({ text }: AboutHighlightProps) => {
  return <span className='text-sky-500'>{text}</span>
}

export default AboutHighlight
