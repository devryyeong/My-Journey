import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import ImageCard from './ImageCard';
import places from '../static/places';
import useWindowPosition from '../hook/useWindowPosition';

const useStyles = makeStyles((theme)=>({
    root: {
        minHeight: '100vh',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        flexWrap: 'wrap',
        //responsive
        [theme.breakpoints.down("md")]:
        {flexDirection: 'column'},
    },
}));

function PlaceToVisit(){
    const classes = useStyles();

    //useWindowPosition이 animation을 리턴함. 언제 작동해야할까? 
    const checked = useWindowPosition('header');
    return (
        <div className={classes.root} id="place-to-visit">
            <ImageCard place={places[0]} checked={checked} />
            <ImageCard place={places[1]} checked={checked} />
            <ImageCard place={places[2]} checked={checked} />
            <ImageCard place={places[3]} checked={checked} />
        </div>
    );
}

export default PlaceToVisit