import React from "react";
import {
  Button,
  Checkbox,
  Container,
  FormControlLabel,
  FormGroup,
  Paper,
  TextField,
  Typography,
} from "@material-ui/core";
import styles from "./LoginForm.module.scss";
import Link from "next/link";
const LoginForm = () => {
  return (
    <>
      <div className={styles.outer}>
        <Container maxWidth="sm">
          <div className={styles.paper}>
            <div className={styles.outer_padding}>
              <Typography component="h1" variant="h3" gutterBottom>
                Log In
              </Typography>
              <form className={styles.formGroup} noValidate autoComplete="off">
                <TextField
                  // id="outlined-basic"
                  className={styles.textBox}
                  label="Email"
                  variant="outlined"
                />
                <TextField
                  className={styles.textBox}
                  // id="outlined-basic"
                  label="Password"
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
                <Button variant="contained" color="primary">
                  Log In
                </Button>
              </form>
              <div className={styles.links}>
                <Link href="/">Forgot password?</Link>
                <Link href="/">{"Don't Have account?"}</Link>
              </div>
            </div>
          </div>
        </Container>
      </div>
    </>
  );
};

export default LoginForm;
