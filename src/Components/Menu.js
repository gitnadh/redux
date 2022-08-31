import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import Form from "react-bootstrap/Form";
import React ,{useState} from "react";
import { useDispatch } from "react-redux";
import { adding } from "../rdx/actions";

const Menu = () => {
  const dispatch=useDispatch()
  const [getting, setGetting] = useState("")
  const add = () => {  
    if (getting) {
      dispatch(adding(getting))
      setGetting("")
    }
    
  }
  return (
    <div className="container">
      <Card className="text-center" style={{ margin: "75px" }}>
        <Card.Header>Check Point REDUX </Card.Header>
        <Card.Body >
          <Card.Title>Please insert the task</Card.Title>
          <Form.Control type="text" value={getting} onChange={(e)=>setGetting(e.target.value)} placeholder="Enter task" />
          <Button 
            variant="primary"
            style={{ margin: "10px" }}
            onClick={()=>add()}
          >
            Add
          </Button>
        </Card.Body>
        <Card.Footer className="text-muted">Created by NR</Card.Footer>
      </Card>
    </div>
  );
};

export default Menu;
