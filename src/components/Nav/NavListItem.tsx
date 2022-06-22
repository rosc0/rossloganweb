import { useContext } from 'react'
import NavContext from '../../context/NavContext'
interface NavListItemProps {
  sectionId: string;
  sectionName: string;
}

function NavListItem({sectionId, sectionName}: NavListItemProps) {

  const { pageLocation, titleLocations, dispatch } = useContext(NavContext)

  const onNavigate = (navigateTo: string): void => {
    
    console.log(typeof titleLocations[navigateTo], navigateTo);

    if (titleLocations[navigateTo] && titleLocations[navigateTo] > 0) {
      window.scrollTo({
        top: (titleLocations[navigateTo] + 50),
        behavior: 'smooth',
      })
    }

    

    dispatch({ type: 'SET_MENU_CLOSED' })
  }

  return (
    <li className='flex-1 text-center block py-2'>
      <button
        className={`w-full py-4 lg:rounded-sm transition-all ease-in-out duration-300 ${pageLocation === sectionId ? 'bg-charcoal-lightest hover:bg-charcoal' : 'hover:bg-charcoal-lightest'}`}
        onClick={() => onNavigate(sectionId)}
      >
        {sectionName}
      </button>
    </li>
  )

}

export default NavListItem