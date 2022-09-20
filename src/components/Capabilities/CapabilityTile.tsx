import { FC } from 'react';

type CapabilitiesTileProps = {
  capability: string;
};

const CapabilityTile: FC<CapabilitiesTileProps> = ({ capability }) => {
  return (
    <div className='select-none p-4 whitespace-nowrap text-gray-300 bg-charcoal-light text-md text-center border-2 border-sky-500/[0.2]'>
      {capability}
    </div>
  );
};

export default CapabilityTile;
