import React from 'react';
import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import FormCheckInput from 'react-bootstrap/esm/FormCheckInput';
import Form from 'react-bootstrap/Form';
import { useDispatch, useSelector } from 'react-redux';
import { removing ,editing, checking} from '../rdx/actions';

const Add = () => {
  const [ck, setCk] = useState("all")
  const [getting, setGetting] = useState("")
  const list=useSelector((state)=>state.tasks)
  console.log(list);
  const dispatch=useDispatch()
  const edit = (id) => {  
    if (getting) {
      dispatch(editing(getting,id))
      setGetting("")
    }
    
  }
  return (
    <div>
        <div className='container'>
        <Card className="text-center" style={{margin:"75px",display:'flex'}}>
    <Card.Header >The tasks : </Card.Header>
    <Card.Body >
    <Form.Control type="text" value={getting} onChange={(e)=>setGetting(e.target.value)}/>
       {ck==="all"?
       list.map((el)=><div style={{display:'flex',justifyContent:'space-around'}} key={el.id}>
      <FormCheckInput checked={el.done}></FormCheckInput>
        <h1>{el.name}</h1>
        <Button onClick={()=>edit(el.id)}>Edit</Button>
        <Button onClick={()=>dispatch(removing(el.id))}>Delete</Button>
        

      </div>)
      :ck==="done" ?
      list.filter((e)=>e.done==true).map((el)=><div style={{display:'flex',justifyContent:'space-around'}} key={el.id}>
      <FormCheckInput checked={el.done}></FormCheckInput>
        <h1>{el.name}</h1>
        <Button onClick={()=>edit(el.id)}>Edit</Button>
        <Button onClick={()=>dispatch(removing(el.id))}>Delete</Button>
        

      </div>):
      list.filter((e)=>e.done===false).map((el)=><div style={{display:'flex',justifyContent:'space-around'}} key={el.id}>
      <FormCheckInput checked={el.done}></FormCheckInput>
        <h1>{el.name}</h1>
        <Button onClick={()=>edit(el.id)}>Edit</Button>
        <Button onClick={()=>dispatch(removing(el.id))}>Delete</Button>
        

      </div>)
    
    }
    </Card.Body>
    <div style={{display:'flex',justifyContent:'space-around'}}>
    <Button onClick={()=>setCk("done")}>Is done</Button>
    <Button onClick={()=>setCk("not done")}>!_done</Button>
    <Button onClick={()=>setCk("all")}>All</Button>
    </div>
  </Card>
  </div>
    </div>
  )
}

export default Add