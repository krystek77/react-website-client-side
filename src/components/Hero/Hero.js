/* eslint-disable no-unused-vars */
import React from 'react';
import {Container,Typography} from '@mui/material'
import PropTypes from 'prop-types';
import useStyles from './styles';

function Hero(props){
    const classes = useStyles(props);

    return (
        <div className={classes.hero}>
           <Container className={classes['hero__container']}>
               <div className={classes['hero__content']}>
                    <Typography component="h1" variant="h3" className={classes['hero__title']}>{props.title}</Typography>
                    <Typography variant="subtitle1" className={classes['hero__subtitle']}>{props.subtitle}</Typography>
               </div>
           </Container>
        </div>
    )
}

Hero.propTypes = {
    bgBase64:PropTypes.string,
    bgImage:PropTypes.string,
    title:PropTypes.string.isRequired,
    subtitle:PropTypes.string,
    blendColor:PropTypes.string,
    blendMode:PropTypes.string
}

export default Hero;