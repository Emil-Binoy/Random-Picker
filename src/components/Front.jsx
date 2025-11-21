import { useEffect, useState, useRef } from "react";
import { List } from "./List";
import { Popup } from "./Popup";
import { InputBox } from "./InputBox";
import {runConfetti} from "../confetti"

export function Home()  {
  const [list, setList]=useState([])
  const [selected, setSelected] = useState(null)
  const [popup, setPopup] = useState(false)
  const [warn, setWarn] = useState(false)

  const addText =(name)=>{
    const newName = name.trim();
    if (!newName) return;
    
    for(let i=0;i<list.length;i++){
      if(list[i].toLowerCase()===newName.toLowerCase()){
        alert(`${newName} is already existing in the list.`);
        return;
      }
    }
    
    setList([...list,newName]);
    setWarn(false)
  }

  const firstRender = useRef(true);

  useEffect(() => {
    const saved = localStorage.getItem("rp_list");
    if (saved) {
      setList(JSON.parse(saved));
    }
  }, []);

  useEffect(() => {
    if (firstRender.current) {
      firstRender.current = false;
      return;
    }
    localStorage.setItem("rp_list", JSON.stringify(list));
  }, [list]);

  
  const clearAll=()=>{
    const ok = window.confirm('Do you want to clear all list ?');
    if(!ok) {return;}

    setList([]);
    localStorage.removeItem("rp_list");
  }

  const deleteItem=(index)=>{
    setList(list.filter((_, i) => i !== index));
  }

  const pickRandom=()=>{
    if (list.length===0){
      setWarn(true);
      navigator.vibrate(200);
      return;
    }

    setWarn(false)

    const random = list[Math.floor(Math.random()*list.length)]
    setSelected(random);
    setPopup(true);

    runConfetti();

  }
  return (
    <section className="flex justify-center p-3 ">
      <div className="mt-20 p-5 shadow-2xl w-100 flex flex-col justify-center text-center rounded-2xl">
        
        <h1 className="bg-linear-to-bl from-violet-500 to-fuchsia-500 bg-clip-text text-transparent font-bold text-[40px] sm:text-5xl my-5">Random Picker</h1>
        
        <InputBox addText={addText}/>

        <List 
          list={list}
          deleteItem={deleteItem}
          clearAll={clearAll}
        />

          {
            warn && (
              <p className="text-red-500 text-center py-2">
                Enter something to pick
              </p>
            )
          }

        <button 
          onClick={pickRandom}
          className="bg-linear-to-bl from-red-500 to-fuchsia-500 px-4 py-2 rounded-lg mx-auto w-full max-w-[340px] text-white my-4 transition duration-200 ease-in-out transform hover:scale-105 hover:-translate-y-1 hover:from-fuchsia-500 hover:to-red-500"
        >Random</button>

        {
          popup && (
            <Popup 
              selected={selected}
              setPopup={setPopup}
            />
          )
        }

      </div>
    </section>
  )
}
