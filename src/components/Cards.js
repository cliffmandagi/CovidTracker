import React from "react";
import { Card } from "react-bootstrap";

const Cards = ({variant, header, content}) => {

  return (
    <div>
      <Card
        bg={variant.toLowerCase()}
        text={variant.toLowerCase() === "light" ? "dark" : "white"}
        style={{ width: "18rem" }}
        className="mb-2 text-center ml-3 mt-3"
      >
        <Card.Header>{header}</Card.Header>
        <Card.Body>
          <Card.Title> {content} </Card.Title>
        </Card.Body>
      </Card>
    </div>
  );
};

export default Cards;
