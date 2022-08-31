import {ADDING, EDITING, REMOVING, CHECKING, } from './ckTypes';

const initState={
   tasks:[{
    name:"HTML",
    done:true,
    id:0
   },
   {
    name:"CSS",
    done:false,
    id:1
   },
   {
    name:"JS",
    done:true,
    id:2
   }]
}
export const ckReducer = (state = initState, action) => {
    switch (action.type) {
        case ADDING:
            return {...state,tasks:[...state.tasks,{name:action.payload,done:false,id:Date.now()}]};
        case REMOVING:
            return {...state,tasks:state.tasks.filter((el)=>el.id!==action.payload)};
        case EDITING:
            return {...state,tasks:state.tasks.map((el)=>el.id===action.payload.id ?{...el,name:action.payload.name}:el)}
        case CHECKING:
            return  {...state,tasks:state.tasks.filter((el)=>el.done===true)}  
        
               
            
           
        default:
            return state;
    }

}