import { useState, KeyboardEvent } from "react"
import * as C from "./style"


type AddAreaProp = {
    onEnter: (taskName: string) => void
}


export const AddArea = ({ onEnter }: AddAreaProp) => {
    const [inputText, setInpulttext] = useState<string>("")


    const handleKeyUp = (e: KeyboardEvent) => {
        if(e.code == "Enter" && inputText !== ""){
            onEnter(inputText)

            setInpulttext("")
        }
    }


    return (
        <C.Conteiner>
            <div className="image">➕</div>
            <input 
                type="text"
                placeholder="Adicione uma tarefa"
                value={inputText}
                onChange={({ target }) => setInpulttext(target.value)}
                onKeyUp={handleKeyUp}
            />
        </C.Conteiner>
    )
}