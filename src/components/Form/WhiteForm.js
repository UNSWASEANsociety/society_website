import {
    Container
} from "@material-ui/core";
import React from "react";
import styles from "./WhiteForm.module.scss";

const WhiteForm = ({children}) => {
    return (
        <div className={styles.outer}>
        <Container maxWidth="sm">
          <div className={styles.paper}>
            <div className={styles.outer_padding}>
              {children}
            </div>
          </div>
        </Container>
      </div>
    )
}

export default WhiteForm
