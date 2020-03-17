import React from 'react';
import { Container, Row, Col, Form, Alert } from 'react-bootstrap'
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="app-header">
        {
          <h3>{'Covid19 Update'}</h3>
        }
      </header>
      <div className="container">
      <Form className="form-wrap">
        <Form.Group controlId="exampleForm.SelectCustom">
          <Form.Control as="select" custom>
            <option> Select a country </option>
            <option>1</option>
            <option>2</option>
            <option>3</option>
            <option>4</option>
            <option>5</option>
          </Form.Control>
        </Form.Group>
      </Form>
        <div className="result-container">
        <Container fluid>
        <Row>
          <Alert variant={'warning'}>
            'asa'
          </Alert>
          <Alert variant={'success'}>
            'asa'
          </Alert>
          <Alert variant={'danger'}>
            'asa'
          </Alert>
        </Row>
      </Container>
        </div>
      </div>
    </div>
  );
}

export default App;
