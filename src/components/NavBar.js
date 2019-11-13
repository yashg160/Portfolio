import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Button from '@material-ui/core/Button';
import Link from '@material-ui/core/Link';

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
    button: {
        fontFamily: 'Roboto'
    }
}));

export default function NavBar() {
    const classes = useStyles();

    return (
        <div className={classes.root}>
            <AppBar position="static">
                <Toolbar>
                    <Link href='/home' color="inherit">
                        <Button color="inherit">Home</Button>
                    </Link>
                    
                    <Link href='/about' color="inherit">
                        <Button color="inherit">About</Button>
                    </Link>

                    <Link href='/skills' color="inherit">
                        <Button color="inherit">Skills</Button>
                    </Link>

                    <Link href='/contact' color="inherit">
                        <Button color="inherit">Contact</Button>
                    </Link>
                    
                </Toolbar>
            </AppBar>

            
        </div>
    );
}