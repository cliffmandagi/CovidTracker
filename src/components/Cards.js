import React from "react";
import { Card } from "react-bootstrap";

const Cards = () => {

  let condition = (variant) => {
    if(variant="Success"){
      return "Recovered"
    }
    else if(variant="Danger"){
      return "Death"
    }
    else if(variant="Warning"){
      return "Confirmed"
    }
  }

  return (
    <div className="row justify-content-center">
      {["Success", "Danger", "Warning"].map((variant) => (
        <Card
          bg={variant.toLowerCase()}
          text={variant.toLowerCase() === "light" ? "dark" : "white"}
          style={{ width: "18rem" }}
          className="mb-2 text-center mr-2 ml-2 mt-3"
        >
          <Card.Header>{condition(variant)}</Card.Header>
          <Card.Body>
            <Card.Title>  </Card.Title>
          </Card.Body>
        </Card>
      ))}
    </div>
  );
};

export default Cards;
