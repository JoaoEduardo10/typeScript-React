import * as C from "./style"
import { Item } from "../../types/item"


type Props = {
    item: Item;
    onChange: (id: number, done: boolean) => void
}

export const Listitem = ({ item, onChange }: Props) => {

    return (
        <C.Conteiner done={item.done}>
            <input 
                type="checkbox"
                checked={item.done}
                onChange={({ target }) => onChange(item.id ,target.checked)}
            />
            <label>{item.name}</label>
        </C.Conteiner>
    )
}