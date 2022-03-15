import logo from "./logo.svg";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";

import axios from "axios";
import { Container, Navbar,Row,Col} from "react-bootstrap";
import { useEffect, useState } from "react";
function App() {
  const url = "https://dog.ceo/api/breeds/image/random";
  const marmar ={
    margin: "5%"
  };
  const [state,setState] = useState(null);
  useEffect(()=>{
    axios.get(url).then((res)=>{
      setState(res.data)
    },[url])
  });
  console.log(state);
  if(!state){
    return null;
  }
  return (
    <>
      <Navbar variant="light" bg="light">
        <Container fluid>
          <Navbar.Brand href="#">
            <img src={logo} atl="test" width="50px" height="40px" className="d-inline-block align-center"/>
            {""} API Test 
          </Navbar.Brand>
        </Container>
      </Navbar>
      <Container style={marmar}>
          <h2>Data List (Picture Random)</h2>
          <Row>
            <Col>
                <img src={state.message} alt="dog" width="500px" height="500px"/>
            </Col>
          </Row>
      </Container>
    </>
  );
}

export default App;
