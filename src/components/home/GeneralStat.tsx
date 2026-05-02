'use client';
import useFormatTime from "@/hooks/useFormatTime";
import { Icon } from "@iconify-icon/react";
import { useEffect } from "react";


const GeneralStat = () => {
   const Day = 24 * 60 * 60 * 1000 //24 hours
   const startDateStamp = 1777762298526

   // Start with 0 (same on server + client)
   const [timeRemaining, handleTimeRemaining] = useFormatTime(0);

   useEffect(() => {
    const updateTimer = () => {
      const remaining = (startDateStamp + 20 * Day) - Date.now();

      if (remaining <= 0) {
        handleTimeRemaining(0);
        return;
      }

      handleTimeRemaining(remaining);
    };

    updateTimer(); // run immediately after mount

    const interval = setInterval(updateTimer, 1000);

    return () => clearInterval(interval);
  }, []);

   const position = {
      "queue position": {
         count: 100,
         details: "You're in the first wave of early access."
      },
      "impact score": {
         count: 1,
         details: "You've added 1 Nebour to the Hood."
      }
   }

   const share_on_socials = {
      linkedin: {
         icon: 'skill-icons:linkedin'
      },
      x: {
         icon: 'streamline-logos:x-twitter-logo-block'
      },
      facebook: {
         icon: 'logos:facebook'
      },
      instagram: {
         icon: 'skill-icons:instagram'
      },
      telegram: {
         icon: 'logos:telegram'
      }
   }
   return (
      <aside className="py-25 lg:pt-35 lg:pb-40 bg-[#093645]">
         <div className="max-w-200 mx-auto">
            <div className="mb-20">
               <h1 className="text-center text-[35px] md:text-[55px] font-extrabold text-white">General Starts</h1>
               <p className="text-center w-11/12 md:w-4/5 mx-auto text-[18px] text-foreground/60 md:text-2xl">A shared opportunity is a doubled chance. Introduce one colleague to the community and move up 50 spots instantly. We prioritize those who look out for others.</p>
            </div>

            <div className="py-3.75 pl-7.5 pr-3.75 mx-4 md:mx-0 mb-4.5 md:mb-7.5 bg-(--foreground) rounded-[40px] flex flex-col gap-3 md:flex-row items-center justify-between">
               <h1 className="text-black text-2xl font-semibold whitespace-nowrap hover:underline active:underline transition-all duration-300">Lock-in, Offers Ends in:</h1>
               <div className="flex gap-3.75">
                  {Object.entries(timeRemaining).map(([key, value]) => (
                     <div className="bg-[#0936454D] py-7.5 px-5 rounded-[28px] text-[#093645] font-bold flex flex-col items-center transform transform-3d transition-transform duration-300 ease-in-out hover:scale-125 hover:transform-[rotateZ(45deg)] active:scale-125 active:transform-[rotateZ(45deg)]" key={key}>
                        <h1 className="text-4xl md:text-[40px] flex items-center"><span>{value}</span> <span> {key === 'seconds' ? '' : ':'}</span></h1>
                        <span className="text-sm capitalize">{key}</span>
                     </div>
                  ))}
               </div>
            </div>

            <div className="flex gap-4.5 md:gap-7.5 mx-4 md:mx-0 mb-4.5 md:mb-7.5">
               {Object.entries(position).map(([key, value]) => (
                  <div key={key} className="bg-foreground p-5 md:p-7.5 rounded-[40px] flex-1 text-black">
                     <h2 className="text-sm mb-2">{key}:</h2>
                     <h1 className="text-[47px] font-bold mb-4">{key === "queue position" ? '#' : ''}{value.count}</h1>
                     <p>{value.details}</p>
                  </div>
               ))}
            </div>

            <div className="flex justify-between items-center bg-foreground text-black text-xl md:text-2xl rounded-[40px] px-7.5 py-4 md:p-7.5 mx-4 md:mx-0 mb-4.5 md:mb-7.5">
               <p>Copy your unique invite link</p>
               <button className="cursor-pointer outline-0 transform transform-3d transition-transform duration-300 ease-in-out hover:transform-[rotateZ(-45deg)] hover:scale-125 active:transform-[rotateZ(-45deg)] active:scale-90">
                  <Icon icon="nimbus:copy" width="24" height="24" className="text-black" />
               </button>
            </div>

            <p className="text-[#EDFFF9]/70 text-xl font-extralight md:text-2xl mx-4 md:mx-0 mb-4.5 md:mb-7.5">Reach more techies share on:</p>

            <div className="flex gap-4.5 lg:gap-5 flex-wrap justify-center mx-4 md:mx-0">
               {Object.entries(share_on_socials).map(([key, value]) => (
                  <button key={key} className="min-w-35 py-2.5 px-5 rounded-[30px] bg-foreground flex items-center gap-2.5 cursor-pointer outline-0 transform transition-transform duration-300 ease-in-out hover:scale-125 active:scale-90">
                     <span><Icon icon={value.icon} width={24} height={24} className={key === 'x' ? 'invert' : ''} /></span>
                     <span className="capitalize text-lg text-[#093645]">{key}</span>
                  </button>
               ))}
            </div>
         </div>
      </aside>
   )
}

export default GeneralStat