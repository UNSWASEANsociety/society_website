import { Grid, Typography } from "@material-ui/core";
import React from "react";
import { Block, ParallaxBlock } from "../../components/Block";
import ContactUsForm from "./ContactUsForm";

const ContactUs = () => {
  // TODO Use team picture for background
  // TODO add social media links underneath location
  return (
    <>
      <ParallaxBlock image="https://images.unsplash.com/photo-1507608158173-1dcec673a2e5?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80">
        <Typography component="h1" variant="h2" align="center" gutterBottom>
          Get in touch!
        </Typography>
        <Typography component="h4" variant="h5" align="center" paragraph>
          If you have any concerns or enquiries, please do not hesitate to
          contact us on our email down below. Don’t forget to also check out our
          FAQ section to see if we have answered any of your questions!
        </Typography>
      </ParallaxBlock>
      <Block>
        <Grid container>
          <Grid item md={6}>
            <Typography component="h2" variant="h3" align="left" gutterBottom>
              Contact Us
            </Typography>
            <Typography component="h3" variant="h4" align="left" paragraph>
              Email
            </Typography>
            <Typography component="h4" variant="h5" align="left" paragraph>
              aseansocunsw@gmail.com
            </Typography>
            <Typography component="h3" variant="h4" align="left" paragraph>
              Location
            </Typography>
            <Typography component="h4" variant="h5" align="left" paragraph>
              University of New South Wales Kensington, Sydney, NSW, 2052
            </Typography>
          </Grid>
          <Grid item md={6}>
            {/* <form>Put email form here</form> */}
            <ContactUsForm />
          </Grid>
        </Grid>
      </Block>
    </>
  );
};

export default ContactUs;
