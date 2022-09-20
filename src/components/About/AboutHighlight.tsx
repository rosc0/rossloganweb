import { FC } from 'react';

type AboutHighlightProps = {
  text: string;
};

const AboutHighlight: FC<AboutHighlightProps> = ({ text }) => {
  return <span className='text-sky-500'>{text}</span>;
};

export default AboutHighlight;
