import Title from '../Title'

interface MyWorkProps {
  myWorkRef: React.RefObject<HTMLDivElement>
}

function MyWork({ myWorkRef }: MyWorkProps) {
  return (
    <article ref={myWorkRef} className='mt-16 mb-12 lg:mt-36 lg:mb-20'>
      <Title text='My Work' />
      <div className='text-white'>
        
      </div>
    </article>
  )
}

export default MyWork
