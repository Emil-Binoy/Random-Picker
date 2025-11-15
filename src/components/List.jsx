import React from 'react'

export const List = ({list,deleteItem,clearAll}) => {
  return (
    <div>
        {
          list.length > 0 && (
            <button 
              onClick={clearAll}
              className="text-red-500 hover:text-red-800 transition-colors duration-200 ml-65  "
            >clear all</button>
          )
        }

        <ul className={ list.length === 0 ? '' : "m-5 border-2 border-purple-200 mx-auto w-full max-w-[340px] text-start px-5 py-2 rounded-md max-h-40 overflow-y-auto "}>
          {
            list.map((n,i)=>(
              <li key={i} className="border-b border-gray-300 flex justify-between items-center py-1 transition duration-200 ease-in-out transform hover:scale-110 hover:-translate-y-1">
                <span>{n}</span>
                <button 
                className="text-red-600 text-end hover:text-red-800 transition-colors duration-200"
                onClick={()=> deleteItem(i)}
                >delete</button>
              </li>
            ))
          }
        </ul>
    </div>
  )
}

 