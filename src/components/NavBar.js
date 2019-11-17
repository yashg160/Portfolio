import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';

import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import Link from '@material-ui/core/Link';

const useStyles = makeStyles(theme => ({
    root: {
        flexGrow: 1,
    },
    buttons: {
        [theme.breakpoints.down('sm')]: {
            display: 'none'
        }
    },
    menuButton: {
        [theme.breakpoints.up('md')]: {
            display: 'none',
        },
    },
    title: {
        flexGrow: 1,
    },
}));


export default function NavBar() {
    const classes = useStyles();

    const [anchorEl, setAnchorEl] = React.useState(null);

    const handleClick = event => {
        setAnchorEl(event.currentTarget);
    };

    const handleClose = () => {
        setAnchorEl(null);
    };

    return (
        <div className={classes.root}>
            <AppBar position="static">
                <Toolbar variant="dense">
                    <Typography variant="h6" className={classes.title}>
                        Yash Gupta
                    </Typography>

                    <div className={classes.buttons}>
                        <Button href="/home" color="inherit">Home</Button>
                        <Button href="/about" color="inherit">About</Button>
                        <Button href="/skills" color="inherit">Skills</Button>
                        <Button href="/contact" color="inherit">Contact</Button>
                    </div>

                    <div className={classes.menuButton} color="inherit">
                        <IconButton onClick={handleClick}>
                            <MenuIcon/>
                        </IconButton>
                    </div>

                    <div>
                        <Menu
                            anchorEl={anchorEl}
                            keepMounted
                            open={Boolean(anchorEl)}
                            onClose={handleClose}>
                            
                            <Link href="/home" color="inherit"><MenuItem onClick={handleClose}>Home</MenuItem></Link>
                            <Link href='/about' color="inherit"><MenuItem onClick={handleClose}>About</MenuItem></Link>
                            <Link href='/skills' color="inherit"><MenuItem onClick={handleClose}>Skills</MenuItem></Link>
                            <Link href='/contact' color="inherit"><MenuItem onClick={handleClose}>Contact</MenuItem></Link>

                        </Menu>
                    </div>
                    
                </Toolbar>
            </AppBar>
        </div>
    );
}