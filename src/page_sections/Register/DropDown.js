import React from "react";
import MenuItem from "@material-ui/core/MenuItem";

export default function DropDown(props) {
  return <MenuItem value={props.name}>{props.name}</MenuItem>;
}
