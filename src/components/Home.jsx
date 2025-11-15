import { useState } from "react";
import { List } from "./List";
import { Popup } from "./Popup";
import { InputBox } from "./InputBox";
import {runConfetti} from "../confetti"

export function home()  {
  const [list, setList]=useState([])
  const [selected, setSelected] = useState(null)
  const [popup, setPopup] = useState(false)
  const [warn, setWarn] = useState(false)

  const addText =(name)=>{
    if(!name.trim()){
      return;
    } 
    setList([...list,name]);
    setWarn(false)
  }

  const clearAll=()=>{
    const ok = window.confirm('Do you want to clear all list ?');
    if(!ok) {return;}

    setList([]);
  }

  const deleteItem=(index)=>{
    setList(list.filter((_, i) => i !== index));
  }

  const pickRandom=()=>{
    if (list.length===0){
      setWarn(true);
      return;
    }

    setWarn(false)

    const random = list[Math.floor(Math.random()*list.length)]
    setSelected(random);
    setPopup(true);

    runConfetti();

  }
  return (
    <section className="p-5 flex flex-col justify-center text-center">
        <h1 className="bg-linear-to-bl from-violet-500 to-fuchsia-500 bg-clip-text text-transparent font-bold text-5xl my-5">Random Picker</h1>
        
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
    </section>
  )
}
