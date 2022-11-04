import Image from 'next/image'
import actionImage from '../../public/images/1.jpg'
import actionImage2 from '../../public/images/2.jpg'
import actionImage3 from '../../public/images/3.webp'
import icon3 from '../utils/blood-donate.svg'
import icon from '../utils/blood.svg'
import icon2 from '../utils/blood2.svg'



const Actions = () => {
  return (
    <section className="py-40 bg-orange-50/50">
      <div className="flex flex-wrap gap-4 items-center justify-center px-2">

        {/* card 1  */}
        <div className='bg-white shadow rounded'>
          <div className="p-4 max-w-xs relative">
            <Image src={actionImage} alt="action image" placeholder='blur' />
            <Image className='mx-auto left-0 right-0 absolute -mt-8 bg-black p-1' width="55" src={icon} alt="icon" />
            <div className="flex flex-col text-center gap-y-4 py-4 pt-10">
              <h4 className='font-bold text-xl'>Become a Donor</h4>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam obcaecati maiores
                quia adipisci neque nobis ratione cum ipsam voluptas suscipit.</p>
            </div>
          </div>
          <button className='py-3 bg-black text-white font-bold w-full'>Read More</button>
        </div>

        {/* card 2  */}
        <div className='bg-white shadow rounded'>
          <div className="p-4 max-w-xs relative">
            <Image src={actionImage2} alt="action image" placeholder='blur' />
            <Image className='mx-auto left-0 right-0 absolute -mt-8 bg-primary p-1' width="55" src={icon2} alt="icon" />
            <div className="flex flex-col text-center gap-y-4 py-4 pt-10">
              <h4 className='font-bold text-xl'>Why Donate Blood</h4>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam obcaecati maiores
                quia adipisci neque nobis ratione cum ipsam voluptas suscipit.</p>
            </div>
          </div>
          <button className='py-3 bg-primary text-white font-bold w-full'>Read More</button>
        </div>

        {/* card 3 */}
        <div className='bg-white shadow rounded'>
          <div className="p-4 max-w-xs relative">
            <Image src={actionImage3} alt="action image" placeholder='blur' />
            <Image className='mx-auto left-0 right-0 absolute -mt-8 bg-black p-1' width="55" src={icon3} alt="icon" />
            <div className="flex flex-col text-center gap-y-4 py-4 pt-10">
              <h4 className='font-bold text-xl'>How Donation Helps</h4>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam obcaecati maiores
                quia adipisci neque nobis ratione cum ipsam voluptas suscipit.</p>
            </div>
          </div>
          <button className='py-3 bg-black text-white font-bold w-full'>Read More</button>
        </div>

      </div>
    </section>
  )
}

export default Actions