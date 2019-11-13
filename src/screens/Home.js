import React from 'react';
import NavBar from '../components/NavBar';
import Jumbotron from 'react-bootstrap/Jumbotron';
import image from '../images/computers.png';
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';

export default class Home extends React.Component {
    render() {
        return (
            <div>
                <NavBar />

                <Jumbotron fluid style={{backgroundImage: `url(${image})`, backgroundSize: 'cover', backgroundAttachment: 'fixed'}}>
                    
                    <Grid container spacing={3} direction="column" justify="center" alignItems="center">
                        <Grid item xs={12}>
                            <Typography style={{ color: "white" }} variant='h2' gutterBottom>Hi. Nice to meet you.</Typography>
                        </Grid>
                        <Grid item xs={12}>
                            <Button variant="contained" color="primary">
                                Download Resume
                            </Button>
                        </Grid>
                    </Grid>

                </Jumbotron>

                <Typography container variant='h3' gutterBottom align='center'>
                    Professional Summary
                </Typography>

                <Typography container variant='body1' paragraph >
                    
                </Typography>

            </div>
        )
    }
}