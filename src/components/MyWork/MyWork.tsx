import Title from '../Title'
import LogoTile from './LogoTile'
import ImageTile from './ImageTile'

import snipperLogo from '../../assets/snipper/logo.png'
import stadiumImg from '../../assets/snipper/stadium.jpg'
import tiestoImg from '../../assets/snipper/tiesto.jpg'

import horshaLogo from '../../assets/horsha/logo.svg'
import createTrailImg from '../../assets/horsha/create_trail.jpg'
import discoverImg from '../../assets/horsha/discover.jpg'
import recordImg from '../../assets/horsha/record.jpg'
import statsImg from '../../assets/horsha/stats.jpg'
import trailImg from '../../assets/horsha/trail.jpg'

interface MyWorkInterface {
  myWorkRef: React.RefObject<HTMLDivElement>
}

function MyWork({ myWorkRef }: MyWorkInterface) {
  return (
    <article ref={myWorkRef} className='mt-16 mb-12 lg:mt-36 lg:mb-20'>
      <Title text='My Work' />

      <div className='grid grid-cols-1 xl:grid-cols-2 gap-12'>
        <div className='grid grid-cols-1 sm:grid-cols-2 gap-4 p-4'>
          <LogoTile
            imageUrl={snipperLogo}
            title='Snipper'
            description='A social media aggregator that was displayed at large events'
            link='https://youtube.com/playlist?list=PLQu9BOHCL0qWIag0Zew74AeCEGhjHDe-u'
            linkText='View Videos'
          />
          <ImageTile imageUrl={tiestoImg} centered={true} />
          <div className='sm:col-span-2'>
            <ImageTile imageUrl={stadiumImg} centered={true} />
          </div>
        </div>

        <div className='grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-4 p-4'>
          <LogoTile
            imageUrl={horshaLogo}
            title='Horsha'
            description='A ride tracker and social media app for horse owners built with React Native'
          />
          <ImageTile imageUrl={createTrailImg} />
          <ImageTile imageUrl={discoverImg} />
          <ImageTile imageUrl={recordImg} />
          <ImageTile imageUrl={statsImg} />
          <ImageTile imageUrl={trailImg} />
        </div>
      </div>
    </article>
  )
}

export default MyWork
