import './App.css'

import { useState } from "react";

import { Item } from './types/item';

import { Listitem } from './components/ListItens';

import * as C from "./App.style"
import { AddArea } from './components/AddArea';

function App() {

  const [list, setList] = useState<Item[]>([
    {id: 1, name:"Estudar typeScript todo dia", done: false },
  ])

  const handleEnter = (taskName: string) => {
    const newList = [...list]
    
    newList.push({
      id: list.length + 1,
      name: taskName,
      done: false,
    })
    setList(newList)
  }

  const handleTaskChange = (id: number, done: boolean) => {
    let newList = [...list];
    for(let i in newList) {
      if(newList[i].id === id) {
        newList[i].done = done;
      }
    }
    setList(newList);
  }

  return (
    <div>
      <C.Conteiner>
        <C.Area>
          <C.H1>Lista de tarefas</C.H1>

          <AddArea onEnter={handleEnter}/>

          {list.map((item) => (
            <Listitem key={item.id} item={item} onChange={handleTaskChange} />
          ))}
        </C.Area>
      </C.Conteiner>
    </div>
  )
}

export default App
