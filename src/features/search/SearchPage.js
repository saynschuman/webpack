import React from "react";
import {
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
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { getCurrentWeatherStart } from "./actions";

const SearchPage = () => {
  const dispatch = useDispatch();
  const [city, setCity] = React.useState("");
  const onChange = (e) => {
    setCity(e.target.value);
  };
  const onSubmit = (e) => {
    e.preventDefault();
    dispatch(getCurrentWeatherStart(city));
  };
  return (
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
          <Link to={`/city-page/21`}>
            <ListGroupItem>Cras justo odio</ListGroupItem>
          </Link>
        </ListGroup>
      </CardBody>
    </Card>
  );
};

export default SearchPage;
