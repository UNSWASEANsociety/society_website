import { TextField } from "@material-ui/core";
import React, { useState } from "react";

const ContactUsForm = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const createChangeHandler = (setterFunc) => {
    const handleChange = (event) => {
      setterFunc(event.target.value);
    };
    return handleChange;
  };
  
  const handleSubmit = (event) => {
    console.log(name)
    console.log(email)
    console.log(message)
    event.preventDefault();
  }

  return (
    <form onSubmit={handleSubmit}>
        <TextField  id="outlined-basic" label="Outlined" variant="outlined" />
      <label>
        Name *
        <input
          type="text"
          value={name}
          onChange={createChangeHandler(setName)}
        />
      </label>
      <label>
        Email
        <input
          type="text"
          value={email}
          onChange={createChangeHandler(setEmail)}
        />
      </label>
      <label>
        Message
        <textarea value={message} onChange={createChangeHandler(setMessage)} />
      </label>

      <input type="submit" value="Submit" />
    </form>
  );
};

export default ContactUsForm;
