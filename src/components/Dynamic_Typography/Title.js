import { Hidden, Typography } from "@material-ui/core";
import React from 'react';

const Title = ({text, component="h2"}) => {
    return (
        <div>
            <Hidden mdUp>
                <Typography component="h1" variant="h3" align="center" gutterBottom>
                    {text}
                </Typography>
            </Hidden>
            <Hidden mdDown>
                <Typography component="h1" variant={component} align="center" gutterBottom>
                    {text}
                </Typography>
            </Hidden>
        </div>
    )
}

export default Title
