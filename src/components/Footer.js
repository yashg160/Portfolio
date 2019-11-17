import React from 'react';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import Link from '@material-ui/core/Link';
import Divider from '@material-ui/core/Divider';

export default class Footer extends React.Component{
    render() {
        return (

            <div style={{ padding: 20 }}>
                
                <Divider style={{marginBottom: 10}}/>
                <Typography variant="subtitle1" align="center">
                    Portfolio created by Yash Gupta, November 2019.
                </Typography>

                <Typography variant="body1" align="center">
                    Navigate
                </Typography>

                <Grid container direction="row" alignItems="center" justify="center"spacing={2}>
                    <Grid item>
                        <Link href='/home' color="inherit" variant="inherit">
                            Home
                        </Link>
                    </Grid>

                    <Grid item>
                        <Link href='/about' color="inherit" variant="inherit">
                            About
                        </Link>
                    </Grid>

                    <Grid item>
                        <Link href='/skills' color="inherit" variant="inherit">
                            Skills
                        </Link>
                    </Grid>
                    <Grid item>
                        <Link href='/contact' color="inherit" variant="inherit">
                            Contact
                        </Link>
                    </Grid>
                </Grid>
                <Divider style={{ marginTop: 10 }}/>
            </div>
            
        )
    }
}