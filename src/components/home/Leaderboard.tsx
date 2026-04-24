
import { useState } from 'react';
import img from '@/assets/imgs/waitlist_leaderboard_image_3.png'
import logo3d from '@/assets/imgs/grok-image-1.png'
import Image from 'next/image';

const Leaderboard = () => {
   const [tab, setTab] = useState<'waitlist' | 'invites' | 'socials'>('waitlist')

   const waitlistLeaderboard = {
      "n_3": {
         name: 'Kamsy',
         image: img,
         color: '#F4A40E'
      },
      "n_1": {
         name: 'Daniel',
         image: img,
         color: '#8D268D'
      },
      "n_2": {
         name: 'Chiboy',
         image: img,
         color: '#FF637E'
      },
   }
   return (
      <aside className="py-25 lg:pt-35 pb-22 lg:pb-35 bg-background">
         <div className="max-w-200 mx-auto px-4 md:px-0">
            <div className="mb-20 text-[#093645]">
               <h1 className="text-center text-[35px] md:text-[55px] font-extrabold">Leaderboard</h1>
               <p className="text-center w-11/12 md:w-4/5 mx-auto text-[18px] md:text-2xl">The leaderboard is more than just a list; it is a live map of the community’s growth and the commitment of its members.</p>
            </div>

            <div className="flex gap-5 mb-10">
               {['waitlist', 'invites', 'socials'].map(item => (
                  <button className={`py-2 md:w-35 text-lg md:text-xl max-md:flex-1 flex items-center justify-center rounded-[30px] transform transition-all duration-300 ease-in-out hover:scale-125 active:scale-90 ${tab === item ? 'text-foreground bg-[#093645]' : 'bg-foreground text-[#093645]'}`} key={item} onClick={() => setTab(item as 'waitlist' | 'invites' | 'socials')}>
                     {item}
                  </button>
               ))}
            </div>

            <div className="flex justify-center gap-11.5 md:gap-21.5 bg-foreground rounded-[40px] py-11.5 md:py-15 mb-4 md:mb-10">
               {Object.entries(waitlistLeaderboard).map(([key, value]) => (
                  <div key={value.name} className='flex flex-col items-center'>
                     <div className='flex flex-col items-center mb-8.5 md:mb-20.75'>
                        <div className={'overflow-hidden w-19.25  h-19.25 rounded-full border-[3px]'} style={{ borderColor: value.color }}>
                           <Image src={value.image} alt='waitlist leaderboard image' className='object-cover' />
                        </div>
                        <h2 className='text-[#093645] text-lg md:text-xl font-bold'>{value.name}</h2>
                     </div>

                     <div className='w-[58.4px] md:w-27.5 h-[220.3px] md:h-[414.8px] rounded-full mb-2 md:mb-4 overflow-hidden relative' style={{
                        background: `repeating-linear-gradient(-60deg, #A2A2A2, #A2A2A2 3px, transparent 3px, transparent 9px)`
                     }}>
                        <div className='absolute bottom-0 left-0 right-0 rounded-t-full' style={{
                           background: value.color, top: 100 - ((5 - Number(key.split('_')[1])) * 25) + '%'
                        }}></div>
                     </div>

                     <div className='w-[58.4px] h-[58.4px] md:w-27.5 md:h-27.5 rounded-full flex justify-center items-center text-[23.89px] md:text-[45px] font-extrabold' style={{ background: value.color }}>#{key.split('_')[1]}</div>
                  </div>
               ))}
            </div>

            <div className='flex justify-between items-end bg-[#093645] rounded-[20px] overflow-hidden'>
               <div className='px-3.5 py-4 md:p-7.5'>
                  <h1 className='text-lg md:text-xl font-bold mb-1.5'>The Strength of the Circle</h1>
                  <p className='md:text-lg text-foreground/60'>Every name on this list represents a person committed to bridging the gap between local ambition and global opportunity.</p>
               </div>
               <div>
                  <Image src={logo3d} alt='3D version of Nebourhood Logo' className='object-cover' />
               </div>
            </div>
         </div>
      </aside>
   )
}

export default Leaderboard