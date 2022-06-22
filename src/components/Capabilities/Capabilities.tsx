import Title from '../Title'

function Capabilities() {
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
    <>
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
    </>
  )
}

export default Capabilities
