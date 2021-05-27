/**
 * Page for when user clicks into a specific event/article/blog
 */
import Container from "@material-ui/core/Container";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import React from "react";
import { useParams } from "react-router-dom";
import { Block, ParallaxBlock } from "../../components/Block";
import { Card } from "../../components/Card";
import Paper from "@material-ui/core/Paper";
import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";
import Box from "@material-ui/core/Box";
const cards = [1, 2, 3];

function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box p={3}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

const Article = () => {
  const { id } = useParams();
  const [value, setValue] = React.useState(2);
  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <>
      <ParallaxBlock hasNotch={true} image="https://images.unsplash.com/photo-1494500764479-0c8f2919a3d8?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80">
        <Typography component="h6" align="center" gutterBottom>
          15/5/2021
        </Typography>
        <Typography component="h1" variant="h2" align="center" gutterBottom>
          Article
        </Typography>
      </ParallaxBlock>
      <Block>
        Info
      </Block>
      <Block backgroundColor="white">
        <Grid container>
          <Grid item md={4}>
            <img
              src="https://images.unsplash.com/photo-1494500764479-0c8f2919a3d8?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80"
              alt="img"
              width="100%"
            />
          </Grid>
          <Grid item md={2}/>
          <Grid item md={6}>
            <Paper square>
              <Tabs
                value={value}
                indicatorColor="primary"
                textColor="primary"
                onChange={handleChange}
                aria-label="disabled tabs example"
              >
                <Tab label="Active" />
                <Tab label="2" />
                <Tab label="Active" />
              </Tabs>
              <TabPanel value={value} index={0}>
                Item One
              </TabPanel>
              <TabPanel value={value} index={1}>
                Item Two
              </TabPanel>
              <TabPanel value={value} index={2}>
                Item Three
              </TabPanel>
            </Paper>
          </Grid>
        </Grid>
        <Typography variant="h5" paragraph>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
          in risus id tortor euismod elementum. Mauris vitae sollicitudin dolor.
          Phasellus ac magna ultricies, viverra justo nec, cursus elit. Sed ac
          egestas odio. Maecenas ullamcorper elit in orci porttitor, fringilla
          cursus nibh pulvinar. Quisque gravida facilisis iaculis. Sed dictum at
          turpis at luctus. Aenean in mi lorem. Proin ultricies felis quis
          consectetur finibus. Aenean nec consequat risus, pulvinar commodo
        </Typography>
      </Block>

      <Block>
        <Typography component="h3" variant="h3" align="center" gutterBottom>
          Checkout other articles
        </Typography>
        <Container maxWidth="lg">
          <Grid container spacing={4}>
            {cards.map((card) => (
              <Card image="https://source.unsplash.com/random">
                <Typography gutterBottom variant="h5" component="h2">
                  Heading
                </Typography>
                <Typography>
                  This is a media card. You can use this section to describe the
                  content.
                </Typography>
              </Card>
            ))}
          </Grid>
        </Container>
      </Block>
    </>
  );
};

export default Article;
