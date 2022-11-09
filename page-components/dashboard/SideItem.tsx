import { Twitter } from '../Icons'

const SideItem = ({ toggle, icon, label}: { toggle: boolean, icon:any, label: string }) => {
  return (
    <div className='flex gap-2 p-2'>
      <div className='relative'>{icon}</div>
      <div className={`${toggle? 'scale-100': 'scale-0'} transition-all `}>{label}</div>
    </div>
  )
}

export default SideItem