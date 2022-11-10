
const SideItem = ({ toggle, icon, label }: { toggle: boolean, icon: any, label: string }) => {
  return (
    <div className='flex items-center gap-4 rounded hover:bg-gray-700 cursor-pointer transition-all duration-75 p-3 py-2'>
      <div>{icon}</div>
      <div className={`${toggle ? '' : ''} overflow-hidden transition-all `}>{label}</div>
    </div>
  )
}

export default SideItem