import React from "react";
import { TextField } from "@material-ui/core";
import Grid from "@material-ui/core/Grid";
import MuiPhoneInput from "mui-phone-input-ssr";

export default function Input(props) {
  return (
    <div>
      <Grid container spacing={2}>
        <Grid item xs={12} sm={6}>
          <TextField
            id="outlined-basic"
            label="First Name"
            variant="outlined"
            placeholder="Enter First Name"
            // fullWidth
            required
            size="small"
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            id="outlined-basic"
            label="Last Name"
            variant="outlined"
            placeholder="Enter Last Name"
            // fullWidth
            size="small"
            // style={{ marginLeft: "22px" }}
          />
        </Grid>
      </Grid>
      <TextField
        id="outlined-basic"
        label="Email"
        variant="outlined"
        placeholder="Enter Email"
        fullWidth
        required
        size="small"
      />
      <TextField
        id="outlined-basic"
        label="Password"
        variant="outlined"
        placeholder="Enter Password"
        fullWidth
        required
        type="password"
        size="small"
      />
      <TextField
        id="outlined-basic"
        label="Confirm Password"
        variant="outlined"
        // placeholder="Enter Password"
        fullWidth
        required
        type="password"
        size="small"
      />
      <TextField
        id="outlined-basic"
        label="zID"
        variant="outlined"
        placeholder="Enter zID"
        fullWidth
        // required
        // type="password"
        size="small"
      />
      <MuiPhoneInput
        id="outlined-basic"
        variant="outlined"
        size="small"
        fullWidth
        label="Phone Number"
        defaultCountry={"au"}
        onChange={props.phoneField}
      />
    </div>
  );
}
