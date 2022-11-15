import Link from "next/link"
import { ReactElement } from "react"

const SideItem = ({  icon, label, slug }: { icon: ReactElement, label: string, slug: string }) => {
  return (
    <Link href={slug} className='flex items-center gap-4 hover:rounded-xl hover:text-white   cursor-pointer transition-all p-3 py-2'>
      <div>{icon}</div>
      <div className={`overflow-hidden `}>{label}</div>
    </Link>
  )
}

export default SideItem