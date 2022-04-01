import React, { useState } from 'react';

import Button from '../../UI/Button/Button';
import './CourseInput.css';

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
      <div className={`form-control ${!isValid ? 'invalid': ''}`}>
        <label>Course Goal</label>
        <input type="text" onChange={goalInputChangeHandler} />
      </div>
      <Button type="submit">Add Goal</Button>
    </form>
  );
};

export default CourseInput;
