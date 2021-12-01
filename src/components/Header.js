import React, { useState, useEffect } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { AppBar, IconButton, Toolbar } from '@material-ui/core';
import SortIcon from '@material-ui/icons/Sort';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import Collapse from '@material-ui/core/Collapse';
import { Link as Scroll } from 'react-scroll'

const useStyles = makeStyles((theme)=>({
    root: {
        fontFamily: 'Nunito',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        height: '100vh',
    },
    appbar:{
        background: 'none',
    },
    appbarWrapper: {
        width: '80%',
        margin: '0 auto',
    },
    appbarTitle: {
        flexGrow: '1',
    },
    icon: {
        color: '#FFFFFF', 
        fontSize: '2rem',
    },
    colorText: {
        color: '#F58840'
    },
    container: {
        textAlign: 'center',
    },
    title: {
        color: '#FFFFFF',
        fontSize: '3rem',
    },
    goDown: {
        color: '#FFCE45',
        fontSize: '4rem',
    },
}));

function Header(){
    const classes = useStyles();
    const [checked, setChecked] = useState(false);

    useEffect(()=> {
        setChecked(true);
    }, [])

    return (
        <div className={classes.root} id="header">
            <AppBar className={classes.appbar} elevation={0}>
                <Toolbar className={classes.appbarWrapper}>
                    <h1 className={classes.appbarTitle}>My <span className={classes.colorText}>Journey.</span></h1>
                    <IconButton>
                        <SortIcon className={classes.icon}></SortIcon>
                    </IconButton>
                </Toolbar>
            </AppBar>

            <Collapse in={checked} {...(checked ? {timeout:1000} : {})} collapseHeight={50}>
                <div className={classes.container}>
                    <h1 className={classes.title}>
                    Welcome to <br /> My <span className={classes.colorText}>Journey.</span>
                    </h1>
                    <Scroll to="place-to-visit" smooth={true} spy={true} offset={50}>
                        <IconButton>
                            <ExpandMoreIcon className={classes.goDown}/>
                        </IconButton>
                    </Scroll>
                </div>
            </Collapse>

        </div>
    );  
}

export default Header
