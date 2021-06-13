import Grid from "@material-ui/core/Grid";
import { Typography, Container } from "@material-ui/core";
import React, { useEffect, useState } from "react";
import { Block, ParallaxBlock } from "../../components/Block";
import { Card } from "../../components/Card";
import tempteam from "./TempTeam";
import { LinkedIn } from "@material-ui/icons";

const getTeam = () => {
  return tempteam;
};

export default function Team() {
  // const [team, setTeam] = useState([]);
  const [execs, setExecs] = useState([]);
  const [directors, setDirectors] = useState([]);
  const [associates, setAssociates] = useState([]);
  const [uniqTeamsArr, setUniqTeamsArr] = useState([]);

  useEffect(() => {
    const team = getTeam();
    const uniqTeams = new Set();

    // setTeam(getTeam());
    setExecs(team.filter((member) => member.category === "executive"));
    setDirectors(team.filter((member) => member.category === "directors"));
    setAssociates(
      team
        .filter((member) => {
          uniqTeams.add(member.team);
          return member.category === "associates";
        })
        .sort((a, b) => a.team <= b.team)
    );
    setUniqTeamsArr(Array.from(uniqTeams));
  }, []);

  // const uniqTeamsArr = Array.from(uniqTeams);

  const memberCard = (member) => (
    <Card image="/team/default_profile.png">
      <Typography gutterBottom variant="h5" component="h2" align="center">
        {member.name}
      </Typography>
      <Typography gutterBottom variant="p" component="h3" align="center">
        {member.role}
      </Typography>
      <Typography align="center">
        <LinkedIn />
      </Typography>
    </Card>
  );
  const associateBlock = uniqTeamsArr.map((team) => {
    return (
      <Block>
        <Typography component="h2" variant="h3" align="center" gutterBottom>
          {team}
        </Typography>
        
        <Grid container spacing={4}>
          {associates
            .filter((member) => {
              return member.team === team;
            })
            .map(memberCard)}
        </Grid>
      </Block>
    );
  });

  return (
    <React.Fragment>
      {/* <CssBaseline /> */}
      <main>
        <ParallaxBlock>
          <Typography component="h1" variant="h2" align="center" gutterBottom>
            Meet the team.
          </Typography>
        </ParallaxBlock>
        <section style={{ padding: "2rem 0" }}>
          <Block>
            <Typography component="h1" variant="h2" align="center" gutterBottom>
              Execs
            </Typography>
            

            <Grid container spacing={4}>
              {execs.map(memberCard)}
            </Grid>
          </Block>
          <Block backgroundColor="white">
            <Typography component="h1" variant="h2" align="center" gutterBottom>
              Directors
            </Typography>
            
            <Grid container spacing={4}>
              {directors.map(memberCard)}
            </Grid>
          </Block>
          {/* <Block>
            <Typography component="h1" variant="h2" align="center" gutterBottom>
              Associates
            </Typography>
            </Block> */}
          {associateBlock}
        </section>
      </main>
    </React.Fragment>
  );
}
