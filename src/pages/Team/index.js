import Grid from "@material-ui/core/Grid";
import {Typography, Container} from "@material-ui/core";
import React, { useEffect, useState } from "react";
import { Block, ParallaxBlock } from "../../components/Block";
import { Card } from "../../components/Card";
import tempteam from "./TempTeam";

const getTeam = () => {
  return tempteam;
};

export default function Team() {
  const [team, setTeam] = useState([]);

  useEffect(() => {
    setTeam(getTeam());
  }, []);

  return (
    <React.Fragment>
      {/* <CssBaseline /> */}
      <main>
        <ParallaxBlock>
          <Typography component="h1" variant="h2" align="center" gutterBottom>
            Meet the team.
          </Typography>
        </ParallaxBlock>
        <section style={{padding: "2rem 0"}}>
        <Container>
        <Grid container spacing={4}>
          {team.map((member) => (
            <Card image="/team/default_profile.png">
              <Typography gutterBottom variant="h5" component="h2" align="center">
                {member.name}
              </Typography>
            </Card>
          ))}
        </Grid>
        </Container>
      </section>
       
      </main>
    </React.Fragment>
  );
}
