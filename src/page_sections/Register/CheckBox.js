import React from "react";
import clsx from "clsx";
import RadioGroup from "@material-ui/core/RadioGroup";
import Radio from "@material-ui/core/Radio";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import FormControl from "@material-ui/core/FormControl";
import InputLabel from "@material-ui/core/InputLabel";
import MenuItem from "@material-ui/core/MenuItem";
import Select from "@material-ui/core/Select";
import DropDown from "./DropDown";
import DepartmentData from "./DepartmentData";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  root: {
    "& .MuiSelect-outlined.MuiSelect-outlined": {
      // marginTop: theme.spacing(2),
      // marginBottom: theme.spacing(1),
      width: "412px", // Fix IE 11 issue.
    },
  },
  back: {
    "&:hover": {
      backgroundColor: "transparent",
    },
  },
  icon: {
    borderRadius: "50%",
    width: 16,
    height: 16,
    boxShadow:
      "inset 0 0 0 1px rgba(16,22,26,.2), inset 0 -1px 0 rgba(16,22,26,.1)",
    backgroundColor: "#BFA2DB",
    backgroundImage:
      "linear-gradient(180deg,hsla(0,0%,100%,.8),hsla(0,0%,100%,0))",
    "$root.Mui-focusVisible &": {
      outline: "2px auto rgba(19,124,189,.6)",
      outlineOffset: 2,
    },
    "input:hover ~ &": {
      backgroundColor: "#F0D9FF",
    },
    "input:disabled ~ &": {
      boxShadow: "none",
      background: "rgba(206,217,224,.5)",
    },
  },
  checkedIcon: {
    backgroundColor: "#002366",
    "input:hover ~ &": {
      backgroundColor: "#106ba3",
    },
  },
}));

// Inspired by blueprintjs
function StyledRadio(props) {
  const classes = useStyles();

  return (
    <Radio
      className={classes.back}
      disableRipple
      color="default"
      checkedIcon={<span className={clsx(classes.icon, classes.checkedIcon)} />}
      icon={<span className={classes.icon} />}
      {...props}
    />
  );
}

export default function CheckBox(props) {
  const classes = useStyles();
  const [popUp, setPopUp] = React.useState(false);

  const showPopUp = () => {
    setPopUp(true);
  };

  const hidePopUp = () => {
    setPopUp(false);
  };

  function departmentDropDown(data) {
    return <DropDown key={data.id} name={data.name} />;
  }

  return (
    <div className={classes.root}>
      <FormControl component="fieldset" style={props.marginStyle}>
        {/* <FormLabel component="legend">
                Are you a society Member?
              </FormLabel> */}
        <RadioGroup
          aria-label="check"
          name="check"
          style={{ display: "initial", marginTop: "20px" }}
        >
          <span style={{ marginRight: "40px", fontFamily: "Georgia" }}>
            Are you a society member?
          </span>
          <FormControlLabel
            value="yes"
            control={<StyledRadio color="primary" onChange={showPopUp} />}
            label={<span style={{ fontFamily: "Georgia" }}>Yes</span>}
            style={{ marginTop: "-5px" }}
          />
          <FormControlLabel
            value="no"
            control={<StyledRadio color="primary" onChange={hidePopUp} />}
            label={<span style={{ fontFamily: "Georgia" }}>No</span>}
            style={{ marginTop: "-5px", marginLeft: "10px" }}
          />
        </RadioGroup>
        {popUp ? (
          <FormControl
            variant="outlined"
            style={{ marginTop: "10px" }}
            size="small"
          >
            <InputLabel id="demo-simple-select-outlined-label">
              Department
            </InputLabel>
            <Select
              labelId="demo-simple-select-outlined-label"
              id="demo-simple-select-outlined"
              // onChange={handleChange}
              label="Department"
            >
              {/* <MenuItem value="Membership & Development">
              Membership & Development
            </MenuItem>
            <MenuItem value="Marketing">Marketing</MenuItem>
            <MenuItem value="Information Technology">
              Information Technology
            </MenuItem>
            <MenuItem value="Operations">Operations</MenuItem>
            <MenuItem value="Finance & Partnership">
              Finance & Partnership
            </MenuItem> */}
              {DepartmentData.map(departmentDropDown)}
            </Select>
          </FormControl>
        ) : null}
      </FormControl>
    </div>
  );
}
