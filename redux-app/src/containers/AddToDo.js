import React from "react";
import { connect } from "react-redux";
import { addToDo } from "../actions";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import InputGroup from "react-bootstrap/InputGroup";

import ToDoListContainer from "./ToDoListContainer";
import { ToastProvider, useToasts } from "react-toast-notifications";

let AddToDo = ({ dispatch }) => {
  const { addToast } = useToasts();
  let input;

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
            PlacementType: 'bottom-left',
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
              <Button type="submit">Add To-Do</Button>
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