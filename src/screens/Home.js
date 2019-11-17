import React from 'react';
import NavBar from '../components/NavBar';
import Footer from '../components/Footer';
import Jumbotron from 'react-bootstrap/Jumbotron';
import computersImage from '../images/computers.png';
import codeImage from '../images/code.png';
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import Divider from '@material-ui/core/Divider';

import Paper from '@material-ui/core/Paper';

import IconButton from '@material-ui/core/IconButton';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import GitHubIcon from '@material-ui/icons/GitHub';
import Link from '@material-ui/core/Link';


import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';

import GridList from '@material-ui/core/GridList';
import GridListTile from '@material-ui/core/GridListTile';

export default class Home extends React.Component {
    render() {
        const classes = makeStyles(theme => ({
            card: {
                maxWidth: 345,
            },
            media: {
                height: 0,
                paddingTop: '56.25%', // 16:9
            },
            root: {
                display: 'flex',
                flexWrap: 'wrap',
                justifyContent: 'space-around',
                overflow: 'hidden',
                backgroundColor: theme.palette.background.paper,
            }
        }));

        const styles = {
            media: {
                height: 0,
                paddingTop: '56.25%',
                marginTop: '30'
            }
        }

        return (
            <div >
                <NavBar currentScreen="Home"/>

                {/* Start of Jumbotron on Home */}
                <Jumbotron fluid style={{backgroundImage: `url(${computersImage})`, minHeight: 360, maxHeight: 400, backgroundAttachment: 'fixed'}}>
                    
                    <Grid container direction="column" justify="center" alignItems="center" style={{marginTop: 24}}>
                        
                        <Grid item xs={12}>
                            <Typography style={{ color: "white" }} variant='h2' align='center' gutterBottom>Hi. Nice to meet you.</Typography>
                        </Grid>
                        
                        <Grid item xs={12}>
                            <Button variant="contained" color="primary">
                                Download Resume
                            </Button>
                        </Grid>
                        
                        <Grid item xs={12} justify="center" alignItems="center">

                            <Grid container direction="row" justify="center" alignItems="center" style={{marginTop: 20}}>

                                <Grid item>
                                    <Link href='https://www.linkedin.com/in/yash-gupta-575679179/' color="inherit" variant="inherit" target="_blank" style={{ marginleft: 10, marginRight: 10 }}>
                                        <IconButton style={{ backgroundColor: '#0073b1'}}>
                                            <LinkedInIcon style={{ color: 'white', height: 32, width: 32 }}/>
                                        </IconButton>
                                    </Link>
                                </Grid>

                                <Grid item>
                                    <Link href='https://github.com/yashg160' color='inherit' variant='inherit' target="_blank" style={{ marginleft: 10, marginRight: 10 }}>
                                        <IconButton style={{ backgroundColor: '#24292e' }}>
                                            <GitHubIcon style={{ color: 'white', height: 32, width: 32 }}/>
                                        </IconButton>
                                    </Link>
                                </Grid>

                            </Grid>

                        </Grid>
                    </Grid>

                </Jumbotron>
                {/* End of Jumbotron on Home */}


                {/* Start of Professional Summary on Home */}
                <Typography variant='h4' gutterBottom align='center'>
                    SUMMARY
                </Typography>

                <Divider variant='middle' style={{ backgroundColor: 'red', height: '4px', marginTop: 40, marginBottom: 40 }} />
                
                <div style={{ marginLeft: 80, marginRight: 80, marginBottom: 40 }}>

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

                <Divider variant='middle' style={{ backgroundColor: 'red', height: '4px', marginTop: 40, marginBottom: 40 }} />
                
                <div style={{ paddingLeft: 60, paddingRight: 60, marginBottom: 80 }}>

                    <Grid container spacing={2} direction="row" justify="center" alignItems="flex-start" style={{marginTop: 24}}>

                        <Grid sm={12} md item>

                            <Card style={{ minHeight: 300 }}>
                                <CardHeader
                                    title="Character Recogntion"
                                    subheader="January 2019 - February 2019"
                                />
                                <CardMedia
                                    className={classes.media}
                                    image={require('../images/numbers.png')}
                                    title="MNIST Numbers Dataset"
                                    style={styles.media}
                                />
                                <CardContent>
                                    <Typography variant="body1">
                                        In this project, I trained a Multi Layer Perceptron on images of handwritten numbers. The model achieved grater than 95% accuracy of correctly predicting images of handwritten numbers.
                                    </Typography>

                                    <Typography variant="body1" style={{fontWeight: 700}}>
                                         Key skills: Python, Pytorch and Deep Learning.
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
                                    image={require('../images/flambr.jpg')}
                                    title="Flambr"
                                    style={styles.media}
                                />
                                <CardContent>
                                    <Typography variant="body1">
                                        In this project, I created a cross platform mobile dating application from scratch. It provides people suggestions based on geographical location and allown them to meet new people. Users can also right swipe to like or left swipe to ignore. 
                                    </Typography>
                                    <Typography variant="body1" style={{ fontWeight: 700 }}>
                                        Key skills: React Native, Firebase, Firestore, UI/UX Design, Database.
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
                                    image={require('../images/giftedfirechat.png')}
                                    title="React Native Gifted Fire Chat"
                                    style={styles.media}
                                />
                                <CardContent>
                                    <Typography variant="body1">
                                        In this project, I created a highly customizable, reusable chat component for React Native applications. It allows two users to integrate chat functionality into their React Native apps and customize it to make it fit into their app.
                                    </Typography>
                                    <Typography variant="body1" style={{ fontWeight: 700 }}>
                                         Key skills: React Native, Firebase, Realtime Database, and Gifted Chat.
                                    </Typography>
                                </CardContent>
                            </Card>
                        </Grid>

                        <Grid sm={12} md item justify="center" alignItems="center">

                            <Card style={{ minHeight: 300 }}>
                                <CardHeader
                                    title="Personal Profolio"
                                    subheader="November 2019"
                                />
                                <CardMedia
                                    className={classes.media}
                                    image={require('../images/homepage.png')}
                                    title="Personal Protfolio"
                                    style={styles.media}
                                />
                                <CardContent>
                                    <Typography variant="body1">
                                        In this project, I created my personal portfolio website using React.js and Material UI, a popular front end framework for React apps. In fact, you are looking at it right now.
                                    </Typography>
                                    <Typography variant="body1" style={{ fontWeight: 700 }}>
                                        Key skills: React.js, Material UI, Firebase Hosting, Git and Github.
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

                <Divider variant='middle' style={{ backgroundColor: 'red', marginTop: 40, marginBottom: 40, height: '4px' }} />

                <div style={{ paddingLeft: 60, paddingRight: 60, marginBottom: 80 }}>

                    <Grid container spacing={10} direction="row" justify="center" style={{ marginTop: 24 }}>

                        <Grid item sm={12} md={6}>

                            <Typography variant='body1'>
                                I write weekly blog posts on Medium on development and tech related topics. Follow me on Medium to get regular updates whenever I publish a blog
                                <a href='https://medium.com/@yashg160' target='_blank'> here.</a> Any claps are appreciated and remember to share my blogs.
                            </Typography>

                            <div className={classes.root} style={{maxHeight: 300}}>
                                {/* <GridList cellHeight={160} style={{maxHeight: 300, maxWidth: 400, marginTop: 20}} cols={2}>
                                    <GridListTile key="../images/bottom-navigation" cols={1}>
                                        <img src={require('../images/bottom-navigation.png')} alt="Bottom Navigation"/>
                                    </GridListTile>
                                    <GridListTile key="../images/dating-part2" cols={1}>
                                        <img src={require('../images/dating-part2.png')} alt="Flambr Part 2" />
                                    </GridListTile>
                                    <GridListTile key="../images/flambr-bottom-nav" cols={1}>
                                        <img src={require('../images/flambr-bottom-nav.png')} alt="Another Bottom Navigation" />
                                    </GridListTile>
                                    <GridListTile key="../images/gifted-fire-chat-image" cols={1}>
                                        <img src={require('../images/gifted-fire-chat-image.png')} alt="Gifted Fire Chat" />
                                    </GridListTile>
                                    <GridListTile key="../images/medium-stats" cols={1}>
                                        <img src={require('../images/medium-stats.jpg')} alt="Medim Stats" />
                                    </GridListTile>
                                    <GridListTile key="../images/dating-part1" cols={1}>
                                        <img src={require('../images/dating-part1.png')} alt="Flambr Part 1" />
                                    </GridListTile>
                                </GridList> */}
                            </div>

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
                                            In this blog I explain how I created my project React Native Gifted Fire Chat. Read it <a href="https://medium.com/@yashg160/creating-a-chat-component-with-react-native-76df88074b71" target='_blank'>here.</a>
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



                <Footer/>
            </div>
        )
    }
}