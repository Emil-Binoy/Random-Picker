import React from 'react'

export const Popup = ({selected,setPopup}) => {
  return (
    <div className=" fixed inset-0 bg-black/50 flex justify-center items-center">
      <div className="m-5 shadow-[0_8px_15px_-4px_rgba(0,0,0,0.3)] transform transition-all scale-50 sm:scale-75 animate-popup bg-white p-[50px] rounded-2xl mb-10 relative">
        <button 
          className="text-red-600 absolute top-2 right-3"
          onClick={()=> setPopup(false)}
        >❌</button>
        <h1 className="font-bold text-3xl md:text-5xl sm:text-4xl text-purple-700">🎉{selected}🎉</h1>
                
      </div>
    </div>
  )
}

