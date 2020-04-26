import React from "react";
import { connect } from "react-redux";
import { addToDo } from "../actions";
import Form from "react-bootstrap/Form";
import InputGroup from "react-bootstrap/InputGroup";

import ToDoListContainer from "./ToDoListContainer";
import { ToastProvider, useToasts } from "react-toast-notifications";

import ButtonLink from "../components/button/button";

let AddToDo = ({ dispatch }) => {
  const { addToast } = useToasts();
  let input;

  const formSubmit = (e) => {
    e.preventDefault();
    if (!input.value.trim()) {
      return;
    }
    dispatch(addToDo(input.value));
    addToast("Saved Successfully", {
      appearance: "success",
      autoDismiss: true,
      PlacementType: "bottom-center",
      number: 500,
    });
    input.value = "";
  };

  return (
    <div>
      <Form
        onSubmit={(e) => {
          e.preventDefault();
          if (!input.value.trim()) {
            return;
          }
          dispatch(addToDo(input.value));
          addToast("Saved Successfully", {
            appearance: "success",
            autoDismiss: true,
            PlacementType: "bottom-center",
            number: 500,
          });
          input.value = "";
        }}
      >
        <Form.Group controlId="formTextValue">
          <InputGroup>
            <Form.Control
              type="text"
              placeholder="Enter an item"
              ref={(node) => {
                input = node;
              }}
            />
            <InputGroup.Append>
              
              <ButtonLink label="Click me please" onclick={formSubmit}>
                {" "}
              </ButtonLink>
            </InputGroup.Append>
          </InputGroup>
        </Form.Group>
      </Form>
      <ToDoListContainer />
    </div>
  );
};
AddToDo = connect()(AddToDo);

export default AddToDo;
