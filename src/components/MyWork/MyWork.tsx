import { FC, RefObject } from 'react';

import Title from '../Title';
import LogoTile from './LogoTile';
import ImageTile from './ImageTile';

import snipperLogo from '../../assets/snipper/logo.png';
import stadiumImg from '../../assets/snipper/stadium.jpg';
import tiestoImg from '../../assets/snipper/tiesto.jpg';

import horshaLogo from '../../assets/horsha/logo.svg';
import createTrailImg from '../../assets/horsha/create_trail.jpg';
import discoverImg from '../../assets/horsha/discover.jpg';
import recordImg from '../../assets/horsha/record.jpg';
import statsImg from '../../assets/horsha/stats.jpg';

type MyWorkProps = {
  myWorkRef: RefObject<HTMLDivElement>;
};

const MyWork: FC<MyWorkProps> = ({ myWorkRef }) => {
  return (
    <article ref={myWorkRef} className='mt-16 mb-12 lg:mt-36 lg:mb-20'>
      <Title text='My Work' />

      <div className='p-8 bg-charcoal-light'>
        <LogoTile
          imageUrl={snipperLogo}
          title='Snipperwall'
          description='A social media aggregator that was displayed at large events, clients would choose a hashtag to scrape and show on the Snipperwall. This would then cycle through the posts automatically. It was shown at large events and centres, like the AJAX stadium and The Voice Netherlands'
          builtWithText='Backbone, Underscore, HTML, CSS, Javascript'
          link='https://youtube.com/playlist?list=PLQu9BOHCL0qWIag0Zew74AeCEGhjHDe-u'
          linkText='View Videos'
        />
        <div className='grid grid-cols-1 xl:grid-cols-2 gap-8'>
          <ImageTile imageUrl={stadiumImg} centered={true} />
          <ImageTile imageUrl={tiestoImg} centered={true} />
        </div>
      </div>

      <div className='p-8 bg-charcoal-light mt-12'>
        <LogoTile
          imageUrl={horshaLogo}
          title='Horsha'
          description='A ride tracker and social media app and website for horse owners, kind of like Strava, but for horse riders. Users could track their rides and compete on sections of track against other users. Once a ride was tracked you could share it with your friends and engage with others on your news feed. You could also look at your stats, to see how you were improving on certain sections of track.'
          builtWithText='React Native, Redux, AngularJS, GraphQL'
        />
        <div className='grid grid-cols-1 xl:grid-cols-2 gap-8'>
          <ImageTile imageUrl={createTrailImg} />
          <ImageTile imageUrl={discoverImg} />
          <ImageTile imageUrl={recordImg} />
          <ImageTile imageUrl={statsImg} />
        </div>
      </div>
    </article>
  );
};

export default MyWork;
