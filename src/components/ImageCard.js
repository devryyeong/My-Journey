import * as React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import Collapse from '@material-ui/core/Collapse';
const useStyles = makeStyles({
    root: {
        maxWidth: 550,
        
        margin: '20px',
        backgroundColor: 'rgba(0, 0, 0, 0.5)',
        
    },
    media: {
        height: 700,
        minWidth: 500,
    },
    title: {
        fontFamily: 'Nunito',
        fontWeight: 'bold',
        fontSize: '2rem',
        //color: '#fff',
    },
    desc: {
        fontFamily: 'Nunito',
        fontSize: '1.9rem',
        color: '#ddd',
    },
});

function ImageCard({ place, checked }) {
    //console.log({place}); //static/places.js
    const classes = useStyles();
    
    return (
        <div>
        <Collapse in={checked} {...(checked ? { timeout: 1000 } : {})}>
            <Card className={classes.root}>
                <CardMedia
                    className={classes.media}
                    //image={process.env.PUBLIC_URL+"/assets/island1.jpg"} to read images from the public folder.
                    image={place.imageUrl}
                    alt="This is image"
                />
                {/* <CardContent>
                    <Typography
                    gutterBottom
                    variant="h5"
                    component="h1"
                    className={classes.title}
                    >
                    {place.title}
                    </Typography>
                    <Typography
                    variant="body2"
                    color="textSecondary"
                    component="p"
                    className={classes.desc}
                    >
                    {place.description}
                    </Typography>
                </CardContent> */}
            </Card>
        </Collapse>
        </div>
    );
}

export default ImageCard