import React, { useState } from 'react';
import styled from "styled-components";

import Button from '../../UI/Button/Button';

/**
 * Div styled component to replace regular div with css
 * @type {StyledComponent<"div", AnyIfEmpty<DefaultTheme>, {}, never>}
 */
const FormControl = styled.div`
    margin: 0.5rem 0;

  & label {
    font-weight: bold;
    display: block;
    margin-bottom: 0.5rem;
    color: ${props => (props.invalid ? 'red' : 'black')};
  }

  & input {
    display: block;
    width: 100%;
    border: 1px solid ${props => (props.invalid ? 'crimson' : '#ccc')};
    background: ${props => (props.invalid ? '#fad0ec' : 'transparent')};
    font: inherit;
    line-height: 1.5rem;
    padding: 0 0.25rem;
  }

  & input:focus {
    outline: none;
    background: #b7f8b7;
    border-color: #8b005d;
  }
`;

const CourseInput = props => {
  /**
   * State to update on user input
   */
  const [enteredValue, setEnteredValue] = useState('');

  /**
   * State to indicate valid or invalid user input
   */
  const [isValid, setIsValid] = useState(true);

  /**
   * Verifies the correct input provided against empty input value or blanks.
   * If correct, sets isValid state to true.
   * Updates enteredValue state.
   * @param event
   */
  const goalInputChangeHandler = event => {
    if (event.target.value.trim().length > 0) {
      setIsValid(true);
    }
    setEnteredValue(event.target.value);
  };

  /**
   * Verifies the correct input provided against empty input value or blanks.
   * If incorrect, sets isValid state to false.
   * Otherwise, calls parent method to handle new enteredValue.
   */
  const formSubmitHandler = event => {
    event.preventDefault();
    if (enteredValue.trim().length === 0) {
      setIsValid(false);
      return;
    }
    props.onAddGoal(enteredValue);
  };

  return (
    <form onSubmit={formSubmitHandler}>
      {/* Dynamically update input and label to either `form-control` or `form-control invalid` */}
      <FormControl invalid={!isValid}>
        <label>Course Goal</label>
        <input type="text" onChange={goalInputChangeHandler} />
      </FormControl>
      <Button type="submit">Add Goal</Button>
    </form>
  );
};

export default CourseInput;
