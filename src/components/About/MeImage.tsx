import mePic from '../../assets/me.jpg';

function MeImage() {
  return (
    <div className='w-full lg:w-1/3 xl:w-1/4'>
      <img
        src={mePic}
        alt='Ross Logan'
        className='m-auto w-2/3 rounded-full lg:w-full shadow-2xl shadow-gray-700'
      />
    </div>
  );
}

export default MeImage;
