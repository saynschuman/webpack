import React from "react";
import {
  Container,
  FormGroup,
  Input,
  ListGroup,
  ListGroupItem,
  Card,
  CardHeader,
  CardBody,
  Form,
  Button,
} from "reactstrap";
import { FaSearchLocation } from "react-icons/fa";

const SearchPage = () => {
  const [city, setCity] = React.useState("");
  const onChange = (e) => {
    setCity(e.target.value);
  };
  const onSubmit = (e) => {
    e.preventDefault();
  };
  return (
    <Container>
      <Card>
        <CardHeader>
          <Form onSubmit={onSubmit}>
            <FormGroup className="d-flex flex-nowrap justify-content-between">
              <Input
                className="w-75"
                type="search"
                name="search"
                value={city}
                placeholder="Введите город"
                onChange={onChange}
              />
              <Button className="w-25 ml-2">
                <FaSearchLocation />
              </Button>
            </FormGroup>
          </Form>
        </CardHeader>
        <CardBody>
          <ListGroup>
            <ListGroupItem>Cras justo odio</ListGroupItem>
            <ListGroupItem>Dapibus ac facilisis in</ListGroupItem>
            <ListGroupItem>Morbi leo risus</ListGroupItem>
            <ListGroupItem>Porta ac consectetur ac</ListGroupItem>
            <ListGroupItem>Vestibulum at eros</ListGroupItem>
          </ListGroup>
        </CardBody>
      </Card>
    </Container>
  );
};

export default SearchPage;
