import { useState, useEffect } from 'react'
import mePic from '../../assets/me.jpg'

import Title from '../Title'
import AboutHighlight from './AboutHighlight'

function About() {
  const [years, setYears] = useState<number | null>(null)

  const getYears = (): number => {
    const d = new Date()
    const thisYear = d.getFullYear()
    const startYear = 2008
    const careerBreak = 3
    const years = thisYear - startYear - careerBreak
    return years
  }

  useEffect(() => {
    setYears(getYears())
  }, [])

  const sendEmail = (): void => {
    alert('TODO: Send email')
  }

  return (
    <>
      <Title text='About Me' id='aboutMe' />
      <div className='w-full lg:flex'>
        <div className='w-full lg:w-1/3 xl:w-1/4'>
          <img
            src={mePic}
            alt='Ross Logan'
            className='m-auto w-2/3 rounded-full lg:w-full shadow-2xl shadow-gray-700'
          />
        </div>
        <p className='m-auto pl-0 pt-12 w-full text-gray-400 text-justify text-xl lg:pt-0 lg:pl-16 lg:w-2/3 xl:w-3/4'>
          My name is <AboutHighlight text='Ross Logan' /> and I am a <AboutHighlight text='frontend web developer' />.
          <br />
          <br />
          I started developing websites in 2008, giving me about <AboutHighlight text={`${years} years experience`} />. I have worked for
          different companies here in New Zealand and in Amsterdam where I lived
          for 6 years.
          <br />
          <br />
          Over the years I have learnt a lot of different web technologies, but
          my passion is with <AboutHighlight text='JavaScript' />, <AboutHighlight text='React' /> and <AboutHighlight text='React Native' />.
          <br />
          <br />
          I have experience with with a range of technologies and I am not
          afraid to learn something new to help you.
          <br />
          <br />
          <button className='text-white underline underline-offset-2' onClick={sendEmail}>Send me an email</button> so we can talk about how I can help you with any projects you might have.
        </p>
      </div>
    </>
  )
}

export default About
