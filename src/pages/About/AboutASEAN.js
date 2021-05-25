import { Button, Typography } from '@material-ui/core'
import React from 'react'
import { CardOnCard } from '../../components/CardOnCard'

const AboutASEAN = () => {
    return (
        <CardOnCard image="https://images.squarespace-cdn.com/content/v1/5eba756bbb839b7b67d0b667/1589800399092-85P5QO8IG91A062FTEJ4/ke17ZwdGBToddI8pDm48kFQQgP34qnCpeHaeAOzTt7pZw-zPPgdn4jUwVcJE1ZvWQUxwkmyExglNqGp0IvTJZamWLI2zvYWH8K3-s_4yszcp2ryTI0HqTOaaUohrI8PIedjZT6_OBzi2ofH1EqNdNeCRxNMlbxs9807lIebBlcA/flags.png?format=750w">
          <Typography component="h2" variant="h3" gutterBottom>
            About ASEAN…
          </Typography>
          <Typography variant="h6" paragraph>
            The Association of Southeast Asian Nations, or ASEAN, was
            established on 8 August 1967 in Bangkok, Thailand, with the signing
            of the ASEAN Declaration (Bangkok Declaration) by the Founding
            Fathers of ASEAN, namely Indonesia, Malaysia, Philippines, Singapore
            and Thailand. Brunei Darussalam then joined on 7 January 1984,
            Vietnam on 28 July 1995, Lao PDR and Myanmar on 23 July 1997, and
            Cambodia on 30 April 1999, making up what is today the ten Member
            States of ASEAN.
          </Typography>
          <Button variant="outlined" href="https://asean.org/">
            Learn More...
          </Button>
        </CardOnCard>
    )
}

export default AboutASEAN
