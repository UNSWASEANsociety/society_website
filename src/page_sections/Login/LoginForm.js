import WhiteForm from "@/components/Form/WhiteForm";
import backend_route from "@/constants/backend_route";
import {
  Button,
  Checkbox,
  FormControlLabel,
  TextField,
  Typography,
} from "@material-ui/core";
import Link from "next/link";
import React, { useState } from "react";
import styles from "./LoginForm.module.scss";
const LoginForm = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const [incorrectPassword, setIncorrectPassword] = useState(false);

  const onSubmit = async () => {
    console.log(email, password);
    const payload = {
      email,
      password,
    };
    const res = await fetch(`${backend_route}/auth/login`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json;charset=utf-8",
      },
      body: JSON.stringify(payload),
    }).then((response) => {
      if (response.status >= 400 && response.status < 600) {
        console.log(response);
        // response.text().then(v => console.log(v)) 
        response.text().then(body => console.log(body));

        // console.log(d)
        throw new Error("Bad response from server");
      }
      return response;
    });
    const data = await res.json();

    console.log(data);

    // Incorrect Account does not exist
    setIncorrectPassword(true);
    setTimeout(() => {
      setIncorrectPassword(false);
    }, 1000);
  };

  return (
    <>
      <WhiteForm>
        <Typography component="h1" variant="h3" gutterBottom>
          Log In
        </Typography>
        <form className={styles.formGroup} noValidate autoComplete="off">
          <TextField
            required
            value={email}
            onChange={(events) => setEmail(events.target.value)}
            className={styles.textBox}
            label="Email"
            variant="outlined"
          />
          <TextField
            required
            error={incorrectPassword}
            helperText={incorrectPassword ? "Incorrect password" : " "}
            value={password}
            onChange={(events) => setPassword(events.target.value)}
            className={styles.textBox}
            label="Password"
            type="password"
            variant="outlined"
          />
          <FormControlLabel
            control={
              <Checkbox
                // checked={state.checkedB}
                // onChange={handleChange}
                name="checkedB"
                color="primary"
              />
            }
            label="Keep me signed in"
          />
          <Button variant="contained" color="primary" onClick={onSubmit}>
            Log In
          </Button>
        </form>
        <div className={styles.links}>
          <Link href="/">Forgot password?</Link>
          <Link href="/">{"Don't Have account?"}</Link>
        </div>
      </WhiteForm>
    </>
  );
};

export default LoginForm;
