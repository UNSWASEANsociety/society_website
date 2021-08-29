import React from "react";
import Button from "@material-ui/core/Button";

export default function RegisterButton() {
  return (
    <div>
      <Button
        type="submit"
        color="primary"
        variant="contained"
        // fullWidth
        style={{
          width: "70%",
          marginTop: "30px",
          borderRadius: "20px",
          fontFamily: "Georgia",
          fontSize: "1.2rem",
        }}
        size="large"
      >
        Register!
      </Button>
    </div>
  );
}
