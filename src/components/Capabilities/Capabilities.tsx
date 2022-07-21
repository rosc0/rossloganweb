import Title from '../Title'
import CapabilityTile from './CapabilityTile'

interface CapabilitiesInterface {
  capabilitiesRef: React.RefObject<HTMLDivElement>
}

function Capabilities({ capabilitiesRef }: CapabilitiesInterface) {
  const capabilities = [
    'Javascript',
    'HTML5',
    'CSS3',
    'LESS/SASS',
    'React',
    'React Native',
    'Angular',
    'TypeScript',
    'Redux',
    'Tailwind',
    'Bootstrap',
    'JSON',
    'MySQL',
    'GraphQL',
    'REST',
    'GIT',
    'Photoshop',
    'NodeJS',
  ]
  
  return (
    <article ref={capabilitiesRef} className='mt-16 mb-12 lg:mt-36 lg:mb-20'>
      <Title text='Capabilities' />
      <div className='grid grid-cols-2 gap-8 md:grid-cols-3 xl:grid-cols-6'>
        {capabilities.map((capability, index) => {
          return (
            <CapabilityTile key={`capability${index}`} capability={capability} />
          )
        })}
      </div>
    </article>
  )
}

export default Capabilities
