import { useState } from "react"

export const InputBox = ({addText}) => {
    const [name, setName]=useState('')

    const sendText=()=>{
        addText(name);
        setName('');
    }

  return (
    <div className="">
        <input 
          type="text"
          value={name}
          onChange={(e)=> setName(e.target.value)}
          onKeyDown={(e)=>{
            if(e.key==='Enter'){
              sendText();
            }
          }}
          placeholder="Enter text here..." 
          className=" w-62 sm:max-w-65 mr-2 border-2 border-purple-400 rounded-md my-4 p-2 focus:border-blue-500 focus:outline-none focus:ring-1 focus:ring-purple-600 "
          />
          <button 
            onClick={sendText}
            className="text-white bg-linear-to-bl from-violet-500 to-fuchsia-500 px-4 py-2 rounded-lg hover:from-fuchsia-500 hover:to-violet-500 transition duration-200 ease-in-out transform hover:scale-110 hover:-translate-y-1"  
          >Add +</button>
    </div>
  )
}

