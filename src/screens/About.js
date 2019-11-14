import React from 'react';
import NavBar from '../components/NavBar';
import Jumbotron from 'react-bootstrap/Jumbotron';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';

import computerImage from '../images/computers.png';
import selfImage from '../images/self.png';
import Divider from '@material-ui/core/Divider';

import Avatar from '@material-ui/core/Avatar';

export default class About extends React.Component {
    render() {
        return (
            <div>
                <NavBar currentScreen="About"/>
                
                {/* Start of Jumbotron on About */}
                <Jumbotron fluid style={{ backgroundImage: `url(${computerImage})`, minHeight: 360, maxHeight: 400, backgroundAttachment: 'fixed'}}>

                    <Grid container direction="column" justify="center" alignItems="center" style={{ marginTop: 24 }}>

                        <Grid item xs={12}>
                            <Typography style={{ color: "white" }} variant='h2' align='center' gutterBottom>About me.</Typography>
                        </Grid>

                        <Grid item xs={12}>
                            <Typography variant="h4" align="center" gutterBottom style={{color: 'white'}}>
                                Get to know me a little
                            </Typography>
                        </Grid>
                    </Grid>

                </Jumbotron>
                {/* End of Jumbotron on About */}


                {/* Start of About Me on About Page */}
                <Typography variant='h4' gutterBottom align='center'>
                    ABOUT ME
                </Typography>

                <Divider variant='middle' style={{ color: '#000' }} />

                <div align="center">
                    <Avatar style={{ marginTop: 40, marginBottom: 20, width: '240px', height: '240px' }} variant="circle" src={selfImage}/>

                    <Typography container variant='h6' align='center' style={{}}>
                        Yash Gupta
                    </Typography>

                    <Typography container variant='body1' align='center' style={{ marginTop: 24, paddingLeft: 40, paddingRight: 40 }}>
                        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Suscipit et dolore, repudiandae, blanditiis ipsam atque temporibus iure itaque nesciunt nemo dolores debitis deserunt corrupti amet accusamus labore nisi eum vero!
                        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Suscipit et dolore, repudiandae, blanditiis ipsam atque temporibus iure itaque nesciunt nemo dolores debitis deserunt corrupti amet accusamus labore nisi eum vero!
                        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Suscipit et dolore, repudiandae, blanditiis ipsam atque temporibus iure itaque nesciunt nemo dolores debitis deserunt corrupti amet accusamus labore nisi eum vero!
                    </Typography>
                </div>
                {/* End of About Me on About Page */}
            </div>
        )
    }
}