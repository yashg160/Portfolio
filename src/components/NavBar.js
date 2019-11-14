import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Button from '@material-ui/core/Button';
import HomeRoundedIcon from '@material-ui/icons/HomeRounded';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';

const useStyles = makeStyles(theme => ({
    root: {
        flexGrow: 1,
    },
    menuButton: {
        marginRight: theme.spacing(2),
    },
    title: {
        flexGrow: 1,
    },
}));


export default function NavBar() {
    const classes = useStyles();

    return (
        <div className={classes.root}>
            <AppBar position="fixed">
                <Toolbar variant="dense">
                    <IconButton href='/home' edge="start" className={classes.menuButton} color="inherit" aria-label="menu">
                        <HomeRoundedIcon />
                    </IconButton>
                    <Typography variant="h6" className={classes.title}>
                        Welcome
                    </Typography>
                    <Button color="inherit" variant="inherit" href="/home">Home</Button>
                    <Button color="inherit" variant="inherit" href="/about">about</Button>
                    <Button color="inherit" variant="inherit" href="/skills">skills</Button>
                    <Button color="inherit" variant="inherit" href="/contact">contact</Button>
                </Toolbar>
            </AppBar>
        </div>
    );
}