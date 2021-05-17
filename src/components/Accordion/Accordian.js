import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Accordion from "@material-ui/core/Accordion";
import AccordionSummary from "@material-ui/core/AccordionSummary";
import AccordionDetails from "@material-ui/core/AccordionDetails";
import Typography from "@material-ui/core/Typography";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import PropTypes from "prop-types";

const useStyles = makeStyles((theme) => ({
  root: {
    width: "100%",
  },
  heading: {
    fontSize: theme.typography.pxToRem(15),
    fontWeight: theme.typography.fontWeightRegular,
  },
}));

export default function SimpleAccordion({ data }) {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      {data.map((item) => {
        return (
          <Accordion>
            <AccordionSummary
              expandIcon={<ExpandMoreIcon />}
              aria-controls="panel1a-content"
            >
              <Typography className={classes.heading}>
                {item.heading}
              </Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Typography>{item.content}</Typography>
            </AccordionDetails>
          </Accordion>
        );
      })}
    </div>
  );
}

SimpleAccordion.defaultProps = {
  data: [
    {
      heading: "Accordion 1",
      content:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit.\
         Suspendisse malesuada lacus ex, sit amet blandit leo lobortis eget.",
    },
    {
      heading: "Accordion 2",
      content:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit.\
         Suspendisse malesuada lacus ex, sit amet blandit leo lobortis eget.",
    },
    {
      heading: "Accordion 3",
      content:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit.\
         Suspendisse malesuada lacus ex, sit amet blandit leo lobortis eget.",
    },
  ],
};

SimpleAccordion.propTypes = {
  data: PropTypes.exact({
    heading: PropTypes.string,
    content: PropTypes.string,
  }),
};
