import React from 'react';
import NavBar from '../components/NavBar';
import Jumbotron from 'react-bootstrap/Jumbotron';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import Divider from '@material-ui/core/Divider';
import IconButton from '@material-ui/core/IconButton';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import GitHubIcon from '@material-ui/icons/GitHub';
import MailOutlineRoundedIcon from '@material-ui/icons/MailOutlineRounded';
import Link from '@material-ui/core/Link';


import computerImage from '../images/computers.png';

export default class Contact extends React.Component {
    render() {
        return (
            <div>
                <NavBar currentScreen="Contact" />
                
                {/* Start of Jumbotron on Contact Page */}
                <Jumbotron fluid style={{ backgroundImage: `url(${computerImage})`, minHeight: 360, maxHeight: 400, backgroundAttachment: 'fixed' }}>

                    <Grid container direction="column" justify="center" alignItems="center" style={{ marginTop: 24 }}>

                        <Grid item xs={12}>
                            <Typography style={{ color: "white" }} variant='h2' align='center' gutterBottom>Contact me.</Typography>
                        </Grid>

                        <Grid item xs={12}>
                            <Typography variant="h4" align="center" gutterBottom style={{ color: 'white' }}>
                                In case you want to talk to me
                            </Typography>
                        </Grid>
                    </Grid>

                </Jumbotron>
                {/* End of Jumbotron on Contact Page */}



                {/* Start of Contact section on Contact page */}
                <Typography variant="h4" align="center" style={{ margin: 40 }}>CONTACT ME</Typography>
                
                <Divider variant='middle' style={{ height: 4 }} />

                <Typography variant="h5" align="center" style={{marginTop: 40, marginBottom: 40}}>Connect with me whenever you want to. I am always available.</Typography>
                
                <Grid container spacing={2} direcion="row" justify="center" alignItems="center">

                    <Grid item xs={12} sm={4} align="center">
                        <Link href='https://www.linkedin.com/in/yash-gupta-575679179/' color="inherit" variant="inherit" target="_blank">
                            <IconButton style={{ backgroundColor: '#0073b1' }}>
                                <LinkedInIcon style={{ width: 80, height: 80, color: 'white' }} />
                            </IconButton>
                        </Link>
                        
                    </Grid>

                    <Grid item xs={12} sm={4} align="center">
                        <Link href='https://github.com/yashg160' color='inherit' variant='inherit' target="_blank">
                            <IconButton style={{ backgroundColor: '#24292e' }}>
                                <GitHubIcon style={{ width: 80, height: 80, color: 'white' }} />
                            </IconButton>
                        </Link>
                        
                    </Grid>
                    
                    <Grid item xs={12} sm={4} align="center">
                        <Link href="mailto:yashg160@gmail.com" variant="inherit" color="inherit">
                            <IconButton style={{ backgroundColor: '#e63232' }}>
                                <MailOutlineRoundedIcon style={{ width: 80, height: 80, color: 'white' }} />
                            </IconButton>
                        </Link>
                        
                    </Grid>

                </Grid>
                {/* End of Contact section on Contact page */}

            </div>
        )
    }
}