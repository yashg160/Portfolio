import React from 'react';
import NavBar from '../components/NavBar';
import Jumbotron from 'react-bootstrap/Jumbotron';
import computersImage from '../images/computers.png';
import codeImage from '../images/code.png';
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import Divider from '@material-ui/core/Divider';

import Paper from '@material-ui/core/Paper';

import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';

export default class Home extends React.Component {
    render() {
        const classes = makeStyles(theme => ({
            card: {
                maxWidth: 345,
            },
            media: {
                height: 0,
                paddingTop: '56.25%', // 16:9
            }
        }));

        return (
            <div >
                <NavBar />

                {/* Start of Jumbotron on Home */}
                <Jumbotron fluid style={{backgroundImage: `url(${computersImage})`, minHeight: 360, backgroundAttachment: 'fixed'}}>
                    
                    <Grid container direction="column" justify="center" alignItems="center" style={{marginTop: 24}}>
                        <Grid item xs={12}>
                            <Typography style={{ color: "white" }} variant='h2' align='center' gutterBottom>Hi. Nice to meet you.</Typography>
                        </Grid>
                        <Grid item xs={12}>
                            <Button variant="contained" color="primary">
                                Download Resume
                            </Button>
                        </Grid>
                    </Grid>

                </Jumbotron>
                {/* End of Jumbotron on Home */}


                {/* Start of Professional Summary on Home */}
                <Typography variant='h4' gutterBottom align='center'>
                    SUMMARY
                </Typography>
                
                <div style={{ paddingLeft: 40, paddingRight: 40, marginBottom: 40 }}>
                    <Divider variant='middle' style={{color: '#000'}}/>

                    <Typography container variant='body1' align='center' style={{marginTop: 24}}>
                        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Suscipit et dolore, repudiandae, blanditiis ipsam atque temporibus iure itaque nesciunt nemo dolores debitis deserunt corrupti amet accusamus labore nisi eum vero!
                        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Suscipit et dolore, repudiandae, blanditiis ipsam atque temporibus iure itaque nesciunt nemo dolores debitis deserunt corrupti amet accusamus labore nisi eum vero!
                        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Suscipit et dolore, repudiandae, blanditiis ipsam atque temporibus iure itaque nesciunt nemo dolores debitis deserunt corrupti amet accusamus labore nisi eum vero!
                    </Typography>
                </div>
                {/* End of Professional Summary on Home */}



                {/* Start of Projects on Home */}
                <Typography variant='h4' gutterBottom align='center'>
                    PROJECTS
                </Typography>
                
                <div style={{ paddingLeft: 60, paddingRight: 60, marginBottom: 80 }}>
                
                    <Divider variant='middle' style={{ color: '#000' }} />

                    <Grid container spacing={2} direction="row" justify="center" alignItems="center" style={{marginTop: 24}}>

                        <Grid sm={12} md item>

                            <Card style={{ minHeight: 300 }}>
                                <CardHeader
                                    title="Character Recogntion"
                                    subheader="January 2019 - February 2019"
                                />
                                <CardMedia
                                    className={classes.media}
                                    image="/images/computers.png"
                                    title="Paella dish"
                                />
                                <CardContent>
                                    <Typography variant="body1">
                                        In this project, I trained a Multi Layer Perceptron on images of handwritten numbers. The model achieved grater than 95% accuracy on correctly predicting images of handwritten images. Key skills used were Python, Pytorch and Deep Learning.
                                    </Typography>
                                </CardContent>
                            </Card>

                        </Grid>

                        <Grid sm={12} md item justify="center" alignItems="center">

                            <Card style={{minHeight: 300}}>
                                <CardHeader
                                    title="Flambr"
                                    subheader="August 2019 - October 2019"
                                />
                                <CardMedia
                                    className={classes.media}
                                    image="/images/computers.png"
                                    title="Paella dish"
                                />
                                <CardContent>
                                    <Typography variant="body1">
                                        In this project, I created a cross platform mobile dating application from scratch. It provides people suggestions based on geographical location and allown them to meet new people. Users can also right swipe to like or left swipe to ignore. Key skills used were React Native, Firebase, Firestore, UI/UX Design, Database.
                                    </Typography>
                                </CardContent>
                            </Card>

                        </Grid>

                        <Grid sm={12} md item justify="center" alignItems="center">
                            <Card style={{ minHeight: 300 }}>
                                <CardHeader
                                    title="React Native Gifted Fire Chat"
                                    subheader="September 2019 - October 2019"
                                />
                                <CardMedia
                                    className={classes.media}
                                    image="/images/computers.png"
                                    title="Paella dish"
                                />
                                <CardContent>
                                    <Typography variant="body1">
                                        In this project, I created a highly customizable, reusable chat component for React Native applications. It allows two users to integrate chat functionality into their React Native apps and customize it to make it fit into their app. Key skills used were React Native, Firebase, Realtime Database, and Gifted Chat.
                                    </Typography>
                                </CardContent>
                            </Card>
                        </Grid>
                    </Grid>

                </div>
                {/* End of Projects on Home */}


                {/* Start of Blog Section on Home */}
                <Jumbotron fluid style={{ backgroundImage: `url(${codeImage})`, minHeight: 360, backgroundAttachment: 'fixed' }} />
                
                <Typography variant='h4' gutterBottom align='center'>
                    BLOG
                </Typography>

                <div style={{ paddingLeft: 60, paddingRight: 60, marginBottom: 80 }}>

                    <Divider variant='middle' style={{ color: '#000' }} />

                    <Grid container spacing={2} direction="row" justify="center" style={{ marginTop: 24 }}>

                        <Grid item sm={12} md={6}>

                            <Typography variant='body1'>
                                I write weekly blog posts on Medium on development and tech related topics. Follow me on Medium to get regular updates whenever I publish a blog
                                <a href='https://medium.com/@yashg160'> here.</a> Any claps are appreciated and dont forget to share my blogs.
                            </Typography>

                        </Grid >

                        <Grid item sm={12} md={6}>

                            <Grid spacing={2} direction="column" justify="center">

                                <Grid item>

                                    <Typography variant="h5" align="center">
                                        Popular Blogs
                                </Typography>

                                    <Paper style={{ padding: 16, marginTop: 20 }}>
                                        <Typography variant="h5">
                                            Creating a Chat Component With React Native
                                </Typography>

                                        <Typography variant="body1">
                                            In this blog I explain how I created my project React Native Gifted Fire Chat. Read it <a href="https://medium.com/@yashg160/creating-a-chat-component-with-react-native-76df88074b71">here.</a>
                                        </Typography>
                                    </Paper>
                                </Grid>

                                <Grid item>

                                    <Paper style={{ padding: 16, marginTop: 20 }}>
                                        <Typography variant="h5">
                                            Creating a Dating App with React Native
                                </Typography>

                                        <Typography variant="body1">
                                            In this blog series I explain how I created my project dating app Flambr. It has the highest read ratio of any of my blogs yet. Read it <a href="https://medium.com/@yashg160/create-a-dating-app-with-react-native-part-1-619d111e91ef">here</a>
                                        </Typography>
                                    </Paper>
                                </Grid>
                            </Grid>
                        </Grid>
                        

                        
                    </Grid>

                </div>
                {/* End of Blog Section on Home */}

            </div>
        )
    }
}