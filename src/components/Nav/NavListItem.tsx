interface NavListItemProps {
  sectionId: string;
  sectionName: string;
}

function NavListItem({sectionId, sectionName}: NavListItemProps) {

  const onNavigate = (navigateTo: string): void => {
    console.log(navigateTo)
  }

  return (
    <li className='flex-1 text-center block py-2'>
      <button
        className='w-full py-4 lg:rounded-sm hover:bg-charcoal-lightest transition-all ease-in-out duration-300'
        onClick={() => onNavigate(sectionId)}
      >
        {sectionName}
      </button>
    </li>
  )

}

export default NavListItem