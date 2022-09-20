import { FC } from 'react';

type ImageTileProps = {
  imageUrl: string;
  centered?: boolean;
};

const ImageTile: FC<ImageTileProps> = ({ imageUrl, centered = false }) => {
  return (
    <div className='h-96'>
      <div
        className={`w-full h-full bg-cover ${
          centered ? 'bg-center' : 'bg-left-top'
        }`}
        style={{
          backgroundImage: `url(${imageUrl})`,
        }}
      />
    </div>
  );
};

export default ImageTile;
