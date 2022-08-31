import { ADDING, EDITING, REMOVING, CHECKING } from "./ckTypes"

export const adding = (name) => { 
return {
    type:ADDING,
    payload:name
}    

}
export const removing=(id) => {
    return {
        type:REMOVING,
        payload:id
    }
}
export const editing=(name,id) => {
    return {
        type:EDITING,
        payload:{name,id}
    }
}
export const checking=() => {
    return {
        type:CHECKING,
        
    }
}