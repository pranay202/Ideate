import React from 'react';
import { makeStyles, Box } from "@material-ui/core";
import bannerImg from './../images/bannerImg.png';

const useStyles = makeStyles({
    image: {
        background: `url(${bannerImg}) center/100% repeat-x`,
        width: '100%',
        height: '50vh',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        '& :first-child':{
            fontFamily: 'serif',
            fontSize: 100,
            fontWeight: 'bold',
            color: '#f43b52',
            textShadow: '3px 0px 0px #0dcaf0',
            filter: 'contrast(134%)',
            lineHeight: 1.8,
            cursor: 'pointer'
},
        '& :last-child':{
            fontFamily: "craftyGirls" ,
            fontSize: 20,
            background: 'white'
        }
    }
});

const Banner = () => {
    const classes = useStyles();
    return (
        <Box className={classes.image}>
        </Box>
    )
};

export default Banner;
