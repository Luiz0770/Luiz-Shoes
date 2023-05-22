import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

function BasicExample() {
  return (
    <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src="https://encrypted-tbn1.gstatic.com/shopping?q=tbn:ANd9GcReNSmKagaghJ9ilxuyCi0nPCVQ-jn8cJ_uPfw3CR3Ug4qV8NWY8AKGXhGKt3HF8HsHld3PJR0gPdZD8aNdHdMEPOmOg7YF27vOoNbfEhaKEz-6JFQFnOxb6A&usqp=CAE" />
      <Card.Body>
        <Card.Title>Card Title</Card.Title>
        <Card.Text>
          Some quick example text to build on the card title and make up the
          bulk of the content.
        </Card.Text>
        <Button variant="primary">Go somewhere</Button>
      </Card.Body>
    </Card>
  );
}

export default BasicExample;