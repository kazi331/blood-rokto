
const SideItem = ({ toggle, icon, label }: { toggle: boolean, icon: any, label: string }) => {
  return (
    <div className='flex items-center gap-4 hover:rounded-xl duration-300 hover:bg-gray-700 cursor-pointer transition-all p-3 py-2'>
      <div>{icon}</div>
      <div className={`${toggle ? '' : ''} overflow-hidden transition-all `}>{label}</div>
    </div>
  )
}

export default SideItem