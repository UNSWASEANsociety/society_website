import React, { useState } from "react";
import Input from "./Input";
import CheckBox from "./CheckBox";
import RegisterButton from "./RegisterButton";

export default function Form(props) {
  const [value, setValue] = useState();
  function handleOnChange(value) {
    setValue({
      phone: value,
    });
  }
  const marginStyle = {
    marginTop: "10px",
  };
  return (
    <div>
      <form className={props.formStyle}>
        <Input phoneField={handleOnChange} />
        <CheckBox controlStyle={marginStyle} />
        <RegisterButton />
      </form>
    </div>
  );
}
