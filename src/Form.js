import React, { useState } from 'react';

const Form = () => {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [fullName, setFullName] = useState('');
  const [isSubmitted, setIsSubmitted] = useState(false);

  // Handle changes to input fields
  const handleFirstNameChange = (event) => setFirstName(event.target.value);
  const handleLastNameChange = (event) => setLastName(event.target.value);

  // Handle form submission
  const handleSubmit = (event) => {
    event.preventDefault();
    if (firstName && lastName) {
      setFullName(`${firstName} ${lastName}`);
      setIsSubmitted(true);
    }
  };

  return (
    <div className="form-container">
      <form onSubmit={handleSubmit}>
        {/* <h2>Full Name Display</h2> */}
        <label htmlFor="first-name">First Name</label>
        <input
          type="text"
          id="first-name"
          name="first-name"
          value={firstName}
          onChange={handleFirstNameChange}
          required
        />
        <br />
        <label htmlFor="last-name">Last Name</label>
        <input
          type="text"
          id="last-name"
          name="last-name"
          value={lastName}
          onChange={handleLastNameChange}
          required
        />
        <br />
        <button type="submit">Submit</button>
      </form>

      {isSubmitted && <h2>Full Name: {fullName}</h2>}
    </div>
  );
};

export default Form;
