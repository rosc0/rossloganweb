import Title from '../Title'

interface CapabilitiesProps {
  capabilitiesRef: React.RefObject<HTMLDivElement>
}

function Capabilities({ capabilitiesRef }: CapabilitiesProps) {
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
            <div key={index} className='select-none p-4 whitespace-nowrap text-gray-300 bg-gray-800/[0.4] rounded-md text-center border-2 border-sky-500/[0.2]'>
              {capability}
            </div>
          )
        })}
      </div>
    </article>
  )
}

export default Capabilities
